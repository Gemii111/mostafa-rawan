import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Clock } from 'lucide-react';

/**
 * Timeline Section:
 * Minimalist, ultra-chic, and delicate wedding timeline.
 * Clean typography with warm Egyptian event titles.
 */
export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 4rem auto' }}>
          <span
            className="font-arabic"
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.6rem',
            }}
          >
            فقرات السهرة • The Timeline
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.6rem',
            }}
          >
            The Day
          </h2>

          <div className="gold-divider" style={{ margin: '1rem auto' }}>
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.2rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 500,
            }}
          >
            برنامج ليلتنا عشان نفرح سوا من أول دقيقة لآخر الليل!
          </p>
        </div>

        {/* Chic Delicate Timeline List */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {weddingConfig.timeline.map((item, idx) => (
            <div
              key={item.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1rem, 3vw, 2rem)',
                padding: '1.5rem 1.8rem',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                direction: 'rtl',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Number Badge */}
              <div
                style={{
                  fontSize: '1.6rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                  color: 'var(--color-gold-dark)',
                  minWidth: '40px',
                  textAlign: 'center',
                }}
              >
                {item.num}
              </div>

              {/* Event Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.3rem',
                  }}
                >
                  <h3
                    className="font-arabic"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                    }}
                  >
                    {item.titleAr}
                  </h3>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-gold-dark)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-arabic)',
                    }}
                  >
                    <Clock size={13} />
                    <span>{item.timeAr}</span>
                  </div>
                </div>

                <p
                  className="font-arabic"
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.descAr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
