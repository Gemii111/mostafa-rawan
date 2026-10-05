import React, { useEffect, useRef } from 'react';

/**
 * Creative Floating Golden Confetti, Stars & Hearts:
 * Continuous, visible, celebratory animation that automatically drifts across the screen.
 * Runs smoothly on canvas at 60 FPS without requiring any user click.
 */
export default function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Visible particle density
    const count = Math.min(50, Math.floor(width / 24));
    const particles = [];

    const types = ['star', 'circle', 'heart', 'sparkle'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        type: types[i % types.length],
        size: Math.random() * 8 + 5, // Clearly visible size (5px - 13px)
        color: i % 3 === 0 ? '#C5A059' : i % 3 === 1 ? '#D4AF37' : '#E5CF9E',
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.55 - 0.25, // Drifts upwards gently
        alpha: Math.random() * 0.5 + 0.45, // High, clear visibility
        pulseSpeed: 0.02 + Math.random() * 0.025,
        phase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Draw 4-point diamond sparkle star
    const drawStar = (cx, cy, outerRadius, innerRadius, color, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowColor = 'rgba(197, 160, 89, 0.45)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a1 = (i * Math.PI) / 2;
        const a2 = a1 + Math.PI / 4;
        ctx.lineTo(cx + Math.cos(a1) * outerRadius, cy + Math.sin(a1) * outerRadius);
        ctx.lineTo(cx + Math.cos(a2) * innerRadius, cy + Math.sin(a2) * innerRadius);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Draw miniature golden heart
    const drawHeart = (cx, cy, size, color, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha * 0.85;
      ctx.fillStyle = color;
      ctx.shadowColor = 'rgba(197, 160, 89, 0.35)';
      ctx.shadowBlur = 4;
      ctx.translate(cx, cy);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 3, 0, size);
      // top right curve
      ctx.bezierCurveTo(size, topCurveHeight / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Draw glowing bokeh orb
    const drawGlowCircle = (cx, cy, radius, color, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha * 0.75;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(197, 160, 89, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Wrap around smoothly
        if (p.y < -25) {
          p.y = height + 25;
          p.x = Math.random() * width;
        }
        if (p.x < -25) p.x = width + 25;
        if (p.x > width + 25) p.x = -25;

        const currentAlpha = Math.min(
          0.95,
          Math.max(0.25, p.alpha + Math.sin(time * 3 + p.phase) * 0.3)
        );

        if (p.type === 'star' || p.type === 'sparkle') {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          drawStar(0, 0, p.size, p.size * 0.3, p.color, currentAlpha);
          ctx.restore();
        } else if (p.type === 'heart') {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation * 0.4);
          drawHeart(0, 0, p.size * 0.9, p.color, currentAlpha);
          ctx.restore();
        } else {
          drawGlowCircle(p.x, p.y, p.size * 0.8, p.color, currentAlpha);
        }
      });

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
