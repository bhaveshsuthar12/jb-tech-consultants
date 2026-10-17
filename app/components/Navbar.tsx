"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Pickaxe,
  Gem,
  Layers3,
  Mountain,
  Sprout,
  FlaskConical,
  Search,
  Ruler,
  Droplets,
  Building2,
  Compass
} from "lucide-react";
import { servicesData, businessInfo, createWhatsAppUrl } from "../data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  Pickaxe,
  Gem,
  Layers3,
  Mountain,
  Sprout,
  FlaskConical,
  Search,
  Ruler,
  Droplets,
  Building2,
  Compass
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* Main navigation header */}
      <nav className="main-nav" aria-label="Main Navigation">
        <div className="nav-container">
          <Link href="/#home" className="nav-brand" onClick={() => setMobileOpen(false)}>
            <div className="brand-logo-mark">
              <span className="brand-logo-jb">JB</span>
            </div>
            <div className="brand-text">
              <span className="brand-title">JB TECH CONSULTANTS</span>
              <span className="brand-tagline">TECHNICAL TESTING · SURVEYING · EXPLORATION</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desktop">
            <Link href="/#about" className="nav-link">About</Link>

            {/* Services with rich dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link href="/#services" className="nav-link nav-dropdown-trigger">
                <span>Services</span>
                <ChevronDown size={14} className={`dropdown-chevron ${servicesDropdown ? "open" : ""}`} />
              </Link>

              {servicesDropdown && (
                <div className="services-dropdown-panel" role="menu">
                  <div className="dropdown-header">
                    <strong>11 Core Technical Disciplines</strong>
                    <Link href="/#services" onClick={() => setServicesDropdown(false)} className="dropdown-view-all">
                      View All Cards <ArrowRight size={12} />
                    </Link>
                  </div>
                  <div className="dropdown-grid">
                    {servicesData.map((svc) => {
                      const Icon = iconMap[svc.iconName] || ShieldCheck;
                      return (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          className="dropdown-item"
                          onClick={() => setServicesDropdown(false)}
                          role="menuitem"
                        >
                          <div className="dropdown-item-icon">
                            <Icon size={16} />
                          </div>
                          <div>
                            <span className="dropdown-item-title">{svc.title}</span>
                            <span className="dropdown-item-sub">{svc.category}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#industries" className="nav-link">Industries</Link>
            <Link href="/#why-us" className="nav-link">Why Us</Link>
            <Link href="/#gallery" className="nav-link">Field Gallery</Link>
            <Link href="/#process" className="nav-link">Process</Link>
            <Link href="/#reviews" className="nav-link">Reviews</Link>
            <Link href="/#location" className="nav-link">Location</Link>
          </div>

          {/* Header Action Buttons */}
          <div className="nav-actions-desktop">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-wa"
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageCircle size={16} />
              <span className="hide-tablet">WhatsApp</span>
            </a>
            <Link href="/#quote" className="btn-primary-quote">
              <span>Get a Quote</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer navigation */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-header">
            <div className="brand-logo-mark small">
              <span className="brand-logo-jb">JB</span>
            </div>
            <span className="mobile-drawer-title">JB TECH CONSULTANTS</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-drawer-content">
            <div className="mobile-links-list">
              <Link href="/#home" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/#about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                About Expertise
              </Link>
              <Link href="/#services" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                11 Services
              </Link>
              <div className="mobile-subservices">
                {servicesData.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="mobile-sublink"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>• {svc.title}</span>
                  </Link>
                ))}
              </div>
              <Link href="/#industries" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Industries Served
              </Link>
              <Link href="/#why-us" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Why JB Tech
              </Link>
              <Link href="/#gallery" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Project Gallery (11 Photos)
              </Link>
              <Link href="/#process" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Work Process
              </Link>
              <Link href="/#reviews" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Verified Reviews
              </Link>
              <Link href="/#location" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Location & Directions
              </Link>
              <Link href="/#quote" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Request a Quote
              </Link>
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-contact-card">
                <span className="mobile-contact-label">Direct Contact Person</span>
                <strong>{businessInfo.leadPerson}</strong>
                <span className="mobile-contact-role">{businessInfo.role}</span>
                <a href={`tel:${businessInfo.phone}`} className="mobile-call-link">
                  <Phone size={15} /> {businessInfo.phoneDisplay}
                </a>
              </div>
              <div className="mobile-cta-group">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-btn-wa"
                >
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
                <Link
                  href="/#quote"
                  className="mobile-btn-quote"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Formal Quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
