import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

/**
 * Celebration Details Section:
 * Strictly confirmed details (Date, Time, Venue, Dress Code).
 * Zero contradictory timings, zero unconfirmed fluff.
 */
export default function CelebrationDetails() {
  const detailsCards = [
    {
      icon: <Calendar size={22} color="var(--color-gold-dark)" />,
      badge: "The Date • التاريخ",
      titleAr: weddingConfig.displayDateAr,
      titleEn: weddingConfig.displayDate,
      noteAr: "ليلة العمر اللي مستنيين نفرح فيها سوا",
    },
    {
      icon: <Clock size={22} color="var(--color-gold-dark)" />,
      badge: "The Time • الميعاد",
      titleAr: weddingConfig.displayTimeAr,
      titleEn: weddingConfig.displayTime,
      noteAr: "بداية استقبال وضيافة الحضور الكرام",
    },
    {
      icon: <MapPin size={22} color="var(--color-gold-dark)" />,
      badge: "The Venue • المكان",
      titleAr: `${weddingConfig.location.venueNameAr} — ${weddingConfig.location.cityAr}`,
      titleEn: weddingConfig.location.venueName,
      noteAr: weddingConfig.location.addressAr,
    },
    {
      icon: <Sparkles size={22} color="var(--color-gold-dark)" />,
      badge: "Dress Code • الملابس",
      titleAr: weddingConfig.dressCode.titleAr,
      titleEn: weddingConfig.dressCode.title,
      noteAr: weddingConfig.dressCode.descriptionAr,
    },
  ];

  return (
    <section id="celebration" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.6rem',
            }}
          >
            {weddingConfig.eventType}
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            Event Details
          </h2>

          <div
            className="font-arabic"
            style={{
              fontSize: '1.4rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            تفاصيل ومواعيد الليلة
          </div>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {detailsCards.map((card, idx) => (
            <div
              key={idx}
              className="editorial-card"
              style={{
                padding: '2.5rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '8px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border-strong)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                {card.icon}
              </div>

              <span
                className="font-sans"
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                {card.badge}
              </span>

              <h3
                className="font-arabic"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.3rem',
                  lineHeight: 1.35,
                }}
              >
                {card.titleAr}
              </h3>

              <div
                className="font-sans"
                style={{
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 500,
                  marginBottom: '1rem',
                }}
              >
                {card.titleEn}
              </div>

              <p
                className="font-arabic"
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                  marginTop: 'auto',
                }}
              >
                {card.noteAr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
