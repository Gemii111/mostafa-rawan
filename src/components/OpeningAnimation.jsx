import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Music } from 'lucide-react';

/**
 * Opening Animation:
 * Fast, minimal luxury reveal screen.
 * Displays Mostafa & Rawan and transitions seamlessly.
 */
export default function OpeningAnimation({ onComplete }) {
  const [stage, setStage] = useState('reveal');

  const handleEnter = () => {
    window.dispatchEvent(new Event('start-wedding-audio'));
    setStage('fadeout');
    setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 450);
  };

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      window.dispatchEvent(new Event('start-wedding-audio'));
      setStage('fadeout');
    }, 2000);

    const completeTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 2450);

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
        backgroundColor: '#FAF6F0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: stage === 'fadeout' ? 0 : 1,
        transform: stage === 'fadeout' ? 'scale(1.02)' : 'scale(1)',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(1rem, 3.5vw, 2.5rem)',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          borderRadius: '4px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '750px',
        }}
      >
        <span
          className="font-sans"
          style={{
            display: 'block',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
            marginBottom: '1rem',
            fontWeight: 600,
          }}
        >
          {weddingConfig.eventType}
        </span>

        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)',
            fontWeight: 300,
            letterSpacing: '0.14em',
            color: '#191613',
            margin: '0.4rem 0',
            lineHeight: 1.15,
          }}
        >
          {weddingConfig.groom}
          <span
            style={{
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-gold)',
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
          className="font-arabic"
          style={{
            fontSize: '1.2rem',
            color: 'var(--color-text-primary)',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}
        >
          {weddingConfig.groomAr} &amp; {weddingConfig.brideAr}
        </div>

        <div
          className="font-arabic"
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            fontWeight: 500,
          }}
        >
          {weddingConfig.displayDateAr} • {weddingConfig.location.venueNameAr}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          color: 'var(--color-gold-dark)',
          fontFamily: 'var(--font-sans)',
          textTransform: 'uppercase',
        }}
      >
        <Music size={14} color="var(--color-gold)" />
        <span className="font-arabic" style={{ fontSize: '0.85rem' }}>اضغط للدخول والاستماع</span>
      </div>
    </div>
  );
}
