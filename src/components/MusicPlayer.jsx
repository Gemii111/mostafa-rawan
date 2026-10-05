import React, { useState, useRef, useEffect } from 'react';
import { VolumeX, Music, Volume2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Bulletproof Floating Music Player:
 * - Plays the actual authentic track: Amr Diab – Yom Ma Etabelna (عمرو دياب – يوم ما تقابلنا)
 * - Tries immediate unmuted autoplay on page load.
 * - If blocked by browser autoplay policy (mobile Safari / Chrome), instantly starts
 *   on the very first tap or touch anywhere on the screen.
 * - Shows an elegant floating prompt if audio is waiting for user gesture.
 * - Handles AudioContext unlocking for iOS Safari and Android.
 */
export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const audioRef = useRef(null);

  // Helper to unlock Web Audio on iOS and Android
  const unlockAudioContext = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
      }
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.95;
    audio.loop = true;

    const startPlayback = () => {
      unlockAudioContext();
      const promise = audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            setNeedsGesture(false);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 4000);
            cleanupGestureListeners();
          })
          .catch((err) => {
            // Browser strictly blocked unmuted autoplay until user taps
            console.log('Autoplay prevented by browser policy, waiting for first tap:', err);
            setNeedsGesture(true);
          });
      }
    };

    // 1. Attempt immediate autoplay
    startPlayback();

    // 2. Attach global touch & click listeners for immediate trigger on first interaction
    const gestureEvents = ['pointerdown', 'touchstart', 'touchend', 'click'];

    const handleFirstGesture = () => {
      startPlayback();
    };

    const cleanupGestureListeners = () => {
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
        document.removeEventListener(evt, handleFirstGesture);
      });
    };

    gestureEvents.forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { passive: true });
      document.addEventListener(evt, handleFirstGesture, { passive: true });
    });

    return () => {
      cleanupGestureListeners();
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    unlockAudioContext();

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setNeedsGesture(false);
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
      {/* Real original Amr Diab 320kbps CD Master audio track */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
        playsInline
        webkit-playsinline="true"
        src={weddingConfig.music.src}
      >
        <source src={weddingConfig.music.src} type="audio/mpeg" />
      </audio>

      {/* Floating Prompt if waiting for user tap */}
      {needsGesture && !isPlaying && (
        <div
          onClick={togglePlay}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            backgroundColor: 'rgba(25, 22, 19, 0.92)',
            color: '#FFFFFF',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(197, 160, 89, 0.5)',
            borderRadius: '999px',
            padding: '0.65rem 1.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(197, 160, 89, 0.35)',
            animation: 'floatGentle 3s ease-in-out infinite',
            direction: 'rtl',
            whiteSpace: 'nowrap',
          }}
          className="font-arabic"
        >
          <Volume2 size={16} color="var(--color-gold)" />
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
            اضغط هنا أو في أي مكان لتشغيل الأغنية 🎵
          </span>
        </div>
      )}

      {/* Top Floating Player Control */}
      <div
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.25rem',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
        }}
      >
        {/* Song Info Pill */}
        <div
          style={{
            background: 'rgba(250, 246, 240, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            padding: '0.45rem 0.9rem',
            borderRadius: '999px',
            fontSize: '0.78rem',
            color: 'var(--color-text-secondary)',
            boxShadow: 'var(--shadow-card)',
            display: showTooltip || isPlaying ? 'flex' : 'none',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap',
          }}
          className="font-arabic"
        >
          <Music size={12} color="var(--color-gold-dark)" />
          <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {weddingConfig.music.titleAr}
          </span>
        </div>

        {/* Floating Minimal Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: isPlaying ? 'var(--color-text-primary)' : 'rgba(250, 246, 240, 0.95)',
            color: isPlaying ? '#FAF6F0' : 'var(--color-text-primary)',
            border: '1px solid rgba(197, 160, 89, 0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-card)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                height: '15px',
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
            <VolumeX size={17} color="var(--color-text-muted)" />
          )}

          {/* Pulsing ring when playing */}
          {isPlaying && (
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '1px solid rgba(197, 160, 89, 0.45)',
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
          100% { height: 15px; }
        }
      `}</style>
    </>
  );
}
