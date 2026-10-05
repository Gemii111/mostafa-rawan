import React, { useEffect, useRef } from 'react';

/**
 * Ultra-Lightweight Ambient Golden Sparkles Canvas:
 * - 100% GPU/CPU optimized for mobile (iPhone & Android) with ZERO lag/freezing.
 * - Absolutely NO costly canvas shadowBlur or filter operations.
 * - Renders delicate golden starlets and celebratory bokeh particles smoothly at 60 FPS.
 */
export default function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Adaptive particle count: 14 on small mobile screens, 22 on desktop
    const count = width < 640 ? 14 : 22;
    const particles = [];
    const colors = ['#C5A059', '#D4AF37', '#E5CF9E', '#FAF6F0'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        isStar: i % 2 === 0,
        radius: Math.random() * 3 + 2, // 2px to 5px
        color: colors[i % colors.length],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.2, // slow upward drift
        baseAlpha: Math.random() * 0.4 + 0.4,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    // Direct, ultra-fast vector 4-point star (NO shadowBlur)
    const drawStar = (x, y, r, alpha, rot, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      const inner = r * 0.35;
      for (let i = 0; i < 4; i++) {
        const a1 = (i * Math.PI) / 2;
        const a2 = a1 + Math.PI / 4;
        ctx.lineTo(Math.cos(a1) * r, Math.sin(a1) * r);
        ctx.lineTo(Math.cos(a2) * inner, Math.sin(a2) * inner);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Wrap around smoothly
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const alpha = Math.min(
          0.85,
          Math.max(0.2, p.baseAlpha + Math.sin(time * 2.5 + p.phase) * 0.25)
        );

        if (p.isStar) {
          drawStar(p.x, p.y, p.radius * 2, alpha, p.rotation, p.color);
        } else {
          // Simple golden round sparkle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}
