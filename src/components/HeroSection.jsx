import React from 'react';
import { weddingConfig, WEDDING_DATE } from '../config/weddingConfig';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarCheck } from 'lucide-react';

/**
 * Hero Section:
 * The couple's authentic artwork is the FIRST centerpiece at the very top.
 * Followed by their names, the calligraphy lyric, warm Egyptian invitation,
 * and essential event details. Zero clutter, zero repetition.
 */
export default function HeroSection() {
  const scrollToLocation = () => {
    const el = document.getElementById('location');
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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.25rem 4rem 1.25rem',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Radial Champagne Glow behind image */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          width: 'clamp(320px, 70vw, 750px)',
          height: 'clamp(320px, 70vw, 750px)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, rgba(223, 207, 190, 0.1) 50%, transparent 75%)',
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
          maxWidth: '820px',
          width: '100%',
        }}
      >
        {/* Top Minimal Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            marginBottom: '1.75rem',
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
              letterSpacing: '0.12em',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}
          >
            17.10.2026
          </span>
        </div>

        {/* 1. THE ARTWORK IS THE FIRST THING RIGHT AT THE TOP */}
        <div
          style={{
            maxWidth: '420px',
            margin: '0 auto 1.75rem auto',
            position: 'relative',
          }}
        >
          <div
            className="editorial-card"
            style={{
              padding: '0.85rem',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 50px -10px rgba(41, 35, 28, 0.16), 0 0 0 1px rgba(197, 160, 89, 0.35)',
              borderRadius: '10px',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                aspectRatio: '2 / 3',
                backgroundColor: '#FAF5ED',
                border: '1px solid rgba(197, 160, 89, 0.25)',
              }}
            >
              <img
                src={weddingConfig.coupleDetails.artPhoto}
                alt="Mostafa & Rawan"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* 2. Calligraphic Lyric from Artwork */}
        <div
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.4rem, 3.4vw, 2.2rem)',
            color: 'var(--color-crimson-lyric)',
            fontWeight: 700,
            lineHeight: 1.45,
            marginBottom: '0.85rem',
          }}
        >
          "{weddingConfig.romanticQuoteAr}"
        </div>

        {/* 3. Couple Names (Arabic Primary + English Accent) */}
        <h1
          className="font-arabic"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 4rem)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            margin: '0.2rem 0',
            lineHeight: 1.2,
          }}
        >
          {weddingConfig.groomAr}{' '}
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-gold)',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            }}
          >
            &amp;
          </span>{' '}
          {weddingConfig.brideAr}
        </h1>

        <div
          className="font-sans"
          style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
            fontWeight: 600,
            marginBottom: '1.25rem',
          }}
        >
          {weddingConfig.groom} &amp; {weddingConfig.bride}
        </div>

        <div className="gold-divider" style={{ margin: '0.75rem auto 1.5rem auto' }}>
          <div className="gold-divider-diamond" />
        </div>

        {/* 4. Warm Egyptian Invitation Phrasing */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.15rem, 2.4vw, 1.4rem)',
            color: 'var(--color-text-primary)',
            fontWeight: 600,
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 2rem auto',
          }}
        >
          {weddingConfig.invitationHeadlineAr}،<br />
          {weddingConfig.invitationSubtextAr}
        </p>

        {/* 5. Essential Event Info Strip (Stated clearly ONCE) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(14px)',
            border: '1px solid var(--color-border)',
            borderRadius: '10px',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
          className="font-arabic"
        >
          {/* Date */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-dark)', fontWeight: 700, fontSize: '0.85rem' }}>
              <Calendar size={15} />
              <span>التاريخ</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '1.05rem' }}>
              {weddingConfig.displayDateAr}
            </div>
          </div>

          {/* Time */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-dark)', fontWeight: 700, fontSize: '0.85rem' }}>
              <Clock size={15} />
              <span>الميعاد</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '1.05rem' }}>
              {weddingConfig.displayTimeAr}
            </div>
          </div>

          {/* Venue */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-dark)', fontWeight: 700, fontSize: '0.85rem' }}>
              <MapPin size={15} />
              <span>المكان</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '1.05rem' }}>
              {weddingConfig.location.venueNameAr} — {weddingConfig.location.cityAr}
            </div>
          </div>

          {/* Dress Code */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold-dark)', fontWeight: 700, fontSize: '0.85rem' }}>
              <Sparkles size={15} />
              <span>الدريس كود</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '1.05rem' }}>
              {weddingConfig.dressCode.titleAr}
            </div>
          </div>
        </div>

        {/* 6. Quick Action Buttons */}
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
            onClick={scrollToLocation}
            className="btn-luxury"
          >
            <Navigation size={16} />
            <span className="font-arabic" style={{ fontSize: '0.95rem' }}>مكان القاعة على الخريطة</span>
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
    </section>
  );
}
