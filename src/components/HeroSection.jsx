import React from 'react';
import { weddingConfig, WEDDING_DATE } from '../config/weddingConfig';
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarCheck } from 'lucide-react';

/**
 * Hero Section:
 * The couple's authentic artwork is the FIRST centerpiece at the very top.
 * Removed duplicate lyric and names under the image as requested.
 * Ultra-delicate, attractive card for Date, Time, Venue, and Dress Code.
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
              letterSpacing: '0.12em',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}
          >
            17.10.2026
          </span>
        </div>

        {/* 1. THE ARTWORK AS THE VERY FIRST CENTERPIECE AT THE TOP */}
        <div
          style={{
            maxWidth: '430px',
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

        {/* 2. Simple & Attractive Invitation Line */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
            color: 'var(--color-text-primary)',
            fontWeight: 700,
            lineHeight: 1.7,
            maxWidth: '620px',
            margin: '0.75rem auto 1.75rem auto',
          }}
        >
          {weddingConfig.invitationTextAr}
        </p>

        {/* 3. Ultra-Delicate, Chic Details Card */}
        <div
          className="editorial-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            padding: '1.5rem 1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderRadius: '12px',
            boxShadow: '0 16px 40px -10px rgba(41, 35, 28, 0.08), 0 0 0 1px rgba(197, 160, 89, 0.2)',
            marginBottom: '2rem',
            direction: 'rtl',
          }}
        >
          {/* التاريخ */}
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
              className="font-arabic"
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '0.25rem',
              }}
            >
              التاريخ
            </span>
            <span
              className="font-arabic"
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.displayDateAr}
            </span>
          </div>

          {/* الميعاد */}
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
              className="font-arabic"
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '0.25rem',
              }}
            >
              الميعاد
            </span>
            <span
              className="font-arabic"
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.displayTimeAr}
            </span>
          </div>

          {/* المكان */}
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
              className="font-arabic"
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '0.25rem',
              }}
            >
              المكان
            </span>
            <span
              className="font-arabic"
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.location.venueNameAr} — {weddingConfig.location.cityAr}
            </span>
          </div>

          {/* الدريس كود */}
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
              className="font-arabic"
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '0.25rem',
              }}
            >
              الدريس كود
            </span>
            <span
              className="font-arabic"
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-primary)',
                fontWeight: 700,
              }}
            >
              {weddingConfig.dressCode.titleAr}
            </span>
          </div>
        </div>

        {/* 4. Action Buttons */}
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
