import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Minimal Floating Navigation:
 * Clean, lightweight, un-cluttered navigation.
 * All-English Luxury Haute-Couture Edition.
 */
export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', number: '01', title: 'The Invitation' },
    { id: 'countdown', number: '02', title: 'Countdown Clock' },
    { id: 'location', number: '03', title: 'Venue & Directions' },
  ];

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Header Menu Button (Anchored at top - does not scroll down) */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          left: '1.25rem',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'rgba(250, 246, 240, 0.94)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderRadius: '999px',
            padding: '0.55rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
            color: 'var(--color-text-primary)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
          }}
        >
          <Menu size={16} color="var(--color-gold-dark)" />
          <span
            className="font-sans"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            Menu
          </span>
        </button>

        <div
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-serif)',
            display: scrolled ? 'block' : 'none',
            padding: '0.2rem 0.5rem',
          }}
        >
          M <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>&amp;</span> R
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            backgroundColor: 'rgba(250, 246, 240, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(2rem, 5vw, 4rem)',
            overflowY: 'auto',
          }}
        >
          {/* Top Bar with Close */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
              paddingBottom: '1.25rem',
            }}
          >
            <div>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.3rem',
                  letterSpacing: '0.15em',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                }}
              >
                {weddingConfig.groom} &amp; {weddingConfig.bride}
              </span>
              <span
                className="font-sans"
                style={{
                  marginLeft: '0.85rem',
                  color: 'var(--color-gold-dark)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                {weddingConfig.eventType}
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              style={{
                background: 'transparent',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text-primary)',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav Items */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem clamp(2rem, 5vw, 4rem)',
              margin: 'auto 0',
              padding: '2rem 0',
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(61, 55, 48, 0.08)',
                  paddingBottom: '0.85rem',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(61, 55, 48, 0.08)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem' }}>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 700,
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {item.title}
                  </span>
                </div>

                <ArrowUpRight size={18} color="var(--color-gold)" />
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(197, 160, 89, 0.25)',
              paddingTop: '1.25rem',
              gap: '0.85rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-muted)',
            }}
            className="font-sans"
          >
            <div>{weddingConfig.displayDate} • {weddingConfig.location.venueName}, {weddingConfig.location.city}</div>
          </div>
        </div>
      )}
    </>
  );
}
