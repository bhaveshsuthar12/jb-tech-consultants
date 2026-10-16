"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
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
import { servicesData, createWhatsAppUrl } from "../data/servicesData";

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

const serviceCategories = [
  "All Disciplines",
  "Geotechnical & Soil",
  "Mining & Geology",
  "Surveys & Structural",
  "Laboratory Testing"
] as const;

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Disciplines");

  const filteredServices = activeCategory === "All Disciplines"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="section-wrapper services-section" id="services">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-head-split">
          <div>
            <div className="section-label">02 / CORE SERVICES</div>
            <h2 className="section-title">
              11 Precision Engineering <em>Disciplines.</em>
            </h2>
            <p className="section-subtitle">
              Comprehensive testing, exploratory drilling, and surveying services engineered for infrastructure developers, mining corporations, and civil contractors.
            </p>
          </div>
          <div className="services-head-action">
            <Link href="#quote" className="btn-primary-quote">
              <span>Request Project Proposal</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="service-filter-tabs" role="tablist" aria-label="Service category filters">
          {serviceCategories.map((cat) => {
            const count = cat === "All Disciplines"
              ? servicesData.length
              : servicesData.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`service-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* 11 Services Grid */}
        <div className="services-cards-grid">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            return (
              <article className="service-card-premium" key={service.id}>
                {/* Top Badge & Number */}
                <div className="service-card-top-meta">
                  <span className="service-category-badge">{service.category}</span>
                  <span className="service-serial-tag">0{servicesData.findIndex(s => s.id === service.id) + 1}</span>
                </div>

                {/* Icon & Title */}
                <div className="service-icon-heading">
                  <div className="service-icon-box">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="service-title-text">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="service-desc-text">{service.shortDesc}</p>

                {/* Key Parameter Bullets */}
                <div className="service-key-bullets">
                  {service.parameters.slice(0, 3).map((param, pIdx) => (
                    <div className="service-bullet-item" key={pIdx}>
                      <CheckCircle2 size={13} className="text-gold" />
                      <span>{param}</span>
                    </div>
                  ))}
                </div>

                {/* Standards indicator */}
                <div className="service-standards-strip">
                  <span className="standards-label">Standard:</span>
                  <span className="standards-value">{service.standards.split(",")[0]}</span>
                </div>

                {/* Actions: WhatsApp + Details page */}
                <div className="service-card-actions">
                  <a
                    href={createWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="service-btn-wa"
                    aria-label={`Enquire for ${service.title} on WhatsApp`}
                  >
                    <MessageCircle size={15} />
                    <span>Enquire</span>
                  </a>
                  <Link
                    href={`/services/${service.slug}`}
                    className="service-btn-details"
                  >
                    <span>Technical Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
