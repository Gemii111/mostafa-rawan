import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Minimal Floating Navigation:
 * Streamlined navigation items without removed RSVP, story, or stock gallery.
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
    { id: 'hero', number: '01', title: 'Home', titleAr: 'البداية' },
    { id: 'couple', number: '02', title: 'The Couple', titleAr: 'مصطفى & روان' },
    { id: 'celebration', number: '03', title: 'The Wedding', titleAr: 'الميعاد والمكان' },
    { id: 'countdown', number: '04', title: 'Countdown', titleAr: 'العد التنازلي' },
    { id: 'timeline', number: '05', title: 'Timeline', titleAr: 'فقرات السهرة' },
    { id: 'location', number: '06', title: 'Location', titleAr: 'موقع الحفل' },
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
      {/* Floating Navigation Trigger Button */}
      <div
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
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
            padding: '0.65rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
            color: 'var(--color-text-primary)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
          }}
        >
          <Menu size={16} color="var(--color-gold-dark)" />
          <span
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Menu
          </span>
        </button>

        <div
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-serif)',
            display: scrolled ? 'block' : 'none',
            padding: '0.3rem 0.6rem',
            transition: 'opacity 0.4s ease',
          }}
        >
          M <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>&amp;</span> R
        </div>
      </div>

      {/* Fullscreen Navigation Overlay */}
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
            animation: 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            overflowY: 'auto',
          }}
        >
          {/* Top Bar with Close Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
              paddingBottom: '1.5rem',
            }}
          >
            <div>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.4rem',
                  letterSpacing: '0.15em',
                  fontWeight: 300,
                  color: 'var(--color-text-primary)',
                }}
              >
                {weddingConfig.groom} &amp; {weddingConfig.bride}
              </span>
              <span
                className="font-sans"
                style={{
                  marginLeft: '1rem',
                  color: 'var(--color-gold-dark)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
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
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text-primary)',
                transition: 'transform 0.3s ease',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items List */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem clamp(2rem, 6vw, 5rem)',
              margin: 'auto 0',
              padding: '2.5rem 0',
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(61, 55, 48, 0.08)',
                  paddingBottom: '1rem',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(61, 55, 48, 0.08)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '0.8rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 600,
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {item.title}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    className="font-arabic"
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--color-text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    {item.titleAr}
                  </span>
                  <ArrowUpRight size={16} color="var(--color-gold)" />
                </div>
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
              paddingTop: '1.5rem',
              gap: '1rem',
              fontSize: '0.88rem',
              color: 'var(--color-text-muted)',
            }}
            className="font-arabic"
          >
            <div>{weddingConfig.displayDateAr} • {weddingConfig.location.venueNameAr}</div>
            <div style={{ color: 'var(--color-crimson-lyric)', fontWeight: 600 }}>"{weddingConfig.romanticQuoteAr}"</div>
          </div>
        </div>
      )}
    </>
  );
}
