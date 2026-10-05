import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../config/weddingConfig';

/**
 * Countdown Section:
 * Compact, luxury English countdown clock.
 * Fully responsive for mobile and desktop.
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
    { label: 'Days', value: formatNumber(timeLeft.days) },
    { label: 'Hours', value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <section
      id="countdown"
      style={{
        padding: '3.75rem 1.25rem',
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.75rem, 3.8vw, 2.5rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: 'var(--color-text-primary)',
            marginBottom: '0.35rem',
          }}
        >
          Counting Down to Forever
        </h2>

        <div
          className="font-sans"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
            fontWeight: 700,
            marginBottom: '2rem',
          }}
        >
          October 17, 2026 • 8:00 PM
        </div>

        {/* Countdown Cards Grid (4 columns responsive for iPhone & Android) */}
        <div className="countdown-grid">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="editorial-card countdown-card"
            >
              <div
                className="font-serif countdown-number"
                style={{
                  fontSize: 'clamp(1.85rem, 5.5vw, 3.4rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.02em',
                  marginBottom: '0.35rem',
                }}
              >
                {unit.value}
              </div>

              <div
                className="font-sans"
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 700,
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
