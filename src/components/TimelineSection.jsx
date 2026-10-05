import React, { useEffect, useRef } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Clock } from 'lucide-react';

/**
 * Timeline Section:
 * Vertical editorial timeline with natural Egyptian wedding flow:
 * 01 وصول الحبايب, 02 كتب الكتاب, 03 الزفة, 04 العشا, 05 الفيرست دانس وسهرة للصبح.
 */
export default function TimelineSection() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 5rem auto' }}>
          <span
            className="font-arabic"
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            فقرات السهرة • Order of Events
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.8rem',
            }}
          >
            The Day
          </h2>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 500,
              marginBottom: '0.3rem',
            }}
          >
            برنامج ليلتنا عشان نفرح سوا من أول دقيقة لآخر الليل!
          </p>

          <p
            className="font-serif"
            style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
            }}
          >
            A night of cherished memories unfolding step by step.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div
          style={{
            position: 'relative',
            padding: '2rem 0',
          }}
        >
          {/* Central Line */}
          <div
            className="timeline-center-line"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: 'rgba(197, 160, 89, 0.3)',
            }}
          />

          {weddingConfig.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.num}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`timeline-item ${isEven ? 'even' : 'odd'}`}
                style={{
                  position: 'relative',
                  marginBottom: '3.5rem',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.75s ease ${index * 0.1}s, transform 0.75s ease ${index * 0.1}s`,
                }}
              >
                {/* Node Diamond */}
                <div
                  className="timeline-node"
                  style={{
                    position: 'absolute',
                    top: '24px',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'var(--color-bg)',
                    border: '2px solid var(--color-gold)',
                    transform: 'rotate(45deg)',
                    zIndex: 5,
                    boxShadow: '0 0 10px rgba(197, 160, 89, 0.3)',
                  }}
                />

                {/* Content Card */}
                <div
                  className="editorial-card timeline-card"
                  style={{
                    padding: '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    borderRadius: '1px',
                  }}
                >
                  {/* Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
                      paddingBottom: '0.75rem',
                    }}
                  >
                    <span
                      className="font-serif"
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: 300,
                        color: 'var(--color-gold-dark)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.num}
                    </span>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-gold-dark)',
                        fontFamily: 'var(--font-arabic)',
                        fontWeight: 600,
                      }}
                    >
                      <Clock size={14} color="var(--color-gold)" />
                      <span>{item.timeAr}</span>
                      <span className="font-sans" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        ({item.time})
                      </span>
                    </div>
                  </div>

                  {/* Arabic Title (Prominent) */}
                  <h3
                    className="font-arabic"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      marginBottom: '0.3rem',
                      color: 'var(--color-text-primary)',
                      direction: 'rtl',
                    }}
                  >
                    {item.titleAr}
                  </h3>

                  {/* English Title */}
                  <div
                    className="font-serif"
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--color-gold-dark)',
                      marginBottom: '0.85rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {item.title}
                  </div>

                  {/* Egyptian Description */}
                  <p
                    className="font-arabic"
                    style={{
                      fontSize: '0.98rem',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.8,
                      direction: 'rtl',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.descAr}
                  </p>

                  <p
                    className="font-sans"
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-item.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @media (min-width: 768px) {
          .timeline-center-line {
            left: 50%;
            transform: translateX(-50%);
          }
          .timeline-node {
            left: 50%;
            margin-left: -8px;
          }
          .timeline-item.even .timeline-card {
            width: calc(50% - 40px);
            margin-left: 0;
            margin-right: auto;
          }
          .timeline-item.odd .timeline-card {
            width: calc(50% - 40px);
            margin-left: auto;
            margin-right: 0;
          }
        }

        @media (max-width: 767px) {
          .timeline-center-line {
            left: 20px;
          }
          .timeline-node {
            left: 12px;
          }
          .timeline-card {
            width: calc(100% - 45px);
            margin-left: auto;
          }
        }
      `}</style>
    </section>
  );
}
