import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Floating Music Player:
 * - Plays the actual authentic song: Amr Diab – Yom Ma Etabelna (عمرو دياب – يوم ما تقابلنا)
 * - Animated equalizer bars
 * - Toast with song title
 */
export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    audio.loop = true;

    // Try starting on first user interaction anywhere on the page
    const handleFirstClick = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 4000);
          })
          .catch((err) => {
            console.log('Autoplay deferred:', err);
          });
      }
      window.removeEventListener('click', handleFirstClick);
    };

    window.addEventListener('click', handleFirstClick, { once: true });
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 3500);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  return (
    <>
      {/* Real original Amr Diab audio track */}
      <audio ref={audioRef} preload="auto" loop src={weddingConfig.music.src} />

      <div
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        {/* Song Info Pill / Tooltip */}
        <div
          style={{
            background: 'rgba(250, 247, 242, 0.94)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            padding: '0.45rem 0.95rem',
            borderRadius: '999px',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            color: 'var(--color-text-secondary)',
            boxShadow: 'var(--shadow-card)',
            display: showTooltip || isPlaying ? 'flex' : 'none',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap',
          }}
          className="font-sans"
        >
          <Music size={12} color="var(--color-gold)" />
          <span style={{ fontWeight: 500 }}>{weddingConfig.music.title}</span>
          <span className="font-arabic" style={{ color: 'var(--color-gold-dark)', fontSize: '0.75rem' }}>
            ({weddingConfig.music.titleAr})
          </span>
        </div>

        {/* Floating Minimal Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: isPlaying ? 'var(--color-text-primary)' : 'rgba(250, 247, 242, 0.95)',
            color: isPlaying ? '#FAF7F2' : 'var(--color-text-primary)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
            position: 'relative',
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {isPlaying ? (
            /* Animated Equalizer Bars */
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '2.5px',
                height: '16px',
              }}
            >
              {[1, 2, 3, 4].map((bar) => (
                <span
                  key={bar}
                  style={{
                    width: '2px',
                    height: '100%',
                    backgroundColor: 'var(--color-gold-light)',
                    borderRadius: '2px',
                    animation: `equalizerBounce 0.8s ease-in-out infinite alternate`,
                    animationDelay: `${bar * 0.18}s`,
                  }}
                />
              ))}
            </div>
          ) : (
            <VolumeX size={18} color="var(--color-text-muted)" />
          )}

          {/* Pulse ring when playing */}
          {isPlaying && (
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                animation: 'pulseGlow 2.5s infinite',
                pointerEvents: 'none',
              }}
            />
          )}
        </button>
      </div>

      <style>{`
        @keyframes equalizerBounce {
          0% { height: 3px; }
          100% { height: 16px; }
        }
      `}</style>
    </>
  );
}
