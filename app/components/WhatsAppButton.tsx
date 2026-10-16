"use client";

import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "../data/servicesData";

export function WhatsAppButton() {
  return (
    <aside className="floating-wa-wrapper" aria-label="WhatsApp quick contact">
      <a
        className="floating-wa-btn"
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp consultation with Mr. Niranjan Suthar"
      >
        <span className="wa-icon-pulse">
          <MessageCircle size={22} />
        </span>
        <div className="wa-btn-text">
          <span className="wa-btn-name">Chat with Consultant</span>
          <small className="wa-btn-status">Online • Instant Response</small>
        </div>
      </a>
    </aside>
  );
}