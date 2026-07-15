import nodemailer from "nodemailer";
import path from "path";

let localEnvLoaded = false;

async function ensureLocalEnv() {
  if (localEnvLoaded || process.env.SMTP_HOST || process.env.VERCEL) {
    return;
  }

  localEnvLoaded = true;

  try {
    const { default: dotenv } = await import("dotenv");
    const envPath = path.resolve(process.cwd(), ".env.local");
    dotenv.config({ path: envPath });
  } catch {
    // Ignore missing dotenv in production/serverless environments.
  }
}

const MAX_BODY_SIZE = 25_000;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestsByIp = new Map();

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseBody(req) {
  if (typeof req.body === "string") {
    if (req.body.length > MAX_BODY_SIZE) throw new Error("PAYLOAD_TOO_LARGE");
    try {
      return JSON.parse(req.body);
    } catch {
      throw new Error("INVALID_JSON");
    }
  }
  return req.body ?? {};
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  await ensureLocalEnv();

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const forwardedFor = req.headers?.["x-forwarded-for"];
    const ip = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(",")[0])?.trim() || "unknown";
    const now = Date.now();
    const recentRequests = (requestsByIp.get(ip) || []).filter((time) => now - time < RATE_LIMIT_WINDOW);
    if (recentRequests.length >= RATE_LIMIT_MAX) {
      return res.status(429).json({ error: "Too many messages. Please wait a few minutes and try again." });
    }
    recentRequests.push(now);
    requestsByIp.set(ip, recentRequests);

    const raw = parseBody(req);
    if (clean(raw.website, 200)) return res.status(200).json({ ok: true });

    const submission = {
      name: clean(raw.name, 100),
      company: clean(raw.company, 120),
      email: clean(raw.email, 254).toLowerCase(),
      phone: clean(raw.phone, 40),
      subject: clean(raw.subject, 100),
      message: clean(raw.message, 5000),
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!submission.name || !emailPattern.test(submission.email) || !submission.subject || submission.message.length < 10) {
      return res.status(400).json({ error: "Please complete all required fields correctly." });
    }

    const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM_EMAIL"];
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);
    if (missingEnv.length) {
      console.error(`Contact email configuration is missing: ${missingEnv.join(", ")}`);
      return res.status(500).json({ error: "Email service is not configured." });
    }

    const port = Number(process.env.SMTP_PORT);
    if (!Number.isInteger(port)) {
      console.error("SMTP_PORT must be a valid number.");
      return res.status(500).json({ error: "Email service is not configured." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_FROM_EMAIL;
    const fromName = "Nets Unlimited, Inc.";
    const safe = Object.fromEntries(Object.entries(submission).map(([key, value]) => [key, escapeHtml(value)]));

    await transporter.sendMail({
      from: { name: fromName, address: process.env.SMTP_FROM_EMAIL },
      to: adminEmail,
      replyTo: { name: submission.name, address: submission.email },
      subject: `New ${submission.subject} Inquiry | ${submission.name}`,
      text: [
        "NETS UNLIMITED, INC. — WEBSITE CONTACT",
        "",
        "A new customer inquiry has been received through the Nets Unlimited, Inc. website.",
        "",
        `Service / Subject: ${submission.subject}`,
        `Name: ${submission.name}`,
        `Company: ${submission.company || "Not provided"}`,
        `Email: ${submission.email}`,
        `Phone: ${submission.phone || "Not provided"}`,
        "",
        "Message:",
        submission.message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#172b23;line-height:1.6;max-width:680px;margin:0 auto;border:1px solid #e2e6e3">
          <div style="background:#123c2b;padding:22px 28px;color:#ffffff">
            <div style="font-size:12px;letter-spacing:1.6px;text-transform:uppercase;opacity:.8">Nets Unlimited, Inc.</div>
            <h2 style="font-size:22px;margin:5px 0 0">New Contact Form Submission</h2>
          </div>
          <div style="padding:24px 28px">
            <p style="margin:0 0 20px;color:#52645c">A new customer inquiry has been received through the Nets Unlimited, Inc. website.</p>
            <table style="width:100%;border-collapse:collapse;margin:0 0 24px">
              <tr><td style="width:34%;padding:10px;border-bottom:1px solid #e2e6e3;font-weight:bold">Service / Subject</td><td style="padding:10px;border-bottom:1px solid #e2e6e3">${safe.subject}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #e2e6e3;font-weight:bold">Name</td><td style="padding:10px;border-bottom:1px solid #e2e6e3">${safe.name}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #e2e6e3;font-weight:bold">Company</td><td style="padding:10px;border-bottom:1px solid #e2e6e3">${safe.company || "Not provided"}</td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #e2e6e3;font-weight:bold">Email</td><td style="padding:10px;border-bottom:1px solid #e2e6e3"><a style="color:#1f5a40" href="mailto:${safe.email}">${safe.email}</a></td></tr>
              <tr><td style="padding:10px;border-bottom:1px solid #e2e6e3;font-weight:bold">Phone</td><td style="padding:10px;border-bottom:1px solid #e2e6e3">${safe.phone || "Not provided"}</td></tr>
            </table>
            <h3 style="font-size:16px;margin:0 0 8px">Customer Message</h3>
            <div style="white-space:pre-wrap;background:#f4f5f1;border-left:4px solid #b97445;padding:16px 18px">${safe.message}</div>
            <p style="font-size:13px;color:#607168;margin:22px 0 0">Use Reply to respond directly to ${safe.name} at ${safe.email}.</p>
          </div>
          <div style="background:#f4f5f1;padding:14px 28px;font-size:12px;color:#718078">Automated notification from the Nets Unlimited, Inc. website.</div>
        </div>`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      return res.status(413).json({ error: "Submission is too large." });
    }
    if (error instanceof Error && error.message === "INVALID_JSON") {
      return res.status(400).json({ error: "Invalid form payload." });
    }
    console.error("Contact email failed:", error);
    return res.status(500).json({ error: "We couldn't send your message. Please try again shortly." });
  }
}
