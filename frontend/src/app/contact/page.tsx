import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = {
  title: "Contact us | BSO AI Review Private Limited",
};
export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="overline">Contact</div>
            <h1>Let's start a conversation.</h1>
          </div>
          <p>
            Reach the BSO team about products, partnerships, pilots or the
            athlete ecosystem.
          </p>
        </div>
      </section>
      <section className="page-section wrap contact-grid">
        <div>
          <div className="overline">Contact details</div>
          <h2>Connect with BSO.</h2>
          <p>
            Use the official contact channels published by Bharat Sports Olymps.
            For product conversations, include a short description of your
            organisation and what you would like to explore.
          </p>
          <div className="contact-method">
            <small>Email</small>
            <a href="mailto:info@bsolymps.com">info@bsolymps.com</a>
          </div>
          <div className="contact-method">
            <small>Phone / WhatsApp</small>
            <a href="tel:+917017794436">+91 70177 94436</a>
          </div>
          <div className="contact-method">
            <small>Starting location</small>
            <strong>Dehradun, Uttarakhand, India</strong>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
