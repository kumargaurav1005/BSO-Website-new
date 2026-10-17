import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "About us", href: "/about/" },
  { label: "Team", href: "/team/" },
  { label: "Contact", href: "/contact/" },
];
const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bs-olymps/" },
  { label: "Instagram", href: "https://www.instagram.com/bsolymps" },
  { label: "YouTube", href: "https://www.youtube.com/@bsolymps" },
  { label: "WhatsApp", href: "https://wa.me/917017794436" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-company">
            <Link href="/" className="footer-brand" aria-label="BSO AI Review home">
              <img src="/bso-logo.webp" alt="BSO AI Review" width={256} height={256} />
              <span>BSO AI REVIEW<br />PRIVATE LIMITED</span>
            </Link>
            <p>Bharat Sports Olymps connects players, competitions and recognition through a digital sports ecosystem.</p>
            <p className="footer-motto">Where recognition is earned — not bought.</p>
            <small>Patent application: 202511086229</small>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <h2>Explore</h2>
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <div className="footer-column">
            <h2>Connect</h2>
            <a href="mailto:info@bsolymps.com">info@bsolymps.com</a>
            <a href="tel:+917017794436">+91 70177 94436</a>
            <span>Dehradun, Uttarakhand</span>
            <a href="https://www.bsolymps.com/" target="_blank" rel="noopener noreferrer">Bharat Sports Olymps ↗</a>
          </div>
          <nav className="footer-column" aria-label="Social channels">
            <h2>Follow BSO</h2>
            <div className="footer-socials">
              {socialLinks.map((item) => (
                <a className="footer-social-link" key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label} — BSO (opens in new tab)`} title={item.label}>
                  <span className="footer-social-icon"><SocialIcon name={item.label} /></span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BSO AI Review Private Limited</span>
          <span>Bharat Sports Olymps</span>
        </div>
      </div>
    </footer>
  );
}
