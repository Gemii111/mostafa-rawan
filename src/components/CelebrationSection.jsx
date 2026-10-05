import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Clock, Sparkles, Heart, Send, MessageSquareHeart, Check } from 'lucide-react';

const INITIAL_WISHES = [
  {
    id: 1,
    name: 'Ahmed & Family',
    tag: '🥂 Cheers to Love',
    message: 'Wishing Mostafa and Rawan a lifetime of unconditional love, laughter, and endless blessings!',
    time: 'Just now',
  },
  {
    id: 2,
    name: 'Sarah & Nour',
    tag: '💍 Forever & Always',
    message: 'So incredibly happy for you both! May your journey together be as beautiful as your hearts.',
    time: '1h ago',
  },
  {
    id: 3,
    name: 'Omar & Friends',
    tag: '✨ Endless Happiness',
    message: 'Congratulations to the most wonderful couple! Can’t wait to celebrate this magical night with you.',
    time: '2h ago',
  },
];

/**
 * Celebration & Guest Wishes Section:
 * Replaces the old timeline with a meaningful, modern English section.
 * - Highlights the 8:00 PM start time and key celebration details.
 * - Features an interactive Guestbook where friends & family can leave warm wishes.
 */
export default function CelebrationSection() {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('mostafa_rawan_wishes');
      return saved ? JSON.parse(saved) : INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTag, setSelectedTag] = useState('🥂 Cheers to Love');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('mostafa_rawan_wishes', JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      tag: selectedTag,
      message: message.trim(),
      time: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const tags = ['🥂 Cheers to Love', '💍 Forever & Always', '✨ Best Wishes', '🤍 Endless Joy'];

  return (
    <section
      id="celebration"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.75rem, 3.8vw, 2.6rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--color-text-primary)',
              marginBottom: '0.35rem',
            }}
          >
            The Celebration &amp; Wishes
          </h2>

          <div
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            An Evening of Love &amp; Togetherness
          </div>

          <div className="gold-divider" style={{ margin: '0.5rem auto' }}>
            <div className="gold-divider-diamond" />
          </div>
        </div>

        {/* 1. Key Celebration Highlights Card */}
        <div
          className="editorial-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto 3rem auto',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {/* Doors Open */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-dark)',
                  flexShrink: 0,
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.2rem' }}
                >
                  8:00 PM Sharp
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Doors open for guest reception. The celebration commences promptly at 8:00 PM.
                </p>
              </div>
            </div>

            {/* Dress Code */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-dark)',
                  flexShrink: 0,
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.2rem' }}
                >
                  {weddingConfig.dressCode.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {weddingConfig.dressCode.description}
                </p>
              </div>
            </div>
          </div>

          {/* Warm Note */}
          <div
            style={{
              marginTop: '1.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(197, 160, 89, 0.25)',
              textAlign: 'center',
            }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: 'var(--color-gold-dark)',
                marginBottom: '0.4rem',
              }}
            >
              "{weddingConfig.celebration.quote}"
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              {weddingConfig.celebration.note}
            </p>
          </div>
        </div>

        {/* 2. Interactive Guest Wishes / Guestbook */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-gold-dark)',
                marginBottom: '0.4rem',
              }}
            >
              <MessageSquareHeart size={20} />
              <span
                className="font-sans"
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                Guest Love Notes
              </span>
            </div>
            <h3
              className="font-serif"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400, color: 'var(--color-text-primary)' }}
            >
              Leave Your Warm Wishes
            </h3>
          </div>

          {/* Wish Input Form */}
          <form
            onSubmit={handleSubmit}
            className="editorial-card"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <input
                type="text"
                placeholder="Your Name (e.g., Sarah &amp; Friends)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                required
                style={{
                  flex: '1 1 240px',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  backgroundColor: 'var(--color-bg)',
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-primary)',
                  outline: 'none',
                }}
              />

              {/* Tag Selector */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                {tags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTag(t)}
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: '999px',
                      border: selectedTag === t ? '1.5px solid var(--color-gold)' : '1px solid rgba(61, 55, 48, 0.12)',
                      backgroundColor: selectedTag === t ? 'rgba(197, 160, 89, 0.16)' : 'transparent',
                      color: selectedTag === t ? 'var(--color-gold-dark)' : 'var(--color-text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Write a heartfelt message or blessing for Mostafa &amp; Rawan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              maxLength={300}
              required
              style={{
                width: '100%',
                padding: '0.85rem 1.15rem',
                borderRadius: '8px',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                backgroundColor: 'var(--color-bg)',
                fontSize: '0.92rem',
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text-primary)',
                outline: 'none',
                resize: 'vertical',
                marginBottom: '1.25rem',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
              {isSubmitted && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#2e7d32',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  <Check size={16} /> Wish posted with love!
                </span>
              )}

              <button type="submit" className="btn-luxury" style={{ padding: '0.85rem 2rem' }}>
                <Send size={15} />
                <span className="font-sans" style={{ fontSize: '0.85rem', letterSpacing: '0.12em' }}>
                  Send Wishes
                </span>
              </button>
            </div>
          </form>

          {/* Wishes List */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
            }}
          >
            {wishes.map((w) => (
              <div
                key={w.id}
                className="editorial-card"
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <span
                      className="font-serif"
                      style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}
                    >
                      {w.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(197, 160, 89, 0.12)',
                        color: 'var(--color-gold-dark)',
                        fontWeight: 600,
                      }}
                    >
                      {w.tag}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '0.75rem',
                    }}
                  >
                    "{w.message}"
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <Heart size={13} fill="var(--color-gold)" color="var(--color-gold)" />
                  <span>{w.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
