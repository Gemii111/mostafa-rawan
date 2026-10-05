import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { MapPin, Navigation, ExternalLink, Check, Copy } from 'lucide-react';

/**
 * Location Section:
 * Focused, high-contrast map and direct navigation to El Torath Ballroom.
 * 100% English Luxury Haute-Couture Edition.
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
    <section id="location" className="section" style={{ position: 'relative', backgroundColor: 'var(--color-bg-alt)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.75rem, 3.8vw, 2.6rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--color-text-primary)',
              marginBottom: '0.35rem',
            }}
          >
            The Venue
          </h2>

          <div
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            Location &amp; Driving Directions
          </div>

          <div className="gold-divider" style={{ margin: '0.5rem auto' }}>
            <div className="gold-divider-diamond" />
          </div>
        </div>

        {/* Location Showcase Card */}
        <div
          className="editorial-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
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
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="location-info-col"
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.3rem 0.75rem',
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                  }}
                >
                  <MapPin size={14} color="var(--color-gold-dark)" />
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 700,
                    }}
                  >
                    Venue
                  </span>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                    fontWeight: 500,
                    marginBottom: '0.25rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {location.venueName}
                </h3>

                <div
                  className="font-sans"
                  style={{
                    fontSize: '0.88rem',
                    letterSpacing: '0.1em',
                    color: 'var(--color-gold-dark)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                  }}
                >
                  {location.city}
                </div>

                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 500,
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
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
                    padding: '0.65rem 0.9rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    marginBottom: '1.75rem',
                    fontSize: '0.78rem',
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
                      gap: '0.3rem',
                      color: copied ? 'var(--color-gold-dark)' : 'var(--color-text-muted)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-sans)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                    }}
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                <a
                  href={location.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury"
                  style={{ textDecoration: 'none', padding: '0.95rem 1.8rem' }}
                >
                  <span className="font-sans" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                    Open in Google Maps
                  </span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-outline"
                  style={{ textDecoration: 'none', padding: '0.95rem 1.6rem' }}
                >
                  <Navigation size={14} />
                  <span className="font-sans" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                    Get Directions
                  </span>
                </a>
              </div>
            </div>

            {/* Map Preview Panel */}
            <div
              style={{
                gridColumn: 'span 12',
                minHeight: '340px',
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
                  minHeight: '340px',
                  display: 'block',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
