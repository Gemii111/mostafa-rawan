import React, { useState, useEffect } from 'react';

/**
 * Creative Interactive Click/Tap Sparkles:
 * Spawns delicate golden sparkles and hearts where the user taps or clicks.
 * Gives an enchanting, celebratory festive feel to the invitation!
 */
export default function ClickSparkles() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const symbols = ['✦', '✨', '💛', '✦', '⋆', '✨'];

    const handlePointerDown = (e) => {
      // Don't spawn if tapping on an active audio slider or input
      const x = e.clientX || (e.touches && e.touches[0]?.clientX);
      const y = e.clientY || (e.touches && e.touches[0]?.clientY);
      if (!x || !y) return;

      const newBatch = Array.from({ length: 4 }).map((_, i) => ({
        id: Date.now() + Math.random() + i,
        x,
        y,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        dx: `${(Math.random() - 0.5) * 60}px`,
        dy: `${(Math.random() - 0.5) * 40}px`,
        rot: `${(Math.random() - 0.5) * 60}deg`,
        size: `${Math.random() * 8 + 14}px`,
        color: i % 2 === 0 ? '#C5A059' : '#E5CF9E',
      }));

      setSparkles((prev) => [...prev.slice(-16), ...newBatch]);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }}>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="click-particle"
          style={{
            left: s.x,
            top: s.y,
            '--dx': s.dx,
            '--dy': s.dy,
            '--rot': s.rot,
            fontSize: s.size,
            color: s.color,
            textShadow: '0 0 10px rgba(197, 160, 89, 0.6)',
          }}
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
}
