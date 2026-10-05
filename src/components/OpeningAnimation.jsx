import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Music } from 'lucide-react';

/**
 * Opening Animation:
 * Minimal elegant reveal screen.
 * Triggers audio playback on click or transition automatically.
 */
export default function OpeningAnimation({ onComplete }) {
  const [stage, setStage] = useState('reveal'); // 'reveal', 'fadeout', 'done'

  const handleEnter = () => {
    // Dispatch event to start music with user gesture authorization
    window.dispatchEvent(new Event('start-wedding-audio'));
    setStage('fadeout');
    setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 600);
  };

  useEffect(() => {
    // Stage 1: Reveal typography & gold divider (0 - 2.5s)
    const fadeTimer = setTimeout(() => {
      window.dispatchEvent(new Event('start-wedding-audio'));
      setStage('fadeout');
    }, 2800);

    // Stage 2: Fade out overlay completely into hero
    const completeTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 3400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div
      onClick={handleEnter}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: stage === 'fadeout' ? 0 : 1,
        transform: stage === 'fadeout' ? 'scale(1.02)' : 'scale(1)',
        cursor: 'pointer',
      }}
    >
      {/* Decorative frame outline */}
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(1rem, 4vw, 3rem)',
          border: '1px solid rgba(197, 160, 89, 0.28)',
          pointerEvents: 'none',
          opacity: stage === 'reveal' ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '800px',
        }}
      >
        <span
          className="font-arabic"
          style={{
            display: 'block',
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            color: '#82786F',
            marginBottom: '1rem',
            fontWeight: 500,
          }}
        >
          دعوة لحضور فرحنا • An Invitation To Celebrate
        </span>

        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)',
            fontWeight: 300,
            letterSpacing: '0.14em',
            color: '#1C1A17',
            margin: '0.5rem 0',
            lineHeight: 1.15,
          }}
        >
          {weddingConfig.groom}
          <span
            style={{
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              color: '#C5A059',
              margin: '0 0.5rem',
              fontWeight: 300,
            }}
          >
            &amp;
          </span>
          {weddingConfig.bride}
        </h1>

        <div
          className="gold-divider"
          style={{
            margin: '1.25rem auto',
            maxWidth: '180px',
          }}
        >
          <div className="gold-divider-diamond" />
        </div>

        <div
          className="font-serif"
          style={{
            fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
            fontWeight: 300,
            letterSpacing: '0.25em',
            color: '#9F7E3B',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          {weddingConfig.eventType}
        </div>

        <div
          className="font-arabic"
          style={{
            fontSize: '1.15rem',
            color: 'var(--color-gold-dark)',
            fontWeight: 600,
          }}
        >
          "{weddingConfig.romanticQuoteAr}"
        </div>
      </div>

      {/* Enter button with music icon */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.25rem',
          borderRadius: '999px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid var(--color-border)',
          fontSize: '0.8rem',
          color: 'var(--color-gold-dark)',
          fontFamily: 'var(--font-arabic)',
          fontWeight: 600,
          boxShadow: 'var(--shadow-subtle)',
        }}
      >
        <Music size={14} color="var(--color-gold)" />
        <span>اضغط هنا للدخول وتشغيل الأغنية</span>
      </div>
    </div>
  );
}
