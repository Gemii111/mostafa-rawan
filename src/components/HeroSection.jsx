import React, { useEffect, useState } from 'react';
import { weddingConfig, WEDDING_DATE } from '../config/weddingConfig';
import { Calendar, Clock, MapPin, Navigation, CalendarCheck } from 'lucide-react';

/**
 * Hero Section:
 * High-fashion luxury editorial hero.
 * Strictly verified info, warm Egyptian tone, flawless typography.
 */
export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCalendar = () => {
    const startDate = new Date(WEDDING_DATE).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date(new Date(WEDDING_DATE).getTime() + 6 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(`فرح مصطفى & روان | Mostafa & Rawan Wedding`);
    const details = encodeURIComponent(`فرح مصطفى & روان\nالمكان: ${weddingConfig.location.venueNameAr} (${weddingConfig.location.venueName})\nالعنوان: ${weddingConfig.location.addressAr}\nاللوكيشن: ${weddingConfig.location.locationUrl}`);
    const location = encodeURIComponent(`${weddingConfig.location.venueNameAr}, ${weddingConfig.location.cityAr}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '6.5rem 1.5rem 4.5rem 1.5rem',
      }}
    >
      {/* Ambient Radial Champagne Glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          width: 'clamp(320px, 65vw, 800px)',
          height: 'clamp(320px, 65vw, 800px)',
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.12}px))`,
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.18) 0%, rgba(223, 207, 190, 0.08) 55%, transparent 75%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(50px)',
        }}
      />

      {/* Decorative Outer Hairline Frame */}
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(1rem, 3vw, 2.5rem)',
          border: '1px solid rgba(197, 160, 89, 0.28)',
          borderRadius: '6px',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <div style={{ position: 'absolute', top: -3, left: -3, width: 8, height: 8, borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
        <div style={{ position: 'absolute', top: -3, right: -3, width: 8, height: 8, borderTop: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />
        <div style={{ position: 'absolute', bottom: -3, left: -3, width: 8, height: 8, borderBottom: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
        <div style={{ position: 'absolute', bottom: -3, right: -3, width: 8, height: 8, borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />
      </div>

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '920px',
          width: '100%',
          transform: `translateY(${scrollY * -0.08}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Top Luxury Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
            padding: '0.45rem 1.4rem',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: 'clamp(0.72rem, 1.2vw, 0.85rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
            }}
          >
            {weddingConfig.eventType}
          </span>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>✦</span>
          <span
            className="font-sans"
            style={{
              fontSize: 'clamp(0.72rem, 1.2vw, 0.85rem)',
              letterSpacing: '0.15em',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}
          >
            17.10.2026
          </span>
        </div>

        {/* Centerpiece Names (English) */}
        <div style={{ margin: '0.6rem 0' }}>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(3rem, 9.5vw, 6.2rem)',
              fontWeight: 300,
              letterSpacing: '0.12em',
              color: 'var(--color-text-primary)',
              lineHeight: 1.08,
              textTransform: 'uppercase',
            }}
          >
            <div>{weddingConfig.groom}</div>
            <div
              style={{
                fontSize: 'clamp(1.8rem, 5.5vw, 3.6rem)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-gold)',
                margin: '0.1rem 0',
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              &amp;
            </div>
            <div>{weddingConfig.bride}</div>
          </h1>
        </div>

        {/* Centerpiece Names (Arabic) */}
        <div
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.8rem, 4.2vw, 2.8rem)',
            fontWeight: 700,
            color: 'var(--color-gold-dark)',
            marginTop: '0.3rem',
            marginBottom: '1rem',
          }}
        >
          {weddingConfig.groomAr} <span style={{ color: 'var(--color-gold)', fontWeight: 300 }}>&amp;</span> {weddingConfig.brideAr}
        </div>

        <div className="gold-divider" style={{ margin: '1rem auto 1.5rem auto' }}>
          <div className="gold-divider-diamond" />
        </div>

        {/* Calligraphy Lyric from Artwork */}
        <div
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.3rem, 3.2vw, 2.1rem)',
            color: 'var(--color-crimson-lyric)',
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: '1.25rem',
          }}
        >
          "{weddingConfig.romanticQuoteAr}"
        </div>

        {/* Warm Natural Egyptian Invitation Phrasing */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
            color: 'var(--color-text-primary)',
            fontWeight: 600,
            lineHeight: 1.75,
            maxWidth: '680px',
            margin: '0 auto 2.2rem auto',
          }}
        >
          {weddingConfig.invitationHeadlineAr}،<br />
          {weddingConfig.invitationSubtextAr}
        </p>

        {/* Date, Time & Location Card */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(14px)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-card)',
            fontSize: '0.95rem',
            color: 'var(--color-text-primary)',
            marginBottom: '2.5rem',
          }}
          className="font-arabic"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Calendar size={17} color="var(--color-gold-dark)" />
            <span>{weddingConfig.displayDateAr}</span>
          </div>
          <span style={{ color: 'var(--color-champagne)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Clock size={17} color="var(--color-gold-dark)" />
            <span>{weddingConfig.displayTimeAr}</span>
          </div>
          <span style={{ color: 'var(--color-champagne)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <MapPin size={17} color="var(--color-gold-dark)" />
            <span>{weddingConfig.location.venueNameAr} — {weddingConfig.location.cityAr}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <button
            onClick={() => scrollToSection('location')}
            className="btn-luxury"
          >
            <Navigation size={16} />
            <span className="font-arabic" style={{ fontSize: '0.95rem' }}>مكان القاعة واللوكيشن</span>
          </button>

          <button
            onClick={handleAddToCalendar}
            className="btn-luxury-outline"
          >
            <CalendarCheck size={16} color="var(--color-gold-dark)" />
            <span className="font-arabic" style={{ fontSize: '0.95rem' }}>سجّل في Google Calendar</span>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={() => scrollToSection('couple')}
        style={{
          position: 'absolute',
          bottom: '2.2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          cursor: 'pointer',
          zIndex: 4,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'rgba(197, 160, 89, 0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '14px',
              backgroundColor: 'var(--color-gold)',
              animation: 'scrollIndicatorMove 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
