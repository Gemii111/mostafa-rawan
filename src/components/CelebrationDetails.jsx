import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

/**
 * Celebration Details Section:
 * Modular cards detailing Date, Time, Venue & Dress Code.
 * Consumes all data strictly from weddingConfig.
 */
export default function CelebrationDetails() {
  const detailsCards = [
    {
      icon: <Calendar size={22} color="var(--color-gold-dark)" />,
      badge: "Date • الميعاد",
      title: weddingConfig.displayDateAr,
      subtitle: weddingConfig.displayDate,
      note: "سجلوا الميعاد ومتتأخروش عشان نلحق نفرح سوا من أول دقيقة!",
    },
    {
      icon: <Clock size={22} color="var(--color-gold-dark)" />,
      badge: "Time • التوقيت",
      title: weddingConfig.displayTimeAr,
      subtitle: weddingConfig.displayTime,
      note: "وصول الحبايب بيبدأ من ٦:٣٠ م وكتب الكتاب الساعة ٧:٣٠ م",
    },
    {
      icon: <MapPin size={22} color="var(--color-gold-dark)" />,
      badge: "Venue • المكان",
      title: `${weddingConfig.location.venueNameAr} — ${weddingConfig.location.cityAr}`,
      subtitle: weddingConfig.location.venueName,
      note: "طريق طلخا - المنصورة، محافظة الدقهلية (فيو النيل)",
    },
    {
      icon: <Sparkles size={22} color="var(--color-gold-dark)" />,
      badge: "Dress Code • الدريس كود",
      title: weddingConfig.dressCode.titleAr,
      subtitle: weddingConfig.dressCode.title,
      note: "بدل كاملة شيك للسادة، وفساتين سواريه راقية للسيدات.",
    },
  ];

  return (
    <section id="celebration" className="section" style={{ position: 'relative' }}>
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
            Essential Information
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
            The Celebration
          </h2>

          <div
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.12em',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.4rem',
            }}
          >
            {weddingConfig.groom} &amp; {weddingConfig.bride}
          </div>

          {/* English Event Type */}
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 300,
              marginBottom: '0.5rem',
            }}
          >
            {weddingConfig.eventType}
          </div>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>
        </div>

        {/* Modular Grid of Details Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {detailsCards.map((card, idx) => (
            <div
              key={idx}
              className="editorial-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '1px',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border-strong)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                {card.icon}
              </div>

              <span
                className="font-sans"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                {card.badge}
              </span>

              <h3
                className="font-serif"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              <div
                className="font-arabic"
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1rem',
                }}
              >
                {card.subtitle}
              </div>

              <p
                className="font-sans"
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                  marginTop: 'auto',
                }}
              >
                {card.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
