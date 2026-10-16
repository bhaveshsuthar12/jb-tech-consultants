"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Tag,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { galleryPhotosData, createWhatsAppUrl } from "../data/servicesData";

const categories = ["All", "Diamond Core Drilling", "Mining & Geology", "Site Surveys & Boreholes"] as const;

export function PlaceGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === "All"
    ? galleryPhotosData
    : galleryPhotosData.filter((p) => p.category === selectedCategory);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhotoIndex]);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="gallery-wrapper">
      {/* Category filter tabs */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Gallery category filters">
        {categories.map((cat) => {
          const count = cat === "All"
            ? galleryPhotosData.length
            : galleryPhotosData.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`gallery-tab ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(cat);
                setActivePhotoIndex(null);
              }}
            >
              <span>{cat}</span>
              <span className="tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Responsive Photo Cards Grid */}
      <div className="gallery-cards-grid">
        {filteredPhotos.map((photo, index) => (
          <article
            className="gallery-card"
            key={photo.src}
            onClick={() => setActivePhotoIndex(index)}
          >
            <div className="gallery-card-thumb">
              <img
                src={photo.src}
                alt={photo.title}
                loading={index < 4 ? "eager" : "lazy"}
                onError={(e) => {
                  // Graceful fallback to avoid broken image display
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="gallery-thumb-overlay">
                <span className="gallery-zoom-badge">
                  <Maximize2 size={16} /> Click to Enlarge
                </span>
              </div>
              <span className="gallery-cat-chip">{photo.category}</span>
            </div>
            <div className="gallery-card-meta">
              <h3 className="gallery-card-title">{photo.title}</h3>
              <p className="gallery-card-desc">{photo.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal with controls, counter, and keyboard navigation */}
      {activePhoto && activePhotoIndex !== null && (
        <div
          className="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          {/* Backdrop click to close */}
          <div
            className="lightbox-backdrop"
            onClick={() => setActivePhotoIndex(null)}
          />

          <div className="lightbox-container">
            {/* Top controls */}
            <div className="lightbox-topbar">
              <div className="lightbox-info-top">
                <span className="lightbox-counter">
                  Photo {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
                <span className="lightbox-category-tag">
                  <Tag size={12} /> {activePhoto.category}
                </span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActivePhotoIndex(null)}
                aria-label="Close photo preview (Escape)"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Stage with image and nav arrows */}
            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-arrow-btn left"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous photo (Left arrow)"
              >
                <ChevronLeft size={30} />
              </button>

              <div className="lightbox-image-box">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="lightbox-active-img"
                />
              </div>

              <button
                type="button"
                className="lightbox-arrow-btn right"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next photo (Right arrow)"
              >
                <ChevronRight size={30} />
              </button>
            </div>

            {/* Bottom Caption and CTA */}
            <div className="lightbox-bottombar">
              <div className="lightbox-caption">
                <h4>{activePhoto.title}</h4>
                <p>{activePhoto.desc}</p>
                <div className="lightbox-badges">
                  <span><ShieldCheck size={13} /> Authentic JB Tech Consultants Field Operations</span>
                  <span>Chittorgarh & Regional Rajasthan Fleet</span>
                </div>
              </div>
              <div className="lightbox-cta">
                <a
                  href={createWhatsAppUrl(activePhoto.category, `Enquiry regarding: ${activePhoto.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="lightbox-wa-btn"
                >
                  <MessageCircle size={16} /> Enquire About This Capability
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
