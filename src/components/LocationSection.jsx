import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { MapPin, Navigation, ExternalLink, Check, Copy } from 'lucide-react';

/**
 * Location Section:
 * Interactive venue & location showcase for El Torath Ballroom (قاعة التراث).
 * Clean, modern layout with high contrast and verified Google Maps link.
 */
export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const { location } = weddingConfig;

  const copyCoordinates = () => {
    navigator.clipboard.writeText(`${location.latitude}, ${location.longitude}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="section" style={{ position: 'relative', backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.6rem',
            }}
          >
            The Venue
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            Location &amp; Directions
          </h2>

          <div
            className="font-arabic"
            style={{
              fontSize: '1.4rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            موقع ومكان الحفل
          </div>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-primary)',
              fontWeight: 600,
              direction: 'rtl',
            }}
          >
            مستنيينكم تنورونا في {location.venueNameAr}، اللوكيشن واضح ومباشر على الخريطة!
          </p>
        </div>

        {/* Location Card */}
        <div
          className="editorial-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              alignItems: 'stretch',
            }}
          >
            {/* Details Panel */}
            <div
              style={{
                gridColumn: 'span 12',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="location-info-col"
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.85rem',
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                    borderRadius: '4px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <MapPin size={15} color="var(--color-gold-dark)" />
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 600,
                    }}
                  >
                    Venue
                  </span>
                </div>

                {/* Arabic Venue Name */}
                <h3
                  className="font-arabic"
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    marginBottom: '0.2rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {location.venueNameAr}
                </h3>

                {/* English Venue Name */}
                <div
                  className="font-sans"
                  style={{
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-gold-dark)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}
                >
                  {location.venueName}
                </div>

                <p
                  className="font-arabic"
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 500,
                    lineHeight: 1.7,
                    marginBottom: '0.3rem',
                    direction: 'rtl',
                  }}
                >
                  {location.addressAr}
                </p>

                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.8rem',
                  }}
                >
                  {location.address}
                </p>

                {/* Coordinates Badge */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    marginBottom: '2rem',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'monospace',
                  }}
                >
                  <span>LAT: {location.latitude}° N</span>
                  <span style={{ color: 'var(--color-champagne)' }}>|</span>
                  <span>LNG: {location.longitude}° E</span>
                  <button
                    onClick={copyCoordinates}
                    style={{
                      marginLeft: 'auto',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: copied ? 'var(--color-gold-dark)' : 'var(--color-text-muted)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-sans)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                    }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'تم النسخ' : 'نسخ'}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={location.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="font-arabic" style={{ fontSize: '0.92rem' }}>فتح في Google Maps</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-outline"
                  style={{ textDecoration: 'none' }}
                >
                  <Navigation size={15} />
                  <span className="font-arabic" style={{ fontSize: '0.92rem' }}>اتجاهات السير</span>
                </a>
              </div>
            </div>

            {/* Map Preview Panel */}
            <div
              style={{
                gridColumn: 'span 12',
                minHeight: '380px',
                position: 'relative',
                backgroundColor: '#EAE5DC',
              }}
              className="location-map-col"
            >
              <iframe
                title="El Torath Ballroom Location Map"
                src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '380px',
                  display: 'block',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card on Map */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.85rem 1.25rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <div
                    className="font-arabic"
                    style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)' }}
                  >
                    {location.venueNameAr}
                  </div>
                  <div className="font-sans" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    Talkha - Mansoura, Dakahlia
                  </div>
                </div>

                <a
                  href={location.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-gold-dark)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <span>Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .location-info-col {
            grid-column: span 6 !important;
          }
          .location-map-col {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
}
