import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

/**
 * Gallery Section:
 * Asymmetric editorial masonry gallery with fullscreen lightbox viewer,
 * keyboard controls, and touch swipe navigation.
 * Consumes images from weddingConfig.galleryImages.
 */
export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const images = weddingConfig.galleryImages;

  // Handle keyboard navigation for fullscreen lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  return (
    <section id="gallery" className="section" style={{ position: 'relative' }}>
      <div className="container-wide">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem auto' }}>
          <span
            className="font-arabic"
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            ألبوم صورنا • Gallery
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.8rem',
            }}
          >
            Moments in Time
          </h2>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 500,
              marginBottom: '0.3rem',
            }}
          >
            ضحكات من القلب ولحظات حب هتعيش معانا العمر كله.
          </p>

          <p
            className="font-serif"
            style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
            }}
          >
            Glances of tenderness, quiet laughter, and the promises of forever.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="gallery-masonry-grid">
          {images.map((img, index) => {
            // Give specific cards spans for editorial asymmetry
            const isWide = img.aspect === 'wide';
            const isLandscape = img.aspect === 'landscape';

            return (
              <div
                key={img.id}
                className={`gallery-item ${isWide ? 'wide-item' : ''} ${isLandscape ? 'landscape-item' : ''}`}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#EAE5DC',
                }}
              >
                {/* Photo Frame Container */}
                <div
                  className="editorial-frame"
                  style={{
                    height: '100%',
                    width: '100%',
                    minHeight: isWide ? '340px' : '420px',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div className="editorial-frame-border" />

                  {/* Hover Caption Overlay */}
                  <div className="gallery-overlay">
                    <div
                      style={{
                        padding: '1.5rem',
                        transform: 'translateY(10px)',
                        transition: 'transform 0.4s ease',
                      }}
                      className="gallery-overlay-content"
                    >
                      <span
                        className="font-sans"
                        style={{
                          fontSize: '0.7rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--color-gold-light)',
                          display: 'block',
                          marginBottom: '0.3rem',
                        }}
                      >
                        0{index + 1}
                      </span>
                      <h4
                        className="font-serif"
                        style={{
                          fontSize: '1.4rem',
                          color: '#FFFFFF',
                          fontWeight: 400,
                          marginBottom: '0.2rem',
                        }}
                      >
                        {img.title}
                      </h4>
                      <div
                        className="font-arabic"
                        style={{
                          fontSize: '1rem',
                          color: 'var(--color-champagne)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {img.titleAr}
                      </div>
                      <p
                        className="font-sans"
                        style={{
                          fontSize: '0.8rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}
                      >
                        {img.caption}
                      </p>
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.25rem',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(28, 26, 23, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FAF7F2',
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 14, 12, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(1rem, 3vw, 2.5rem)',
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FAF7F2',
            }}
          >
            <div className="font-sans" style={{ fontSize: '0.85rem', letterSpacing: '0.15em' }}>
              <span style={{ color: 'var(--color-gold)' }}>0{activeImageIndex + 1}</span> / 0{images.length}
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close fullscreen gallery"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                color: '#FAF7F2',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Central Image with Prev / Next Controls */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              padding: '1rem 0',
              overflow: 'hidden',
            }}
          >
            {/* Prev Button */}
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              style={{
                position: 'absolute',
                left: '1rem',
                zIndex: 10,
                background: 'rgba(28, 26, 23, 0.65)',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                color: '#FAF7F2',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Displayed Image */}
            <img
              src={images[activeImageIndex].src}
              alt={images[activeImageIndex].title}
              style={{
                maxHeight: '75vh',
                maxWidth: '90vw',
                objectFit: 'contain',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
              }}
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              aria-label="Next photo"
              style={{
                position: 'absolute',
                right: '1rem',
                zIndex: 10,
                background: 'rgba(28, 26, 23, 0.65)',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                color: '#FAF7F2',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div style={{ textAlign: 'center', color: '#FAF7F2' }}>
            <h4 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 300, marginBottom: '0.2rem' }}>
              {images[activeImageIndex].title}
            </h4>
            <div className="font-arabic" style={{ color: 'var(--color-gold-light)', fontSize: '1.1rem' }}>
              {images[activeImageIndex].titleAr}
            </div>
            <p className="font-sans" style={{ fontSize: '0.8rem', color: '#A89F95', marginTop: '0.3rem' }}>
              {images[activeImageIndex].caption}
            </p>
          </div>
        </div>
      )}

      <style>{`
        .gallery-masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        @media (min-width: 992px) {
          .gallery-masonry-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .wide-item {
            grid-column: span 2;
          }
          .landscape-item {
            grid-column: span 1;
          }
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(28, 26, 23, 0.92) 0%, rgba(28, 26, 23, 0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justifyContent: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-item:hover .gallery-overlay-content {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
