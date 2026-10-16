import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  User,
  Compass
} from "lucide-react";
import { servicesData, businessInfo, createWhatsAppUrl } from "../data/servicesData";

export function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Pre-Footer CTA Banner */}
      <div className="footer-cta-strip">
        <div className="section-container footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-kicker">TECHNICAL CONSULTANCY &amp; TESTING IN RAJASTHAN</span>
            <h3>Need precision soil testing, core drilling, or mineral assays?</h3>
            <p>Connect with Lead Consultant Niranjan Suthar for immediate project consultation and competitive quotations.</p>
          </div>
          <div className="footer-cta-buttons">
            <a href={`tel:${businessInfo.phone}`} className="footer-btn-call">
              <Phone size={17} />
              <span>Call +91 7728053323</span>
            </a>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="footer-btn-wa"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="section-container main-footer-grid">
        {/* Col 1: Brand & Key Personnel */}
        <div className="footer-col brand-col">
          <div className="footer-brand-logo">
            <div className="brand-logo-mark">
              <span className="brand-logo-jb">JB</span>
            </div>
            <div>
              <strong className="footer-brand-name">JB TECH CONSULTANTS</strong>
              <small className="footer-brand-sub">TECHNICAL TESTING · SURVEYING · EXPLORATION</small>
            </div>
          </div>

          <p className="footer-about-text">
            Premier multi-disciplinary engineering consultancy providing certified laboratory testing,
            on-site geological surveys, heavy diamond core drilling, and civil infrastructure quality assurance across Rajasthan.
          </p>

          <div className="footer-lead-card">
            <div className="footer-lead-icon">
              <User size={18} />
            </div>
            <div>
              <span className="footer-lead-title">Lead Consultant &amp; Director</span>
              <strong className="footer-lead-name">{businessInfo.leadPerson}</strong>
              <span className="footer-lead-sub">Technical Head • Geotechnical &amp; Testing</span>
            </div>
          </div>
        </div>

        {/* Col 2: All 11 Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">11 Core Disciplines</h4>
          <ul className="footer-links-list">
            {servicesData.map((svc) => (
              <li key={svc.slug}>
                <Link href={`/services/${svc.slug}`} className="footer-nav-link">
                  <ArrowRight size={11} className="footer-link-arrow" />
                  <span>{svc.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Navigation & Industries */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Navigation</h4>
          <ul className="footer-links-list">
            <li><Link href="/#about" className="footer-nav-link">About JB Tech</Link></li>
            <li><Link href="/#services" className="footer-nav-link">Service Overview</Link></li>
            <li><Link href="/#industries" className="footer-nav-link">Industries Served</Link></li>
            <li><Link href="/#why-us" className="footer-nav-link">Why Choose Us</Link></li>
            <li><Link href="/#gallery" className="footer-nav-link">Project Photo Gallery (11)</Link></li>
            <li><Link href="/#process" className="footer-nav-link">Engineering Work Process</Link></li>
            <li><Link href="/#reviews" className="footer-nav-link">Client Testimonials</Link></li>
            <li><Link href="/#location" className="footer-nav-link">Find Us on Google Maps</Link></li>
            <li><Link href="/#quote" className="footer-nav-link">Request a Technical Quote</Link></li>
          </ul>

          <h4 className="footer-col-title" style={{ marginTop: "24px" }}>Coverage Areas</h4>
          <p className="footer-coverage-text">
            Chittorgarh • Bhilwara • Udaipur • Kota • Rajsamand • Nimbahera • Southern Rajasthan
          </p>
        </div>

        {/* Col 4: Office Address & Contacts */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Office &amp; Contact</h4>

          <div className="footer-contact-block">
            <div className="footer-contact-item">
              <MapPin size={18} className="text-gold" />
              <div>
                <strong>Head Office &amp; Laboratory:</strong>
                <address className="footer-address-body">
                  {businessInfo.address}
                </address>
                <small className="footer-landmark">{businessInfo.landmark}</small>
                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-map-action"
                >
                  Open in Google Maps <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} className="text-gold" />
              <div>
                <strong>Direct Telephone:</strong>
                <a href={`tel:${businessInfo.phone}`} className="footer-direct-tel">
                  {businessInfo.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MessageCircle size={18} className="text-gold" />
              <div>
                <strong>Instant WhatsApp:</strong>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-direct-wa"
                >
                  Chat with Niranjan Suthar ↗
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} className="text-gold" />
              <div>
                <strong>Working Hours:</strong>
                <p className="footer-hours-text">{businessInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Compliance Bar */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-inner">
          <p>© {new Date().getFullYear()} JB Tech Consultants. All rights reserved.</p>
          <div className="footer-bottom-meta">
            <span>Lead Consultant: <strong>{businessInfo.leadPerson}</strong></span>
            <span>•</span>
            <span>Chittorgarh, Rajasthan – 312001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
