"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Building,
  User,
  MapPin,
  ClipboardList
} from "lucide-react";
import { servicesData, businessInfo } from "../data/servicesData";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    service: "",
    location: "",
    details: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.service) {
      newErrors.service = "Please select the required engineering service.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateQuoteMessage = () => {
    return `*TECHNICAL ENQUIRY / QUOTE REQUEST*\n` +
      `----------------------------------------\n` +
      `*Client Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      (formData.company.trim() ? `*Company/Org:* ${formData.company.trim()}\n` : "") +
      `*Required Service:* ${formData.service}\n` +
      (formData.location.trim() ? `*Project Location:* ${formData.location.trim()}\n` : "") +
      (formData.details.trim() ? `*Scope Details:* ${formData.details.trim()}\n` : "") +
      `----------------------------------------\n` +
      `_Submitted via JB Tech Consultants Website_`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = generateQuoteMessage();
    const url = `https://wa.me/917728053323?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCopy = () => {
    const text = generateQuoteMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      company: "",
      service: "",
      location: "",
      details: ""
    });
    setErrors({});
  };

  return (
    <div className="quote-form-container" id="quote">
      <div className="quote-grid">
        {/* Left column: Direct contact credentials */}
        <div className="quote-info-col">
          <div className="section-label light">09 / REQUEST A QUOTE</div>
          <h2 className="quote-heading">
            Get an Accurate <em>Technical Quotation.</em>
          </h2>
          <p className="quote-intro">
            Share your project parameters, required testing disciplines, and site location.
            Lead Consultant <strong>Niranjan Suthar</strong> and our technical team will review
            your scope and provide an itemized proposal.
          </p>

          <div className="quote-contact-cards">
            <div className="quote-info-card">
              <div className="quote-card-icon">
                <User size={20} />
              </div>
              <div>
                <span className="quote-card-label">Direct Technical Consultant</span>
                <strong>{businessInfo.leadPerson}</strong>
                <p className="quote-card-sub">{businessInfo.role}</p>
              </div>
            </div>

            <div className="quote-info-card">
              <div className="quote-card-icon">
                <Phone size={20} />
              </div>
              <div>
                <span className="quote-card-label">Immediate Phone Discussion</span>
                <a href={`tel:${businessInfo.phone}`} className="quote-link">
                  <strong>{businessInfo.phoneDisplay}</strong>
                </a>
                <p className="quote-card-sub">Mon – Sat: 9:00 AM – 7:30 PM</p>
              </div>
            </div>

            <div className="quote-info-card">
              <div className="quote-card-icon">
                <MapPin size={20} />
              </div>
              <div>
                <span className="quote-card-label">Registered Office &amp; Lab</span>
                <address className="quote-address">
                  {businessInfo.address}
                </address>
                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="quote-map-link"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form or Form Success View */}
        <div className="quote-form-card">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate className="rfq-form">
              <div className="form-header">
                <h3>Technical Scope &amp; RFQ Form</h3>
                <p>Fill out the fields below to prepare your formal quote request.</p>
              </div>

              <div className="form-fields-grid">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="rfq-name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="rfq-name"
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "input-error" : ""}
                    required
                  />
                  {errors.name && <span className="error-text"><AlertCircle size={12} /> {errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="rfq-phone">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    id="rfq-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "input-error" : ""}
                    required
                  />
                  {errors.phone && <span className="error-text"><AlertCircle size={12} /> {errors.phone}</span>}
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="rfq-company">Company / Organization (Optional)</label>
                  <input
                    id="rfq-company"
                    type="text"
                    placeholder="e.g. Buildcon Infra Pvt Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                {/* Required Service Dropdown */}
                <div className="form-group">
                  <label htmlFor="rfq-service">
                    Required Service <span className="req">*</span>
                  </label>
                  <select
                    id="rfq-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={errors.service ? "input-error" : ""}
                    required
                  >
                    <option value="" disabled>Select a core service...</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multi-Discipline Package">Multi-Discipline Testing Package</option>
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                  {errors.service && <span className="error-text"><AlertCircle size={12} /> {errors.service}</span>}
                </div>

                {/* Project Location */}
                <div className="form-group full-width">
                  <label htmlFor="rfq-location">Project Location / District</label>
                  <input
                    id="rfq-location"
                    type="text"
                    placeholder="e.g. Chittorgarh, Bhilwara, Udaipur Highway, etc."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                {/* Project Scope / Details */}
                <div className="form-group full-width">
                  <label htmlFor="rfq-details">Project Scope &amp; Testing Specifications</label>
                  <textarea
                    id="rfq-details"
                    rows={4}
                    placeholder="Describe borehole depth, number of test samples, soil type, structure type, or specific IS standards required..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-submit-rfq">
                  <ClipboardList size={18} />
                  <span>Prepare Quote &amp; Connect with Consultant</span>
                </button>
              </div>

              <p className="form-note">
                Strict data privacy. Your contact details are solely used to prepare and transmit your technical quotation.
              </p>
            </form>
          ) : (
            <div className="rfq-success-card">
              <div className="rfq-success-icon">
                <CheckCircle2 size={36} />
              </div>
              <h3>Your Quote Request is Ready!</h3>
              <p className="rfq-success-sub">
                Thank you, <strong>{formData.name}</strong>. Your scope has been structured into an official quotation ticket for JB Tech Consultants.
              </p>

              {/* Formatted Preview */}
              <div className="rfq-preview-box">
                <div className="rfq-preview-header">
                  <span>RFQ Specification Summary</span>
                  <button type="button" onClick={handleCopy} className="btn-copy-rfq">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
                <pre className="rfq-preview-text">{generateQuoteMessage()}</pre>
              </div>

              {/* Action Buttons */}
              <div className="rfq-action-buttons">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="btn-dispatch-wa"
                >
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp to Mr. Niranjan Suthar</span>
                </button>

                <a
                  href={`tel:${businessInfo.phone}`}
                  className="btn-dispatch-call"
                >
                  <Phone size={16} />
                  <span>Call {businessInfo.phoneDisplay} Directly</span>
                </a>
              </div>

              <div className="rfq-reset-row">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-reset-form"
                >
                  ← Edit details or submit another enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
