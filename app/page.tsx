import { PlaceGallery } from "./components/PlaceGallery";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Reviews from "./components/Review";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Compass,
  Droplets,
  FlaskConical,
  Gem,
  HardHat,
  Layers3,
  MapPinned,
  Mountain,
  Pickaxe,
  Ruler,
  Search,
  ShieldCheck,
  Sprout,
  Building2,
  Phone,
  MessageCircle
} from "lucide-react";

const mapsUrl =
  "https://maps.app.goo.gl/EpYLHGk3XWV8uBSZ7?g_st=ac";
const phone = "+917728053323";

const services = [
  { title: "Mining Exploration", icon: Pickaxe, text: "Technical exploration support for mining and mineral-related requirements." },
  { title: "Mineral Testing", icon: Gem, text: "Testing-focused technical support for mineral and geological materials." },
  { title: "Geotechnical Surveys", icon: Layers3, text: "Site and subsurface investigation support for engineering requirements." },
  { title: "Soil Testing", icon: Mountain, text: "Soil investigation and testing support for construction and land-use decisions." },
  { title: "Infrastructure & Agriculture", icon: Sprout, text: "Technical services supporting infrastructure and agricultural requirements." },
  { title: "Food Testing", icon: FlaskConical, text: "Testing support for food-related quality and analysis requirements." },
  { title: "Raw Material Testing", icon: Search, text: "Technical testing support for raw materials and industrial applications." },
  { title: "Land Surveys", icon: Ruler, text: "Surveying services to support land planning, development and documentation." },
  { title: "Ground Water Surveys", icon: Droplets, text: "Groundwater investigation and survey support for water-related planning." },
  { title: "Structural Consultancy", icon: Building2, text: "Technical structural consultancy for relevant engineering requirements." },
  { title: "Diamond Core Drilling Services", icon: Compass, text: "Diamond core drilling support for geological and site investigation work." }
];

const industries = [
  ["Construction & Infrastructure", HardHat],
  ["Mining & Minerals", Gem],
  ["Agriculture", Sprout],
  ["Water & Groundwater", Droplets],
  ["Manufacturing", Building2],
  ["Food & Raw Materials", FlaskConical],
  ["Land & Property Development", MapPinned]
] as const;

