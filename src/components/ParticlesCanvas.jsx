import React, { useEffect, useRef } from 'react';

/**
 * Creative floating champagne gold sparkles & twinkling diamond stars:
 * Draws subtle glowing motes and miniature 4-point golden sparkle stars
 * that float gently upwards, creating an ethereal, magical wedding aura.
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

    const count = Math.min(42, Math.floor(width / 30));
    const particles = [];

    const colors = [
      'rgba(197, 160, 89, 0.40)', // Warm gold
      'rgba(223, 207, 190, 0.45)', // Champagne
      'rgba(255, 250, 240, 0.45)', // Ivory white
      'rgba(229, 207, 158, 0.35)', // Golden sheen
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.22,
        vy: -Math.random() * 0.35 - 0.12, // Gently floats upwards
        alpha: Math.random() * 0.55 + 0.25,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
        isStar: i % 4 === 0, // 25% are 4-point sparkle stars
        starRotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    // Helper to draw a 4-point diamond sparkle star
    const drawSparkleStar = (cx, cy, spikes, outerRadius, innerRadius, color) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.starRotation += p.rotationSpeed;

        // Wrap around seamlessly
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const currentAlpha = Math.max(
          0.1,
          p.alpha + Math.sin(time * p.pulseSpeed * 60 + p.phase) * 0.3
        );
        const resolvedColor = p.color.replace(/[\d.]+\)$/g, `${currentAlpha})`);

        if (p.isStar) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.starRotation);
          drawSparkleStar(0, 0, 4, p.radius * 2.4, p.radius * 0.7, resolvedColor);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = resolvedColor;
          ctx.fill();
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
