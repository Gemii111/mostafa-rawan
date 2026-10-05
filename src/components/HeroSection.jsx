import React from 'react';
import { weddingConfig, WEDDING_DATE } from '../config/weddingConfig';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarCheck } from 'lucide-react';

/**
 * Hero Section:
 * The couple's authentic artwork is the FIRST centerpiece at the very top.
 * All-English Luxury Haute-Couture Edition.
 * Clear time: 8:00 PM.
 */
export default function HeroSection() {
  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCalendar = () => {
    const startDate = new Date(WEDDING_DATE).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date(new Date(WEDDING_DATE).getTime() + 5 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(`Mostafa & Rawan — The Wedding`);
    const details = encodeURIComponent(`Mostafa & Rawan Wedding Celebration\nVenue: ${weddingConfig.location.venueName}\nAddress: ${weddingConfig.location.address}, ${weddingConfig.location.city}\nDirections: ${weddingConfig.location.locationUrl}`);
    const location = encodeURIComponent(`${weddingConfig.location.venueName}, ${weddingConfig.location.city}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4.5rem 1.25rem 3.5rem 1.25rem',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Radial Champagne Glow behind image */}
      <div
        style={{
          position: 'absolute',
          top: '22%',
          left: '50%',
          width: 'clamp(320px, 70vw, 720px)',
          height: 'clamp(320px, 70vw, 720px)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, rgba(223, 207, 190, 0.08) 55%, transparent 75%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(50px)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '860px',
          width: '100%',
        }}
      >
        {/* Top Minimal Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            marginBottom: '1.5rem',
            padding: '0.4rem 1.25rem',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
            }}
          >
            {weddingConfig.eventType}
          </span>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>✦</span>
          <span
            className="font-sans"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}
          >
            OCTOBER 17, 2026
          </span>
        </div>

        {/* 1. THE ARTWORK AS THE VERY FIRST CENTERPIECE AT THE TOP */}
        <div
          style={{
            maxWidth: 'min(90vw, 400px)',
            margin: '0 auto 1.5rem auto',
            position: 'relative',
          }}
        >
          <div
            className="editorial-card artwork-glow-card"
            style={{
              padding: '0.65rem',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <img
              src={weddingConfig.coupleDetails.artPhoto}
              alt="Mostafa & Rawan"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>

        {/* Couple Names */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'var(--color-text-primary)',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}
        >
          {weddingConfig.groom} <span style={{ color: 'var(--color-gold)', fontStyle: 'italic', fontWeight: 300 }}>&amp;</span> {weddingConfig.bride}
        </h1>

        {/* 2. Simple & Attractive English Invitation Line */}
        <p
          className="font-sans"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            fontWeight: 500,
            lineHeight: 1.7,
            maxWidth: '620px',
            margin: '0 auto 2rem auto',
            letterSpacing: '0.01em',
          }}
        >
          {weddingConfig.invitationText}
        </p>

        {/* 3. Ultra-Delicate, Chic Details Card (2x2 on mobile, 4x1 on desktop) */}
        <div className="hero-details-grid">
          {/* Date */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <div
              className="floating-icon-1"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.12)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                color: 'var(--color-gold-dark)',
              }}
            >
              <Calendar size={18} />
            </div>
            <span
              className="font-sans"
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Date
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: '0.98rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.displayDate}
            </span>
          </div>

          {/* Time: Exactly 8:00 PM */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <div
              className="floating-icon-2"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.12)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                color: 'var(--color-gold-dark)',
              }}
            >
              <Clock size={18} />
            </div>
            <span
              className="font-sans"
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Time
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.displayTime}
            </span>
          </div>

          {/* Venue */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <div
              className="floating-icon-3"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.12)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                color: 'var(--color-gold-dark)',
              }}
            >
              <MapPin size={18} />
            </div>
            <span
              className="font-sans"
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Venue
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: '0.98rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.location.venueName} — Mansoura
            </span>
          </div>

          {/* Dress Code */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <div
              className="floating-icon-4"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.12)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                color: 'var(--color-gold-dark)',
              }}
            >
              <Sparkles size={18} />
            </div>
            <span
              className="font-sans"
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Dress Code
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: '0.98rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.dressCode.title}
            </span>
          </div>
        </div>

        {/* 4. Action Buttons */}
        <div className="hero-actions-container">
          <button
            onClick={scrollToLocation}
            className="btn-luxury"
          >
            <Navigation size={16} />
            <span className="font-sans" style={{ fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              Venue Location
            </span>
          </button>

          <button
            onClick={handleAddToCalendar}
            className="btn-luxury-outline"
          >
            <CalendarCheck size={16} color="var(--color-gold-dark)" />
            <span className="font-sans" style={{ fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              Add to Google Calendar
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
