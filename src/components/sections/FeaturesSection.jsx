import React from "react";
import PhoneMockup from "./PhoneMockup";
import bgImage from "../../assets/image/bg_green.png";

/**
 * FeaturesSection — LAYER 2 (z-[60])
 * Revealed when the cube curtain opens on scroll.
 * Starts hidden (opacity 0, pointerEvents none) — GSAP animates it in.
 * Contains:
 *  • Left copy (headline, description, step pills)
 *  • Right PhoneMockup (phone frame + floating channel badges)
 */
export default function FeaturesSection() {
    return (
        <div
            id="features-section"
            className="features-inner absolute inset-0 z-[60] flex items-center justify-center overflow-hidden"
            style={{
                opacity: 0,
                transform: 'translateY(20px)',
                pointerEvents: 'none',
                background: 'linear-gradient(to bottom, #2b3618 0%, #667440 40%, #707F48 75%, #8E956C 100%)',
            }}
        >
            {/* BG image overlay matching the main page */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.18, mixBlendMode: 'luminosity',
            }} />
            {/* Green glow orb — centre */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw', height: '60vw',
                background: 'radial-gradient(ellipse at center, rgba(140,180,70,0.28) 0%, rgba(100,140,45,0.12) 45%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            {/* Secondary glow lower-right */}
            <div style={{
                position: 'absolute', top: '65%', left: '62%',
                transform: 'translate(-50%, -50%)',
                width: '40vw', height: '40vw',
                background: 'radial-gradient(ellipse at center, rgba(170,210,80,0.20) 0%, transparent 65%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-10">

                {/* ── Left Copy ── */}
                <div className="text-left space-y-6">
                    <p style={{
                        color: '#f4ede6', fontSize: '0.7rem', fontWeight: 700,
                        letterSpacing: '0.18em', textTransform: 'uppercase',
                        margin: 0, fontFamily: "'Outfit', sans-serif", opacity: 0.72,
                    }}>PHARMA, REINVENTED.</p>

                    {/* Brand name */}
                    <div style={{ margin: '6px 0 2px' }}>
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            color: '#b7c25e', letterSpacing: '0.04em',
                        }}>Sanjeevani</span>
                        <sup style={{ fontSize: '0.5em', color: '#b7c25e', opacity: 0.7, marginLeft: '2px', verticalAlign: 'super' }}>™</sup>
                    </div>

                    <h2 style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                        fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                        color: '#f4ede6', margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em',
                    }}>
                        Pharmacy Care<br />
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: 'italic', fontWeight: 700, color: '#c8dfa0' }}>
                            Through Conversation
                        </span>
                    </h2>

                    <p style={{
                        color: '#f4ede6', opacity: 0.75, fontSize: '1rem', fontWeight: 400,
                        lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", maxWidth: '460px', margin: 0,
                    }}>
                        Patients simply message the pharmacy on WhatsApp or Telegram. The AI understands their request, verifies prescriptions, confirms the order, and sends real-time updates — all within the chat.
                    </p>

                    {/* Step pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', paddingTop: '8px' }}>
                        {[
                            { label: 'Speak or Message', icon: 'ri-message-3-line' },
                            { label: 'AI Verifies', icon: 'ri-shield-check-line' },
                            { label: 'Order Completed', icon: 'ri-check-double-line' },
                        ].map((step, idx, arr) => (
                            <React.Fragment key={step.label}>
                                <span style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '8px 16px',
                                    background: 'rgba(244,237,230,0.10)',
                                    border: '1px solid rgba(244,237,230,0.22)',
                                    color: '#f4ede6', borderRadius: '999px',
                                    fontSize: '0.78rem', fontWeight: 600,
                                    backdropFilter: 'blur(8px)', letterSpacing: '0.03em',
                                }}>
                                    <i className={step.icon} style={{ fontSize: '0.9rem', opacity: 0.85 }} />
                                    {step.label}
                                </span>
                                {idx < arr.length - 1 && (
                                    <i className="ri-arrow-right-line" style={{ color: '#f4ede6', opacity: 0.4, fontSize: '0.85rem' }} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* ── Right: Phone Mockup ── */}
                <PhoneMockup />

            </div>
        </div>
    );
}
