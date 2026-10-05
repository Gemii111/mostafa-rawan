import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Couple Section:
 * Centers the couple's artwork illustration with the famous lyric:
 * "صالحت بيك أيامي.. سامحت بيك الزمن"
 */
export default function CoupleSection() {
  const [loveCount, setLoveCount] = useState(245);
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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
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
            العريس والعروسة • The Couple
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

          {/* Famous Artwork Lyric in Calligraphic Style */}
          <div
            className="font-arabic"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
              color: '#8A1C24', // Deep romantic crimson accent matching the artwork's calligraphy
              fontWeight: 700,
              marginBottom: '0.8rem',
              lineHeight: 1.5,
              textShadow: '0 2px 8px rgba(138, 28, 36, 0.12)',
            }}
          >
            "{weddingConfig.romanticQuoteAr}"
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              direction: 'rtl',
            }}
          >
            أجمل صدفة في العمر جمعتنا.. والنهاردة بنبدأ سوا أحلى حكاية، وفرحتنا مش هتكمل غير بيكم في قاعة التراث!
          </p>
        </div>

        {/* Centerpiece Artwork Frame */}
        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto 3rem auto',
            position: 'relative',
          }}
        >
          <div
            className="editorial-card"
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 50px -10px rgba(44, 39, 36, 0.16), 0 0 0 1px rgba(197, 160, 89, 0.35)',
              borderRadius: '8px',
            }}
          >
            {/* The User's Artwork */}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '6px',
                aspectRatio: '2 / 3',
                backgroundColor: '#FAF5ED',
              }}
            >
              <img
                src={weddingConfig.coupleDetails.artPhoto}
                alt="Mostafa & Rawan Artwork"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Couple Names Banner Below Artwork */}
            <div
              style={{
                textAlign: 'center',
                padding: '1.5rem 1rem 0.5rem 1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  marginBottom: '0.4rem',
                }}
              >
                <span
                  className="font-arabic"
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {weddingConfig.groomAr}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.6rem',
                    color: 'var(--color-gold-dark)',
                  }}
                >
                  &amp;
                </span>

                <span
                  className="font-arabic"
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {weddingConfig.brideAr}
                </span>
              </div>

              <div
                className="font-sans"
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.22em',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {weddingConfig.groom} &amp; {weddingConfig.bride}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Love / Blessing Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleLoveClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1.6rem',
              backgroundColor: hasLiked ? 'rgba(197, 160, 89, 0.15)' : 'rgba(255, 255, 255, 0.9)',
              border: '1.5px solid var(--color-gold)',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <Heart
              size={20}
              fill={hasLiked ? '#C5A059' : 'transparent'}
              color="var(--color-gold-dark)"
              style={{
                transition: 'transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: hasLiked ? 'scale(1.25)' : 'scale(1)',
              }}
            />
            <span
              className="font-arabic"
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-primary)',
                fontWeight: 600,
              }}
            >
              {hasLiked ? 'فرحتكم فرحتنا!' : 'ابعت لاف ومباركة حلوة للعروسين'} ({loveCount})
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
