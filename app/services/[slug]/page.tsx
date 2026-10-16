import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Wrench,
  FileText,
  BookmarkCheck,
  ChevronRight,
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
import {
  servicesData,
  businessInfo,
  createWhatsAppUrl,
  type ServiceItem
} from "../../data/servicesData";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";

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

export async function generateStaticParams() {
  return servicesData.map((svc: ServiceItem) => ({
    slug: svc.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesData.find((s: ServiceItem) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found | JB Tech Consultants"
    };
  }

  return {
    title: `${service.title} in Rajasthan | JB Tech Consultants Chittorgarh`,
    description: `${service.shortDesc} Certified engineering testing and consultancy in Chittorgarh, Bhilwara, Udaipur, and Rajasthan by JB Tech Consultants.`,
    openGraph: {
      title: `${service.title} | JB Tech Consultants`,
      description: service.shortDesc,
      type: "website"
    }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s: ServiceItem) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || ShieldCheck;
  const relatedServices: ServiceItem[] = servicesData
    .filter((s: ServiceItem) => s.slug !== service.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: "JB Tech Consultants",
      telephone: businessInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "MP Setu Marg, Basant Nagar, Krishna Nagar",
        addressLocality: "Chittorgarh",
        addressRegion: "Rajasthan",
        postalCode: "312001",
        addressCountry: "IN"
      }
    },
    areaServed: "Rajasthan",
    description: service.shortDesc
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="service-detail-page">
        {/* Breadcrumb strip */}
        <div className="breadcrumb-strip">
          <div className="section-container">
            <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
              <Link href="/">Home</Link>
              <ChevronRight size={13} />
              <Link href="/#services">Services</Link>
              <ChevronRight size={13} />
              <span className="current">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Service Hero Banner */}
        <section className="service-hero-section">
          <div className="section-container">
            <div className="service-hero-grid">
              <div>
                <span className="service-cat-pill">
                  <Icon size={14} /> {service.category}
                </span>
                <h1 className="service-hero-title">{service.title}</h1>
                <p className="service-hero-lead">{service.fullDesc}</p>

                <div className="service-hero-badges">
                  {service.keyHighlights.map((hl: string, idx: number) => (
                    <span className="hero-hl-chip" key={idx}>
                      <CheckCircle2 size={14} /> {hl}
                    </span>
                  ))}
                </div>

                <div className="service-cta-row">
                  <a
                    href={createWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-quote"
                  >
                    <MessageCircle size={17} />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <a href={`tel:${businessInfo.phone}`} className="btn-outline-wa">
                    <Phone size={16} />
                    <span>Call +91 7728053323</span>
                  </a>
                </div>
              </div>

              {/* Quick Specification Card */}
              <div className="service-summary-card">
                <div className="service-card-header">
                  <Icon size={32} className="text-gold" />
                  <div>
                    <h3>{service.title}</h3>
                    <small>Technical Discipline Specification</small>
                  </div>
                </div>

                <div className="service-spec-list">
                  <div className="spec-row">
                    <BookmarkCheck size={16} className="text-gold" />
                    <div>
                      <strong>Technical Standards:</strong>
                      <p>{service.standards}</p>
                    </div>
                  </div>
                  <div className="spec-row">
                    <MapPin size={16} className="text-gold" />
                    <div>
                      <strong>Deployment Region:</strong>
                      <p>Chittorgarh, Bhilwara, Udaipur &amp; Statewide Rajasthan</p>
                    </div>
                  </div>
                  <div className="spec-row">
                    <ShieldCheck size={16} className="text-gold" />
                    <div>
                      <strong>Technical Lead:</strong>
                      <p>{businessInfo.leadPerson} ({businessInfo.role})</p>
                    </div>
                  </div>
                </div>

                <div className="service-card-footer-cta">
                  <Link href="/#quote" className="btn-card-quote">
                    Request an Official Proposal <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Scope & Parameters Section */}
        <section className="section-container service-content-body">
          <div className="service-details-layout">
            <div className="service-main-col">
              {/* Scope & Parameters */}
              <div className="service-detail-card">
                <div className="card-heading-icon">
                  <FileText size={22} className="text-gold" />
                  <h2>Testing Parameters &amp; Investigation Scope</h2>
                </div>
                <p className="section-note">
                  All field and laboratory tests are conducted in accordance with national specifications and standard engineering practices.
                </p>
                <div className="parameters-grid">
                  {service.parameters.map((param: string, i: number) => (
                    <div className="parameter-item" key={i}>
                      <span className="param-bullet">0{i + 1}</span>
                      <span>{param}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Utilized */}
              <div className="service-detail-card">
                <div className="card-heading-icon">
                  <Wrench size={22} className="text-gold" />
                  <h2>Specialized Equipment &amp; Instrumentation</h2>
                </div>
                <p className="section-note">
                  Company-owned drilling units, calibrated test rigs, and laboratory testing instrumentation operated by experienced technicians.
                </p>
                <div className="equipment-tags-wrap">
                  {service.equipment.map((eq: string, i: number) => (
                    <span className="equipment-chip" key={i}>
                      <Wrench size={13} /> {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="service-detail-card">
                <div className="card-heading-icon">
                  <BookmarkCheck size={22} className="text-gold" />
                  <h2>Deliverables &amp; Engineering Reports</h2>
                </div>
                <p className="section-note">
                  Every project concludes with certified documentation signed by qualified technical specialists, ready for structural design, regulatory approvals, or commercial audits.
                </p>
                <ul className="deliverables-list">
                  {service.deliverables.map((deliv: string, i: number) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-gold" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="service-sidebar-col">
              {/* Quick Consultant Card */}
              <div className="sidebar-contact-card">
                <div className="consultant-avatar">
                  <span>NS</span>
                </div>
                <h4>{businessInfo.leadPerson}</h4>
                <p className="consultant-title">{businessInfo.role}</p>
                <p className="consultant-desc">
                  Have a specific technical requirement for {service.title}? Call or WhatsApp directly to discuss site conditions and schedule mobilization.
                </p>

                <div className="sidebar-buttons">
                  <a
                    href={createWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-btn-wa"
                  >
                    <MessageCircle size={16} /> WhatsApp Enquiry
                  </a>
                  <a href={`tel:${businessInfo.phone}`} className="sidebar-btn-call">
                    <Phone size={15} /> Call {businessInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="sidebar-related-card">
                <h4>Related Disciplines</h4>
                <div className="related-links-list">
                  {relatedServices.map((rel: ServiceItem) => {
                    const RelIcon = iconMap[rel.iconName] || ShieldCheck;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="related-service-item"
                      >
                        <RelIcon size={16} className="text-gold" />
                        <div>
                          <strong>{rel.title}</strong>
                          <small>{rel.category}</small>
                        </div>
                        <ArrowRight size={13} className="rel-arrow" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Location Card */}
              <div className="sidebar-location-card">
                <h4>Laboratory &amp; Office</h4>
                <p>{businessInfo.address}</p>
                <small>{businessInfo.landmark}</small>
                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-map-link"
                >
                  Get Directions on Google Maps ↗
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
