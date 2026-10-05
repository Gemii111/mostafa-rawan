import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../config/weddingConfig';

/**
 * Countdown Section:
 * Compact, elegant countdown clock.
 * Zero repetitive text.
 */
export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(WEDDING_DATE).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const units = [
    { label: 'Days', labelAr: 'أيام', value: formatNumber(timeLeft.days) },
    { label: 'Hours', labelAr: 'ساعات', value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', labelAr: 'دقايق', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', labelAr: 'ثواني', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <section
      id="countdown"
      style={{
        padding: '3.5rem 1.25rem',
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            fontWeight: 700,
            color: 'var(--color-gold-dark)',
            marginBottom: '0.4rem',
          }}
        >
          العد التنازلي لليلتنا
        </h2>

        <div
          className="font-sans"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            fontWeight: 600,
            marginBottom: '1.75rem',
          }}
        >
          Counting Down
        </div>

        {/* Countdown Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '1rem',
            maxWidth: '650px',
            margin: '0 auto',
          }}
        >
          {units.map((unit) => (
            <div
              key={unit.label}
              className="editorial-card"
              style={{
                padding: '1.5rem 0.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                {unit.value}
              </div>

              <div
                className="font-arabic"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-gold-dark)',
                  marginBottom: '0.15rem',
                }}
              >
                {unit.labelAr}
              </div>

              <div
                className="font-sans"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                }}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
