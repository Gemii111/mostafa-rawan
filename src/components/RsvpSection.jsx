import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { CheckCircle2, MessageCircle, Heart, Send } from 'lucide-react';

/**
 * RSVP Section:
 * 100% Database-Free!
 * Warm Egyptian phrasing & instant WhatsApp confirmation with celebratory confetti.
 */
export default function RsvpSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    guestsCount: '1',
    attendance: 'accept',
    wishes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    if (formData.attendance === 'accept') {
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#C5A059', '#DFCFBE', '#FFFFFF', '#E0C794'],
        });
      } catch (err) {
        // ignore
      }
    }

    const statusText =
      formData.attendance === 'accept'
        ? 'أكيد جاي وأسعد بالحضور وأشارككم أحلى فرحة!'
        : 'أعتذر بكل أسف لعدم تمكني من الحضور، وبتمنالكم من قلبي كل السعادة والتوفيق';

    const guestsText =
      formData.attendance === 'accept' ? `\nعدد الأفراد: ${formData.guestsCount}` : '';

    const wishesText = formData.wishes.trim()
      ? `\nرسالة من القلب: "${formData.wishes.trim()}"`
      : '';

    const message = `✨ دعوة فرح مصطفى & روان ✨\n\nالاسم: ${formData.fullName}\nالحالة: ${statusText}${guestsText}${wishesText}\n\nالمكان: قاعة التراث، المنصورة`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${weddingConfig.contact.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span
            className="font-arabic"
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            تأكيد الحضور • RSVP
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.8rem',
            }}
          >
            We Would Love To Have You With Us
          </h2>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.35rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}
          >
            مستنيينكم تنورونا وتفرحوا معانا في قاعة التراث!
          </p>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            يا ريت تأكد حضورك قبل ٥ نوفمبر عشان نجهزلكم أحلى استقبال ومكان يليق بيكم وبحبايبكم.
          </p>
        </div>

        {/* RSVP Card */}
        <div
          className="editorial-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {isSubmitted ? (
            /* Confirmation View */
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 160, 89, 0.15)',
                  color: 'var(--color-gold-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                }}
              >
                <CheckCircle2 size={32} />
              </div>

              <h3
                className="font-arabic"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--color-text-primary)',
                }}
              >
                تسلم يا {formData.fullName}!
              </h3>

              <div
                className="font-arabic"
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--color-gold-dark)',
                  marginBottom: '1.5rem',
                }}
              >
                {formData.attendance === 'accept'
                  ? 'فرحتنا كملت بيكم، ومستنيينكم تنورونا في قاعة التراث!'
                  : 'نشكرك على ذوقك ولطفك.. ونتمنى نتقابل في مناسبات جاية كتير!'}
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-luxury-outline"
                style={{ fontSize: '0.85rem', padding: '0.8rem 1.8rem', fontFamily: 'var(--font-arabic)' }}
              >
                إرسال رد تاني أو تعديل
              </button>
            </div>
          ) : (
            /* Interactive WhatsApp Form */
            <form onSubmit={handleConfirm}>
              {/* Full Name */}
              <div style={{ marginBottom: '2rem' }}>
                <label
                  htmlFor="fullName"
                  className="font-arabic"
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                    direction: 'rtl',
                    textAlign: 'right',
                  }}
                >
                  الاسم الكريم بالكامل <span style={{ color: 'var(--color-gold)' }}>*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="مثال: د. أحمد منصور / م. حسام خيري"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-arabic)',
                    color: 'var(--color-text-primary)',
                    direction: 'rtl',
                    textAlign: 'right',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              {/* Attendance Options */}
              <div style={{ marginBottom: '2rem' }}>
                <label
                  className="font-arabic"
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 600,
                    marginBottom: '0.8rem',
                    direction: 'rtl',
                    textAlign: 'right',
                  }}
                >
                  هتشرفنا بالحضور في قاعة التراث؟ <span style={{ color: 'var(--color-gold)' }}>*</span>
                </label>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem',
                    direction: 'rtl',
                  }}
                >
                  <label
                    style={{
                      border:
                        formData.attendance === 'accept'
                          ? '1.5px solid var(--color-gold)'
                          : '1px solid var(--color-border)',
                      backgroundColor:
                        formData.attendance === 'accept'
                          ? 'rgba(197, 160, 89, 0.08)'
                          : 'var(--color-bg)',
                      padding: '1.25rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="accept"
                      checked={formData.attendance === 'accept'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--color-gold)' }}
                    />
                    <div>
                      <div className="font-arabic" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                        أكيد جايين وبكل حب! 🎉
                      </div>
                      <div className="font-arabic" style={{ fontSize: '0.82rem', color: 'var(--color-gold-dark)' }}>
                        يشرفنا الحضور ونفرح معاكم
                      </div>
                    </div>
                  </label>

                  <label
                    style={{
                      border:
                        formData.attendance === 'decline'
                          ? '1.5px solid var(--color-gold)'
                          : '1px solid var(--color-border)',
                      backgroundColor:
                        formData.attendance === 'decline'
                          ? 'rgba(197, 160, 89, 0.08)'
                          : 'var(--color-bg)',
                      padding: '1.25rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="decline"
                      checked={formData.attendance === 'decline'}
                      onChange={handleChange}
                      style={{ accentColor: 'var(--color-gold)' }}
                    />
                    <div>
                      <div className="font-arabic" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                        هتمنالكم الخير بس مش هقدر
                      </div>
                      <div className="font-arabic" style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        أعتذر لظروف تمنعني من الحضور
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'accept' && (
                <div style={{ marginBottom: '2rem' }}>
                  <label
                    htmlFor="guestsCount"
                    className="font-arabic"
                    style={{
                      display: 'block',
                      fontSize: '0.95rem',
                      color: 'var(--color-text-secondary)',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                      direction: 'rtl',
                      textAlign: 'right',
                    }}
                  >
                    عدد الأفراد اللي هيشرفونا
                  </label>
                  <select
                    id="guestsCount"
                    name="guestsCount"
                    value={formData.guestsCount}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      outline: 'none',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-arabic)',
                      color: 'var(--color-text-primary)',
                      cursor: 'pointer',
                      direction: 'rtl',
                      textAlign: 'right',
                    }}
                  >
                    <option value="1">شخص واحد (أنا لوحدي)</option>
                    <option value="2">شخصين (أنا ومعايا مرافق/زوجتي)</option>
                    <option value="3">٣ أفراد</option>
                    <option value="4+">٤ أفراد فأكثر (مع العائلة الكريمة)</option>
                  </select>
                </div>
              )}

              {/* Congratulatory Wishes */}
              <div style={{ marginBottom: '2.5rem' }}>
                <label
                  htmlFor="wishes"
                  className="font-arabic"
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 600,
                    marginBottom: '0.6rem',
                    direction: 'rtl',
                    textAlign: 'right',
                  }}
                >
                  رسالة ودعوة حلوة لمصطفى وروان من قلبك
                </label>
                <textarea
                  id="wishes"
                  name="wishes"
                  rows="3"
                  placeholder="اكتب كلمة تهنئة للعروسين تفرح قلبهم..."
                  value={formData.wishes}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-arabic)',
                    color: 'var(--color-text-primary)',
                    direction: 'rtl',
                    textAlign: 'right',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-luxury"
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-arabic)',
                }}
              >
                <MessageCircle size={20} />
                <span>تأكيد الحضور عبر واتساب (WhatsApp)</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
