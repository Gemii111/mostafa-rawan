import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Couple Section:
 * Asymmetric editorial introduction of Mostafa & Rawan.
 * Natural warm Egyptian dialect with interactive love counter.
 */
export default function CoupleSection() {
  const [loveCount, setLoveCount] = useState(128);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLoveClick = () => {
    if (!hasLiked) {
      setLoveCount((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <section id="couple" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem auto' }}>
          <span
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            The Couple • العريس والعروسة
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              marginBottom: '1rem',
            }}
          >
            Two Souls, One Story
          </h2>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '0.5rem',
            }}
          >
            "{weddingConfig.romanticQuote}"
          </p>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-gold-dark)',
              direction: 'rtl',
              fontWeight: 500,
              lineHeight: 1.8,
            }}
          >
            {weddingConfig.romanticQuoteAr}
          </p>

          {/* Interactive Love Button */}
          <div style={{ marginTop: '1.75rem' }}>
            <button
              onClick={handleLoveClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 1.4rem',
                backgroundColor: hasLiked ? 'rgba(197, 160, 89, 0.15)' : 'rgba(255, 255, 255, 0.85)',
                border: '1px solid var(--color-gold)',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <Heart
                size={18}
                fill={hasLiked ? '#C5A059' : 'transparent'}
                color="var(--color-gold-dark)"
                style={{
                  transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hasLiked ? 'scale(1.2)' : 'scale(1)',
                }}
              />
              <span className="font-arabic" style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                {hasLiked ? 'فرحتكم فرحتنا!' : 'ابعت لاف ومباركة للعروسين'} ({loveCount})
              </span>
            </button>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Groom Card */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="groom-col"
          >
            <div
              className="editorial-card"
              style={{
                maxWidth: '480px',
                margin: '0 auto',
                padding: '1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
              }}
            >
              <div
                className="editorial-frame"
                style={{
                  aspectRatio: '3 / 4',
                  borderRadius: '1px',
                  position: 'relative',
                  marginBottom: '1.5rem',
                }}
              >
                <img
                  src={weddingConfig.coupleDetails.groomPhoto}
                  alt={`Groom ${weddingConfig.groom}`}
                  loading="lazy"
                />
                <div className="editorial-frame-border" />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(28, 26, 23, 0.78)',
                    backdropFilter: 'blur(8px)',
                    color: '#FAF7F2',
                    padding: '0.35rem 0.95rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {weddingConfig.groomTitle}
                </div>
              </div>

              {/* Groom Content */}
              <div style={{ textAlign: 'center', padding: '0.5rem 1rem 1rem 1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.9rem',
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                  >
                    {weddingConfig.groom}
                  </h3>
                  <span
                    className="font-arabic"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 600,
                    }}
                  >
                    {weddingConfig.groomAr}
                  </span>
                </div>

                <p
                  className="font-arabic"
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.8,
                    direction: 'rtl',
                  }}
                >
                  {weddingConfig.groomBio}
                </p>
              </div>
            </div>
          </div>

          {/* Central Monogram Bridge */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="monogram-bridge"
          >
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'rgba(250, 247, 242, 0.98)',
                border: '1.5px solid var(--color-gold)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-dark)',
                fontSize: '1.8rem',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
              }}
            >
              &amp;
            </div>
          </div>

          {/* Bride Card */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="bride-col"
          >
            <div
              className="editorial-card"
              style={{
                maxWidth: '480px',
                margin: '0 auto',
                padding: '1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
              }}
            >
              <div
                className="editorial-frame"
                style={{
                  aspectRatio: '3 / 4',
                  borderRadius: '1px',
                  position: 'relative',
                  marginBottom: '1.5rem',
                }}
              >
                <img
                  src={weddingConfig.coupleDetails.bridePhoto}
                  alt={`Bride ${weddingConfig.bride}`}
                  loading="lazy"
                />
                <div className="editorial-frame-border" />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(28, 26, 23, 0.78)',
                    backdropFilter: 'blur(8px)',
                    color: '#FAF7F2',
                    padding: '0.35rem 0.95rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {weddingConfig.brideTitle}
                </div>
              </div>

              {/* Bride Content */}
              <div style={{ textAlign: 'center', padding: '0.5rem 1rem 1rem 1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.9rem',
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                  >
                    {weddingConfig.bride}
                  </h3>
                  <span
                    className="font-arabic"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 600,
                    }}
                  >
                    {weddingConfig.brideAr}
                  </span>
                </div>

                <p
                  className="font-arabic"
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.8,
                    direction: 'rtl',
                  }}
                >
                  {weddingConfig.brideBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .groom-col {
            grid-column: span 6 !important;
            transform: translateY(-20px);
          }
          .bride-col {
            grid-column: span 6 !important;
            transform: translateY(20px);
          }
          .monogram-bridge {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .monogram-bridge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
