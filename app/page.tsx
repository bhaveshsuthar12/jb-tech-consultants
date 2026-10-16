import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPinned,
  ShieldCheck,
  Compass,
  Layers3,
  Gem,
  HardHat,
  Sprout,
  Droplets,
  Building2,
  FlaskConical,
  Wrench,
  Clock,
  ChevronDown,
  User,
  MapPin,
  ExternalLink,
  Award,
  Truck
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { PlaceGallery } from "./components/PlaceGallery";
import Reviews from "./components/Review";
import { QuoteForm } from "./components/QuoteForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { businessInfo, industriesData, createWhatsAppUrl } from "./data/servicesData";

const industryIconMap: Record<string, React.ElementType> = {
  Gem,
  HardHat,
  Sprout,
  Droplets,
  Building2,
  FlaskConical,
  MapPinned
};

export default function Home() {
  return (
    <div className="site-wrapper">
      <Navbar />

      <main id="main-content">
        {/* =========================================================
            HERO SECTION - Cinematic Industrial Engineering Identity
           ========================================================= */}
        <section id="home" className="hero-section">
          {/* Real project photo backdrop */}
          <div className="hero-backdrop-image" />
          <div className="hero-overlay-dark" />
          <div className="hero-technical-grid" />

          <div className="section-container hero-inner">
            <div className="hero-content-col">
              {/* Technical coordinates and badge */}
              <div className="hero-top-badges">
                <span className="hero-coords-pill">
                  <span className="coords-dot" /> 24°53&apos;N 74°38&apos;E • Chittorgarh, RJ
                </span>
                <span className="hero-cert-pill">
                  <ShieldCheck size={14} /> Certified Engineering Testing &amp; Surveys
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-main-title">
                Engineering Confidence Through <em>Precision Testing &amp; Surveys.</em>
              </h1>

              {/* Subheadline */}
              <p className="hero-description">
                Government contractors, mining operators, and infrastructure developers across
                Rajasthan rely on <strong>JB Tech Consultants</strong> for certified geotechnical
                investigations, mineral testing, diamond core drilling, and engineering surveying.
              </p>

              {/* Primary Dual CTAs */}
              <div className="hero-cta-buttons">
                <Link href="#quote" className="btn-hero-primary">
                  <span>Request a Technical Quote</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-wa"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Key Highlights Grid (Verified facts, zero fake stats) */}
              <div className="hero-features-bar">
                <div className="hero-feature-item">
                  <Compass size={18} className="text-gold" />
                  <div>
                    <strong>11 Core Disciplines</strong>
                    <small>Geotechnical, Mining, Surveys &amp; Lab</small>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <Truck size={18} className="text-gold" />
                  <div>
                    <strong>Company-Owned Rigs</strong>
                    <small>Heavy Diamond Core &amp; Rotary Units</small>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <ShieldCheck size={18} className="text-gold" />
                  <div>
                    <strong>Certified Reports</strong>
                    <small>Decision-Ready Engineering Data</small>
                  </div>
                </div>

                <div className="hero-feature-item">
                  <MapPin size={18} className="text-gold" />
                  <div>
                    <strong>Chittorgarh HQ</strong>
                    <small>Mobilization Across Rajasthan</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Side Technical Card */}
            <div className="hero-side-technical-card">
              <div className="hero-side-card-glow" />
              <div className="hero-side-card-content">
                <div className="side-card-badge">DIRECT TECHNICAL CONSULTATION</div>
                <div className="side-card-person">
                  <div className="side-card-avatar">
                    <User size={24} />
                  </div>
                  <div>
                    <strong className="side-card-name">{businessInfo.leadPerson}</strong>
                    <span className="side-card-role">{businessInfo.role}</span>
                  </div>
                </div>

                <div className="side-card-specs">
                  <div className="side-spec-item">
                    <span>Field Office:</span>
                    <strong>{businessInfo.addressShort}</strong>
                  </div>
                  <div className="side-spec-item">
                    <span>Telephone:</span>
                    <a href={`tel:${businessInfo.phone}`} className="side-card-tel">
                      {businessInfo.phoneDisplay}
                    </a>
                  </div>
                  <div className="side-spec-item">
                    <span>Testing Fleet:</span>
                    <strong>Truck &amp; Tractor Mounted Rigs</strong>
                  </div>
                </div>

                <Link href="#quote" className="btn-side-card">
                  <span>Enquire for Your Project</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Cue */}
          <a className="hero-scroll-cue" href="#about" aria-label="Scroll to explore about section">
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={15} />
          </a>
        </section>

        {/* =========================================================
            SECTION 01 - ABOUT EXECUTIVE SUMMARY
           ========================================================= */}
        <section className="section-wrapper about-section" id="about">
          <div className="section-container">
            <div className="section-label">01 / TECHNICAL PROFILE</div>
            <div className="about-grid">
              <div>
                <span className="section-kicker">ENGINEERING &amp; GEOLOGICAL EXPERTISE</span>
                <h2 className="section-title">
                  From Subsurface Exploration to <em>Certified Engineering Insight.</em>
                </h2>
                <div className="about-quote-box">
                  <p>
                    &ldquo;Our mission is straightforward: deliver precise, uncompromised testing data
                    and geological clarity so engineers and developers build with complete confidence.&rdquo;
                  </p>
                  <span className="about-author">— Niranjan Suthar, Technical Director</span>
                </div>
              </div>

              <div className="about-text-col">
                <p className="lead-paragraph">
                  <strong>JB Tech Consultants</strong> is a trusted technical testing, surveying,
                  and engineering consultancy based in Chittorgarh, Rajasthan.
                </p>
                <p className="body-paragraph">
                  Operating with in-house laboratory testing facilities and company-owned mobile
                  diamond core drilling rigs, we support highway projects, railway bridges,
                  industrial plants, agricultural estates, and mining leases throughout Rajasthan.
                </p>
                <p className="body-paragraph">
                  Our comprehensive capabilities bridge initial land surveying and groundwater
                  detection, through core drilling and strata sampling, to detailed laboratory
                  soil mechanics, mineral assays, and structural integrity evaluations.
                </p>

                <div className="about-pillars-grid">
                  <div className="about-pillar">
                    <CheckCircle2 size={16} className="text-gold" />
                    <div>
                      <strong>Field-to-Lab Integration</strong>
                      <p>Complete control over sampling and laboratory analysis ensures uncompromised data fidelity.</p>
                    </div>
                  </div>
                  <div className="about-pillar">
                    <CheckCircle2 size={16} className="text-gold" />
                    <div>
                      <strong>Decisive Strata Reports</strong>
                      <p>Actionable borehole logs, SBC calculations, and mineral percentages signed by specialists.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 02 - 11 CORE SERVICES
           ========================================================= */}
        <ServicesSection />

        {/* =========================================================
            SECTION 03 - INDUSTRIES SERVED
           ========================================================= */}
        <section className="section-wrapper industries-section dark-bg" id="industries">
          <div className="section-container">
            <div className="section-head-split">
              <div>
                <div className="section-label light">03 / SECTOR CAPABILITIES</div>
                <h2 className="section-title light">
                  Tailored Solutions for <em>Key Industries.</em>
                </h2>
                <p className="section-subtitle light">
                  Every sector demands specific testing methodologies, tolerances, and compliance standards.
                </p>
              </div>
              <div className="industries-head-action">
                <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-outline-wa-light">
                  <MessageCircle size={16} /> Discuss Industry Requirement
                </a>
              </div>
            </div>

            <div className="industries-cards-grid">
              {industriesData.map((ind) => {
                const IndIcon = industryIconMap[ind.icon] || ShieldCheck;
                return (
                  <article className="industry-card-item" key={ind.name}>
                    <div className="industry-card-header">
                      <div className="industry-icon-box">
                        <IndIcon size={24} />
                      </div>
                      <span className="industry-tagline">{ind.tagline}</span>
                    </div>

                    <h3 className="industry-name">{ind.name}</h3>
                    <p className="industry-desc">{ind.desc}</p>

                    <div className="industry-services-tags">
                      <span className="tags-label">Relevant Services:</span>
                      <div className="tags-chips">
                        {ind.relevantServices.map((srv, sIdx) => (
                          <span className="ind-service-pill" key={sIdx}>{srv}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 04 - WHY CHOOSE JB TECH CONSULTANTS
           ========================================================= */}
        <section className="section-wrapper why-section" id="why-us">
          <div className="section-container">
            <div className="section-label">04 / WHY PARTNER WITH US</div>
            <div className="why-header-row">
              <h2 className="section-title">
                Engineered for <em>Trust &amp; Technical Accuracy.</em>
              </h2>
              <p className="section-subtitle">
                We believe in verified field capabilities and rigorous laboratory standards, providing clients with genuine data they can build upon.
              </p>
            </div>

            <div className="why-pillars-grid">
              <div className="why-card">
                <div className="why-number">01</div>
                <h3>Rigorous Laboratory &amp; Field Protocols</h3>
                <p>
                  Tests are conducted following Bureau of Indian Standards (BIS) and standard testing methodologies. Calibrated equipment ensures high repeatability and data integrity.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">02</div>
                <h3>Company-Owned Drilling Fleet</h3>
                <p>
                  We mobilize our own heavy-duty truck and tractor-mounted rotary diamond core drilling rigs, ensuring rapid field deployment without dependence on third-party machinery.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">03</div>
                <h3>Decision-Ready Certified Reports</h3>
                <p>
                  Our technical reports contain full stratigraphic logs, graphical test curves, bearing capacity formulations, and actionable recommendations ready for structural engineers.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">04</div>
                <h3>Direct Lead Consultant Oversight</h3>
                <p>
                  Technical Director <strong>Niranjan Suthar</strong> personally reviews project investigations, ensuring clients receive experienced engineering guidance from day one.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">05</div>
                <h3>Southern Rajasthan Geotechnical Familiarity</h3>
                <p>
                  Decades of collective experience working in the hard rock terrain, mineral belts, and soil profiles of Chittorgarh, Bhilwara, Udaipur, Kota, and Rajsamand.
                </p>
              </div>

              <div className="why-card">
                <div className="why-number">06</div>
                <h3>Integrated Field-to-Lab Workflow</h3>
                <p>
                  No fragmentation. From the first DGPS topographical point or diamond borehole to the final chemical assay and structural signoff, we manage the entire technical cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 05 - 4-STEP TECHNICAL WORK PROCESS
           ========================================================= */}
        <section className="section-wrapper process-section dark-bg" id="process">
          <div className="section-container">
            <div className="section-label light">05 / HOW WE WORK</div>
            <h2 className="section-title light">
              A Transparent, <em>Four-Phase Engineering Process.</em>
            </h2>
            <p className="section-subtitle light">
              Ensuring clear expectations, standardized methodologies, and timely deliverables on every project.
            </p>

            <div className="process-timeline-grid">
              <div className="process-step-card">
                <span className="step-count">PHASE 01</span>
                <div className="step-line-bar" />
                <h3>Scope Mapping &amp; Proposal</h3>
                <p>
                  We review your project drawings, site location, required testing standards (IS/ASTM), and formulate an itemized technical proposal.
                </p>
              </div>

              <div className="process-step-card">
                <span className="step-count">PHASE 02</span>
                <div className="step-line-bar" />
                <h3>Field Mobilization &amp; Sampling</h3>
                <p>
                  Our drilling rigs, survey crews, or sampling technicians arrive on-site for core drilling, SPT tests, DGPS survey, or material sample collection.
                </p>
              </div>

              <div className="process-step-card">
                <span className="step-count">PHASE 03</span>
                <div className="step-line-bar" />
                <h3>Laboratory Testing &amp; Analysis</h3>
                <p>
                  Collected soil, rock, aggregate, or water samples undergo rigorous physical and chemical analysis inside our controlled testing environment.
                </p>
              </div>

              <div className="process-step-card">
                <span className="step-count">PHASE 04</span>
                <div className="step-line-bar" />
                <h3>Certified Report &amp; Consultation</h3>
                <p>
                  Delivery of certified, signed engineering reports with full borehole logs, test curves, and a technical briefing with our consultants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 06 - FIELD PROJECT PHOTO GALLERY (11 PHOTOS)
           ========================================================= */}
        <section className="section-wrapper gallery-section" id="gallery">
          <div className="section-container">
            <div className="section-head-split">
              <div>
                <div className="section-label">06 / ON-SITE EVIDENCE</div>
                <h2 className="section-title">
                  Real Equipment. <em>Real Operations.</em>
                </h2>
                <p className="section-subtitle">
                  Browse 11 genuine project photographs documenting our drilling rigs, core recovery, field geological logging, and on-site testing teams.
                </p>
              </div>
              <div className="gallery-head-note">
                <span className="gallery-badge-real">
                  <ShieldCheck size={14} /> 100% Authentic Project Photography
                </span>
              </div>
            </div>

            <PlaceGallery />
          </div>
        </section>

        {/* =========================================================
            SECTION 07 - VERIFIED CLIENT REVIEWS (10 REVIEWS)
           ========================================================= */}
        <Reviews />

        {/* =========================================================
            SECTION 08 - SERVICE LOCATION & RAJASTHAN COVERAGE
           ========================================================= */}
        <section className="section-wrapper location-section" id="location">
          <div className="section-container">
            <div className="section-label">07 / FIND OUR OFFICE</div>
            <div className="location-split-grid">
              <div className="location-info-pane">
                <h2 className="section-title">
                  Visit Our <em>Chittorgarh Headquarters.</em>
                </h2>
                <p className="location-desc">
                  Our central office and testing facility is located on MP Setu Marg in Basant Nagar,
                  serving as our coordination hub for field exploration teams and core drilling rigs across Rajasthan.
                </p>

                <div className="location-address-box">
                  <MapPin size={22} className="text-gold" />
                  <div>
                    <strong>JB TECH CONSULTANTS</strong>
                    <address className="address-full">
                      {businessInfo.address}
                    </address>
                    <p className="address-landmark">
                      <strong>Landmark:</strong> {businessInfo.landmark}
                    </p>
                  </div>
                </div>

                <div className="location-regions-box">
                  <h4>Regional Project Deployment Coverage:</h4>
                  <div className="regions-tags">
                    {businessInfo.serviceRegions.map((region) => (
                      <span className="region-chip" key={region}>
                        <CheckCircle2 size={12} className="text-gold" /> {region}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="location-actions">
                  <a
                    href={businessInfo.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-quote"
                  >
                    <MapPinned size={18} />
                    <span>Open in Google Maps for Directions</span>
                    <ExternalLink size={14} />
                  </a>
                  <a href={`tel:${businessInfo.phone}`} className="btn-outline-wa">
                    <Phone size={16} />
                    <span>Call Ahead: {businessInfo.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Visual Map Destination Card */}
              <div className="location-map-card">
                <div className="map-card-pattern" />
                <div className="map-card-inner">
                  <div className="map-pin-pulse">
                    <MapPinned size={48} className="text-gold" />
                  </div>
                  <h3>JB TECH CONSULTANTS</h3>
                  <p className="map-card-addr">{businessInfo.addressShort}, Rajasthan – 312001</p>
                  <span className="map-card-lead">Technical Lead: <strong>{businessInfo.leadPerson}</strong></span>
                  <div className="map-card-hours">
                    <Clock size={14} /> <span>{businessInfo.hours}</span>
                  </div>
                  <a
                    href={businessInfo.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-map-card-action"
                  >
                    <span>View Verified Google Maps Listing</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 09 - LEAD GENERATION / QUOTE FORM
           ========================================================= */}
        <section className="section-wrapper quote-section dark-bg">
          <div className="section-container">
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}