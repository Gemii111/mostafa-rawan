import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles, Heart } from 'lucide-react';

/**
 * Story Section:
 * Emotional storytelling layout showcasing the journey of Mostafa & Rawan.
 * Natural warm Egyptian tone & interactive chapter navigation.
 */
export default function StorySection() {
  const [activeChapter, setActiveChapter] = useState(0);
  const storyChapters = weddingConfig.story;

  return (
    <section
      id="story"
      className="section"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-narrow">
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
            Our Journey • حكايتنا من أول يوم
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
            Our Story
          </h2>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.35rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              marginBottom: '0.4rem',
            }}
          >
            صدفة أحلى من ألف ميعاد.. بدأت بنظرة وكبرت وبقت حياة
          </p>

          <p
            className="font-serif"
            style={{
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
            }}
          >
            It started with a moment, and turned into our forever.
          </p>
        </div>

        {/* Chapter Selection Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {storyChapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChapter(idx)}
              style={{
                background: activeChapter === idx ? 'var(--color-text-primary)' : 'rgba(255, 255, 255, 0.75)',
                color: activeChapter === idx ? '#FAF7F2' : 'var(--color-text-secondary)',
                border: activeChapter === idx ? '1px solid var(--color-text-primary)' : '1px solid var(--color-border)',
                padding: '0.65rem 1.35rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-arabic)',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
                boxShadow: activeChapter === idx ? 'var(--shadow-card)' : 'none',
              }}
            >
              <span>{chap.chapterAr}</span>
            </button>
          ))}
        </div>

        {/* Active Chapter Editorial Display */}
        <div
          className="editorial-card"
          style={{
            padding: 'clamp(2rem, 5vw, 4rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              color: 'var(--color-gold)',
              opacity: 0.6,
            }}
          >
            <Sparkles size={22} />
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              marginBottom: '0.5rem',
              fontFamily: 'var(--font-arabic)',
            }}
          >
            {storyChapters[activeChapter].year} • {storyChapters[activeChapter].chapterAr}
          </div>

          <h3
            className="font-arabic"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.3,
              marginBottom: '0.3rem',
            }}
          >
            {storyChapters[activeChapter].titleAr}
          </h3>

          <div
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-gold-dark)',
              fontStyle: 'italic',
              marginBottom: '1.8rem',
            }}
          >
            {storyChapters[activeChapter].title}
          </div>

          <div
            style={{
              width: '44px',
              height: '1px',
              backgroundColor: 'var(--color-gold)',
              marginBottom: '2rem',
            }}
          />

          {/* Story Narrative */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Arabic Narrative (Prominent & Egyptian) */}
            <div style={{ direction: 'rtl', borderRight: '2px solid rgba(197, 160, 89, 0.3)', paddingRight: '1.5rem' }}>
              <p
                className="font-arabic"
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 2,
                  color: 'var(--color-text-primary)',
                  fontWeight: 400,
                }}
              >
                {storyChapters[activeChapter].textAr}
              </p>
            </div>

            {/* English Narrative */}
            <div>
              <p
                className="font-serif"
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.85,
                  color: 'var(--color-text-secondary)',
                  fontStyle: 'normal',
                }}
              >
                {storyChapters[activeChapter].text}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <button
              onClick={() => setActiveChapter((prev) => (prev > 0 ? prev - 1 : storyChapters.length - 1))}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-arabic)',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-dark)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-muted)')}
            >
              ← المحطة اللي فاتت
            </button>

            <span className="font-serif" style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontSize: '0.95rem' }}>
              Part {activeChapter + 1} of {storyChapters.length}
            </span>

            <button
              onClick={() => setActiveChapter((prev) => (prev < storyChapters.length - 1 ? prev + 1 : 0))}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-arabic)',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-gold-dark)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-muted)')}
            >
              المحطة اللي جاية →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
