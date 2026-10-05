import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Opening Animation:
 * Minimal elegant loading and reveal screen.
 * Displays "MOSTAFA & RAWAN" with smooth typography reveal,
 * then gracefully dissolves into the cinematic hero section.
 */
export default function OpeningAnimation({ onComplete }) {
  const [stage, setStage] = useState('reveal'); // 'reveal', 'fadeout', 'done'

  useEffect(() => {
    // Stage 1: Reveal typography & gold divider (0 - 1.8s)
    const fadeTimer = setTimeout(() => {
      setStage('fadeout');
    }, 2000);

    // Stage 2: Fade out overlay completely into hero (2.0s - 2.6s)
    const completeTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div
      onClick={() => {
        setStage('fadeout');
        setTimeout(() => {
          setStage('done');
          if (onComplete) onComplete();
        }, 500);
      }}
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
          className="font-sans"
          style={{
            display: 'block',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#82786F',
            marginBottom: '1.25rem',
          }}
        >
          An Invitation To Celebrate
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
          }}
        >
          {weddingConfig.eventType}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#A89F95',
          fontFamily: 'var(--font-sans)',
        }}
      >
        Click to enter
      </div>
    </div>
  );
}
