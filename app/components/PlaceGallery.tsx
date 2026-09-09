"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = Array.from(
  { length: 11 },
  (_, i) => `/images/jb-tech-${String(i + 1).padStart(2, "0")}.jpg`
);

export function PlaceGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="photo-grid">
        {photos.map((src, i) => (
          <figure className={`photo photo-${i + 1}`} key={src}>
            <button
              type="button"
              className="photo-button"
              onClick={() => setActive(i)}
              aria-label={`Open JB Tech Consultants photo ${i + 1}`}
            >
              <img
                src={src}
                alt={`JB Tech Consultants business photo ${i + 1}`}
                loading={i > 1 ? "lazy" : "eager"}
              />
            </button>
            <figcaption>JB Tech Consultants</figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close">
            <X size={28} />
          </button>
          <button
            className="lightbox-nav left"
            onClick={() => setActive((active - 1 + photos.length) % photos.length)}
            aria-label="Previous photo"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            className="lightbox-image"
            src={photos[active]}
            alt={`JB Tech Consultants business photo ${active + 1}`}
          />
          <button
            className="lightbox-nav right"
            onClick={() => setActive((active + 1) % photos.length)}
            aria-label="Next photo"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