function wa(service?: string) {
  const message = service
    ? `Hello JB Tech Consultants, I am interested in ${service}. Please share the details and quotation.`
    : "Hello JB Tech Consultants, I would like to enquire about your services.";
  return `https://wa.me/917728053323?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="JB Tech Consultants home">
          <span className="brand-mark">JB</span>
          <span><strong>JB TECH</strong><small>CONSULTANTS</small></span>
        </a>
        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#why-us">Why Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="wa-outline" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
          <a className="gold-btn" href="#contact">Get a Consultation</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid"></div>
        <div className="hero-contour"></div>
        <div className="hero-content">
          <p className="eyebrow">TECHNICAL CONSULTING · TESTING · SURVEYING</p>
          <h1>Engineering, Testing &amp; Survey Solutions <em>You Can Trust.</em></h1>
          <p className="hero-copy">
            Professional testing, surveying, exploration and engineering consultancy
            services for infrastructure, mining, agriculture, water and industrial requirements.
          </p>
          <div className="hero-buttons">
            <a className="gold-btn big" href="#contact">Get a Consultation <ArrowRight size={18}/></a>
            <a className="ghost-btn big" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat on WhatsApp</a>
          </div>
          <div className="hero-meta">
            <span><ShieldCheck size={17}/> Multi-disciplinary services</span>
            <span><MapPinned size={17}/> Rajasthan</span>
          </div>
        </div>
        <div className="hero-side-card">
          <span>JB</span>
          <p>Technical solutions<br/>for real-world requirements.</p>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={16}/></a>
      </section>

      <section className="intro section" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="intro-grid">
          <div>
            <p className="kicker">TECHNICAL EXPERTISE</p>
            <h2>From site investigation to technical insight.</h2>
          </div>
          <div>
            <p className="lead">
              JB Tech Consultants provides a broad range of technical testing, surveying,
              exploration and engineering consultancy services.
            </p>
            <p className="muted">
              Our service portfolio covers mining and minerals, geotechnical and soil
              investigation, land and groundwater surveys, testing, drilling and structural
              consultancy.
            </p>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-top">
          <div><div className="section-label">02 / SERVICES</div><h2>Technical services, <em>clearly delivered.</em></h2></div>
          <p>Integrated services for testing, surveying, exploration and engineering requirements.</p>
        </div>

        <div className="service-grid">
          {services.map(({title, icon: Icon, text}, i) => (
            <article className="service-card" key={title}>
              <div className="card-number">0{i + 1}</div>
              <Icon className="service-icon" size={28} strokeWidth={1.5}/>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={wa(title)} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowRight size={15}/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="industries section dark" id="industries">
        <div className="section-label light">03 / INDUSTRIES</div>
        <div className="dark-heading"><h2>Built around diverse <em>technical needs.</em></h2><p>Services can support a range of sectors based on the client's specific requirement.</p></div>
        <div className="industry-grid">
          {industries.map(([name, Icon]) => (
            <div className="industry-card" key={name}><Icon size={24}/><span>{name}</span><ArrowRight size={17}/></div>
          ))}
        </div>
      </section>

      <section className="why section" id="why-us">
        <div className="section-label">04 / WHY JB</div>
        <div className="why-grid">
          <div><h2>A technical partner for the <em>next decision.</em></h2></div>
          <div className="reason-list">
            {[
              "Multi-disciplinary Technical Services",
              "Testing & Surveying Solutions",
              "Engineering-Focused Approach",
              "Professional Consultation",
              "Customer-Focused Service",
              "Integrated Technical Solutions"
            ].map((x, i) => <div className="reason" key={x}><b>0{i+1}</b><span>{x}</span><CheckCircle2 size={18}/></div>)}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="section-top"><div><div className="section-label">05 / PROCESS</div><h2>A straightforward <em>technical process.</em></h2></div></div>
        <div className="process-grid">
          {[
            ["01","Understand Your Requirement"],
            ["02","Site / Sample Assessment"],
            ["03","Testing / Survey / Investigation"],
            ["04","Technical Analysis"],
            ["05","Report & Consultation"]
          ].map(([n,t]) => <div className="process-item" key={n}><span>{n}</span><div className="process-line"></div><h3>{t}</h3></div>)}
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-top">
          <div><div className="section-label">06 / BUSINESS GALLERY</div><h2>Real work. <em>Real place.</em></h2></div>
          <p>Photos are loaded from the Google Places listing when API access is configured.</p>
        </div>
        <PlaceGallery />
      </section>
          <Reviews />
      <section className="contact section" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="section-label light">07 / CONTACT</div>
            <h2>Have a technical <em>requirement?</em></h2>
            <p>Tell us what you need and start a conversation with JB Tech Consultants.</p>
            <div className="contact-links">
              <a href={`tel:${phone}`}><Phone size={18}/> +91 7728053323</a>
              <a href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Us</a>
              <a href={mapsUrl} target="_blank" rel="noreferrer"><MapPinned size={18}/> Open in Google Maps</a>
            </div>
          </div>
          <form className="contact-form" action={wa()} method="get" target="_blank">
            <label>Name<input name="name" placeholder="Your name" required /></label>
            <label>Company<input name="company" placeholder="Company name" /></label>
            <label>Phone<input name="phone" placeholder="+91" /></label>
            <label>Service<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
            <label className="full">Message<textarea name="message" placeholder="Tell us about your requirement..." rows={4}/></label>
            <button className="gold-btn big full" type="submit">Send Enquiry on WhatsApp <ArrowRight size={18}/></button>
          </form>
        </div>
      </section>

      <section className="location section">
        <div className="location-grid">
          <div>
            <div className="section-label">08 / LOCATION</div>
            <h2>Find JB Tech <em>Consultants.</em></h2>
            <p className="muted">Open the verified Google Maps listing for the latest business location and directions.</p>
            <a className="gold-btn big" href={mapsUrl} target="_blank" rel="noreferrer"><MapPinned size={18}/> Get Directions</a>
          </div>
          <div className="map-card">
            <div className="map-pattern"></div>
            <MapPinned size={42}/>
            <strong>JB TECH CONSULTANTS</strong>
            <span>Google Maps location</span>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-brand"><span className="brand-mark">JB</span><div><strong>JB TECH CONSULTANTS</strong><small>TECHNICAL TESTING · SURVEYING · EXPLORATION</small></div></div>
        <div className="footer-contact"><a href={`tel:${phone}`}>+91 7728053323</a><a href={wa()} target="_blank" rel="noreferrer">WhatsApp</a><a href={mapsUrl} target="_blank" rel="noreferrer">Google Maps</a></div>
        <p>© 2026 JB Tech Consultants. All rights reserved.</p>
      </footer>

      <WhatsAppButton />
    </main>
  );
}