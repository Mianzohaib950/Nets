import { Link } from "react-router";
import { AnimateIn } from "../components/shared/AnimateIn";

export default function Privacy() {
  return (
    <>
      <div className="bg-forest-900 pt-32 pb-20">
        <div className="max-w-[960px] mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">Your information</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-primary-foreground tracking-[-0.02em] leading-[1.05]">Privacy Policy</h1>
            <p className="mt-5 text-primary-foreground/70">Last updated July 21, 2026</p>
          </AnimateIn>
        </div>
      </div>
      <article className="bg-background py-16 md:py-24">
        <div className="prose prose-lg max-w-[760px] mx-auto px-6 text-foreground/80 [&_h2]:font-serif [&_h2]:font-light [&_h2]:text-forest-900 [&_h2]:mt-10 [&_a]:text-primary [&_a]:underline">
          <p>Nets Unlimited, Inc. respects your privacy. This policy explains what information this website handles when you contact us and how you can ask questions about that information.</p>
          <h2>Information you provide</h2>
          <p>When you submit the contact form, we receive your name, email address, selected subject and message. You may also choose to provide a company name and telephone number. Please do not submit confidential, sensitive or regulated information through the form.</p>
          <h2>How we use inquiry information</h2>
          <p>We use the information to review and respond to your inquiry, discuss a potential project, provide requested information and protect the form from misuse. Contact-form submissions are delivered to authorized business personnel through our email service provider. The form also uses limited, temporary IP-address processing to reduce automated abuse and excessive submissions.</p>
          <h2>Services provided by others</h2>
          <p>This website loads fonts from Google Fonts and displays an embedded Google Map on the contact page. Those services may receive technical information such as your IP address, browser details and the page requested under their own privacy terms. Following an external link, including LinkedIn or Google Maps, takes you to a service controlled by that provider.</p>
          <h2>Cookies and analytics</h2>
          <p>The current website does not install an advertising or analytics platform in its repository. If measurement or advertising technology is added later, this policy and any legally required consent controls should be updated before that technology is enabled.</p>
          <h2>Retention and choices</h2>
          <p>Business correspondence may be retained for operational, project, safety, legal or recordkeeping needs. Retention can vary with the nature of the inquiry and any resulting business relationship. You may ask us to review, correct or delete contact information, subject to applicable legal and operational obligations.</p>
          <h2>Contact us</h2>
          <p>For privacy questions, email <a href="mailto:info@netsunlimited.com">info@netsunlimited.com</a>, call <a href="tel:4805151300">(480) 515-1300</a>, or write to Nets Unlimited, Inc., 20625 North 29th Place, Phoenix, Arizona 85050.</p>
          <p><Link to="/contact/">Contact Nets Unlimited</Link></p>
        </div>
      </article>
    </>
  );
}
