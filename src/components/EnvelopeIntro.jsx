import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * Luxury Royal Wax Seal & 3D Envelope Opening Experience:
 * - Displays a high-fashion digital wedding envelope with a gold monogram wax seal.
 * - On click/tap: Wax seal releases, the flap folds open in 3D, the invitation letter
 *   slides out, and audio playback is naturally unlocked by the user's gesture.
 * - 100% English Luxury Haute-Couture Edition.
 */
export default function EnvelopeIntro({ onOpen }) {
  const [stage, setStage] = useState('closed'); // 'closed', 'opening', 'revealing', 'done'

  const handleOpen = () => {
    if (stage !== 'closed') return;

    // Trigger music & opening sequence
    if (onOpen) onOpen();

    setStage('opening');

    // Flap opens, then card slides up
    setTimeout(() => {
      setStage('revealing');
    }, 700);

    // Fade entire overlay into the website
    setTimeout(() => {
      setStage('done');
    }, 2000);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onOpen) onOpen();
    setStage('done');
  };

  if (stage === 'done') return null;

  const isOpening = stage === 'opening' || stage === 'revealing';
  const isRevealing = stage === 'revealing';

  return (
    <div
      onClick={handleOpen}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#151311',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflow: 'hidden',
        cursor: stage === 'closed' ? 'pointer' : 'default',
        opacity: stage === 'revealing' ? 0.05 : 1,
        transform: stage === 'revealing' ? 'scale(1.08)' : 'scale(1)',
        transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        userSelect: 'none',
      }}
    >
      {/* Ambient background gold glow */}
      <div
        style={{
          position: 'absolute',
          width: 'min(90vw, 550px)',
          height: 'min(90vw, 550px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.25) 0%, rgba(223, 207, 190, 0.08) 50%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        aria-label="Skip to invitation"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          color: 'var(--color-champagne)',
          padding: '0.45rem 1rem',
          borderRadius: '999px',
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          zIndex: 10,
        }}
      >
        <span>Skip</span>
        <ArrowRight size={13} />
      </button>

      {/* Top Header Text */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          transition: 'opacity 0.5s ease',
          opacity: isOpening ? 0 : 1,
        }}
      >
        <div
          className="font-sans"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          Special Delivery
        </div>
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            fontWeight: 300,
            color: '#FAF6F0',
            letterSpacing: '0.08em',
            margin: 0,
          }}
        >
          {weddingConfig.groom} &amp; {weddingConfig.bride}
        </h1>
      </div>

      {/* The 3D Envelope Container */}
      <div
        className="envelope-container"
        style={{
          position: 'relative',
          width: 'min(92vw, 440px)',
          height: 'min(58vw, 280px)',
          perspective: '1200px',
        }}
      >
        {/* Letter Card Inside (Slides UP when opened) */}
        <div
          className={`letter-card ${isRevealing ? 'letter-rise' : ''}`}
          style={{
            position: 'absolute',
            inset: '6px 12px',
            backgroundColor: '#FAF6F0',
            borderRadius: '8px',
            border: '1px solid rgba(197, 160, 89, 0.45)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            textAlign: 'center',
            zIndex: 2,
            transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isRevealing ? 'translateY(-65%)' : 'translateY(0)',
          }}
        >
          <div
            className="font-sans"
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.35rem',
            }}
          >
            {weddingConfig.eventType}
          </div>
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)',
              color: 'var(--color-text-primary)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              marginBottom: '0.25rem',
            }}
          >
            {weddingConfig.groom} &amp; {weddingConfig.bride}
          </div>
          <div
            className="font-sans"
            style={{
              fontSize: '0.78rem',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}
          >
            Saturday, October 17, 2026
          </div>
        </div>

        {/* Envelope Base / Pocket Back */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#2A241F',
            borderRadius: '10px',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.5), 0 0 40px rgba(197, 160, 89, 0.25)',
            zIndex: 1,
          }}
        />

        {/* Top Flap (Triangular flap that flips open 180 degrees) */}
        <div
          className={`envelope-flap ${isOpening ? 'flap-open' : ''}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transformOrigin: 'top center',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), z-index 0.3s ease',
            zIndex: isOpening ? 1 : 4,
            transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          <svg
            viewBox="0 0 440 280"
            style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3A322B" />
                <stop offset="100%" stopColor="#2A241F" />
              </linearGradient>
            </defs>
            <polygon
              points="0,0 220,150 440,0"
              fill="url(#flapGrad)"
              stroke="rgba(197, 160, 89, 0.5)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Envelope Front Pocket (Lower triangle cut) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 440 280"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2D2621" />
                <stop offset="100%" stopColor="#221C18" />
              </linearGradient>
            </defs>
            {/* Left fold */}
            <polygon
              points="0,0 220,140 0,280"
              fill="#26201B"
              opacity="0.9"
              stroke="rgba(197, 160, 89, 0.3)"
              strokeWidth="1"
            />
            {/* Right fold */}
            <polygon
              points="440,0 220,140 440,280"
              fill="#26201B"
              opacity="0.9"
              stroke="rgba(197, 160, 89, 0.3)"
              strokeWidth="1"
            />
            {/* Bottom pocket */}
            <polygon
              points="0,280 220,135 440,280"
              fill="url(#pocketGrad)"
              stroke="rgba(197, 160, 89, 0.55)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Royal Gold Wax Seal */}
        <div
          className={`wax-seal ${isOpening ? 'seal-break' : ''}`}
          style={{
            position: 'absolute',
            top: '52%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #F5E6C8 0%, #C5A059 50%, #856326 100%)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 25px rgba(197, 160, 89, 0.65)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.4s ease, opacity 0.4s ease',
          }}
        >
          {/* Inner ring */}
          <div
            style={{
              position: 'absolute',
              inset: '4px',
              borderRadius: '50%',
              border: '1px dashed rgba(255, 255, 255, 0.45)',
              pointerEvents: 'none',
            }}
          />

          <span
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#34260F',
              lineHeight: 1,
              letterSpacing: '0.05em',
            }}
          >
            M&amp;R
          </span>
          <span
            style={{
              fontSize: '0.45rem',
              color: '#4A3716',
              letterSpacing: '0.12em',
              fontWeight: 700,
              marginTop: '2px',
            }}
          >
            ✦ 17.10 ✦
          </span>
        </div>
      </div>

      {/* Tap to Open Prompt */}
      <div
        style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          transition: 'opacity 0.4s ease',
          opacity: isOpening ? 0 : 1,
        }}
      >
        <div
          className="font-sans"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 1.4rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid rgba(197, 160, 89, 0.45)',
            color: 'var(--color-gold-sheen)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            animation: 'pulseGlow 2.5s infinite',
          }}
        >
          <Sparkles size={14} color="var(--color-gold)" />
          <span>Tap to Open Invitation</span>
          <Sparkles size={14} color="var(--color-gold)" />
        </div>
      </div>

      <style>{`
        .wax-seal {
          animation: floatSeal 3s ease-in-out infinite alternate;
        }
        @keyframes floatSeal {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.05); }
        }
        .seal-break {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.6) !important;
        }
      `}</style>
    </div>
  );
}
