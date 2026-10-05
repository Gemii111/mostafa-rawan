import React, { useState, useEffect } from 'react';
import { WEDDING_DATE, weddingConfig } from '../config/weddingConfig';
import { CalendarCheck } from 'lucide-react';

/**
 * Countdown Section:
 * Accurate countdown to Saturday, October 17, 2026 at 7:00 PM.
 * Luxury typography with natural Egyptian labels and Google Calendar sync.
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

  const handleAddToCalendar = () => {
    const startDate = new Date(WEDDING_DATE).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date(new Date(WEDDING_DATE).getTime() + 6 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(`فرح مصطفى & روان | Mostafa & Rawan Wedding`);
    const details = encodeURIComponent(`فرح مصطفى & روان\nالمكان: ${weddingConfig.location.venueNameAr} (${weddingConfig.location.venueName})\nالعنوان: ${weddingConfig.location.addressAr}\nاللوكيشن: ${weddingConfig.location.locationUrl}`);
    const location = encodeURIComponent(`${weddingConfig.location.venueNameAr}, ${weddingConfig.location.cityAr}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const units = [
    { label: 'Days', labelAr: 'أيام', value: formatNumber(timeLeft.days) },
    { label: 'Hours', labelAr: 'ساعات', value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', labelAr: 'دقايق', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', labelAr: 'ثواني', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <section
      id="countdown"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        {/* Header */}
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
          Counting Down
        </span>

        <h2
          className="heading-serif"
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}
        >
          The Countdown
        </h2>

        <div className="gold-divider">
          <div className="gold-divider-diamond" />
        </div>

        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
            color: 'var(--color-text-primary)',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}
        >
          بنعد الأيام والساعات عشان نتجمع ونفرح سوا في {weddingConfig.location.venueNameAr}!
        </p>

        <p
          className="font-sans"
          style={{
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            color: 'var(--color-gold-dark)',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '3rem',
          }}
        >
          {weddingConfig.displayDate} • {weddingConfig.displayTime}
        </p>

        {/* Countdown Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.75rem)',
            marginBottom: '3rem',
          }}
        >
          {units.map((unit) => (
            <div
              key={unit.label}
              className="editorial-card"
              style={{
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem) 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
              }}
            >
              {/* Big Serif Number */}
              <div
                className="font-serif"
                style={{
                  fontSize: 'clamp(3rem, 6.5vw, 4.8rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.03em',
                  marginBottom: '0.75rem',
                }}
              >
                {unit.value}
              </div>

              {/* Arabic Label */}
              <div
                className="font-arabic"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-gold-dark)',
                  marginBottom: '0.2rem',
                }}
              >
                {unit.labelAr}
              </div>

              {/* English Label */}
              <div
                className="font-sans"
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
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

        {/* Add To Calendar CTA */}
        <div>
          <button
            onClick={handleAddToCalendar}
            className="btn-luxury"
            style={{
              padding: '1.1rem 2.2rem',
            }}
          >
            <CalendarCheck size={18} />
            <span className="font-arabic" style={{ fontSize: '1rem', fontWeight: 600 }}>
              سجّل ميعاد الفرح في Google Calendar
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
