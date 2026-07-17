import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { AnimateIn } from "../components/shared/AnimateIn";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

type ContactApiResult = {
  ok?: boolean;
  error?: string;
};

const hours = [
  { day: "Monday", hours: "7:00 AM – 4:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 4:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 4:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 4:00 PM" },
  { day: "Friday", hours: "7:00 AM – 4:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
const googleMapsUrl = "https://maps.app.goo.gl/Ka7icMBxsSZ5ZPRz8";

async function submitContactForm(data: FormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  let result: ContactApiResult | null = null;
  try {
    result = (await response.json()) as ContactApiResult;
  } catch {
    // A non-JSON response usually means the API route is unavailable.
  }

  if (!response.ok || !result?.ok) {
    throw new Error(result?.error || `Unable to send your message. (${response.status})`);
  }
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      await submitContactForm(data);

      toast.success("Thanks — your message has been sent. We'll be in touch shortly.");
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send your message. Please try again.");
    }
  }

  return (
    <>
      {/* Header */}
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Reach out</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">
              Contact Us
            </h1>
          </AnimateIn>
        </div>
      </div>

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
            {/* Form */}
            <AnimateIn>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-clay">*</span>
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      maxLength={100}
                      className="w-full bg-secondary border border-border rounded-[2px] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-forest-500 transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input
                      {...register("company")}
                      maxLength={120}
                      className="w-full bg-secondary border border-border rounded-[2px] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-forest-500 transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-clay">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                      })}
                      maxLength={254}
                      className="w-full bg-secondary border border-border rounded-[2px] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-forest-500 transition-colors"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      maxLength={40}
                      className="w-full bg-secondary border border-border rounded-[2px] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-forest-500 transition-colors"
                      placeholder="(480) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service / Subject <span className="text-clay">*</span>
                  </label>
                  <select
                    {...register("subject", { required: "Please select a service or subject" })}
                    className="w-full bg-secondary border border-border rounded-[2px] px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-forest-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Request a Quote</option>
                    <option>Inspection / Maintenance</option>
                    <option>Fabrication</option>
                    <option>Installation</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-clay">*</span>
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "Please write at least 10 characters" } })}
                    rows={6}
                    maxLength={5000}
                    className="w-full bg-secondary border border-border rounded-[2px] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-forest-500 transition-colors resize-none"
                    placeholder="Describe your project or inquiry..."
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group bg-primary text-primary-foreground px-8 py-3.5 rounded-[2px] text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                >
                  <span className="relative">
                    {isSubmitting ? "Sending…" : "Send"}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                  </span>
                </button>

              </form>
            </AnimateIn>

            {/* Info sidebar */}
            <AnimateIn delay={0.15}>
              <div className="space-y-10">
                <div>
                  <h2 className="font-serif text-2xl font-light text-forest-900 tracking-tight mb-6">
                    Nets Unlimited, Inc.
                  </h2>
                  <div className="space-y-5 text-sm">
                    <div className="flex gap-4">
                      <MapPin size={16} className="text-clay mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-0.5">Our Office</p>
                        <p className="text-muted-foreground">
                          20625 North 29th Place<br />Phoenix, Arizona 85050<br />United States
                        </p>
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-2 text-primary hover:text-forest-500 font-medium transition-colors"
                        >
                          Open in Maps →
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone size={16} className="text-clay mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-0.5">Phone</p>
                        <a href="tel:4805151300" className="text-muted-foreground hover:text-primary transition-colors">
                          (480) 515-1300
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail size={16} className="text-clay mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-0.5">Email</p>
                        <a href="mailto:info@netsunlimited.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@netsunlimited.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={16} className="text-clay" />
                    <h3 className="font-medium text-foreground text-sm">Business Hours</h3>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {hours.map(({ day, hours: h }) => (
                        <tr
                          key={day}
                          className={`border-b border-border last:border-0 ${day === today ? "font-medium" : ""}`}
                        >
                          <td className={`py-2.5 ${day === today ? "text-primary" : "text-foreground"}`}>{day}</td>
                          <td className={`py-2.5 text-right ${h === "Closed" ? "text-muted-foreground" : "text-foreground"}`}>
                            {h}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Interactive office map */}
                <div className="relative w-full rounded-[4px] overflow-hidden border border-border h-64 bg-secondary">
                  <iframe
                    title="Nets Unlimited office location"
                    src="https://www.google.com/maps?q=20625+North+29th+Place,+Phoenix,+Arizona+85050&output=embed"
                    width="100%"
                    height="100%"
                    className="block border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  {/* Mask Google's built-in link so only one map action is visible. */}
                  <div className="absolute left-0 top-0 z-10 h-[52px] w-[150px] bg-[#edf1ec]">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute left-2 top-2 inline-flex h-9 items-center gap-1.5 bg-white px-3 text-sm font-medium text-[#1967d2] shadow-md hover:bg-[#f8f9fa]"
                      aria-label="Open office location in Google Maps"
                    >
                      Maps
                      <ExternalLink size={14} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

    </>
  );
}
