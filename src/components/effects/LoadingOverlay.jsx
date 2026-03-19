import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * LoadingOverlay
 *
 * Cream-coloured full-screen overlay with transparent cut-outs:
 *   • 6-petal logo mark above the text (shows dark green page behind)
 *   • "SANJEEVANI" lettering
 *
 * GSAP timeline (self-contained):
 *   0.0s  Mask group scale 0 → 1  (logo + text appear as transparent windows)
 *   0.8s  Gentle counter-rotation settle
 *   1.4s  Slow 10° rotation  +
 *   1.4s  Scale explodes to 10×  →  overlay becomes fully transparent
 *   3.8s  Overlay DOM node removed, onComplete() called
 */
export default function LoadingOverlay({ onComplete }) {
    useEffect(() => {
        /* Set starting state */
        gsap.set('.vi-mask-group', {
            scale: 0, transformOrigin: '50% 50%', opacity: 1,
        });

        const tl = gsap.timeline();

        /* 1 — Logo + text appear (transparent windows scale in) */
        tl.to('.vi-mask-group', {
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.5)',
            transformOrigin: '50% 50%',
        });

        /* 2 — Hold */
        tl.to({}, { duration: 0.6 });

        /* 3 — Slow rotation */
        tl.to('.vi-mask-group', {
            rotate: 10,
            duration: 2,
            ease: 'Power4.easeInOut',
            transformOrigin: '50% 50%',
        });

        /* 4 — Scale explosion (transparent areas engulf the screen) */
        tl.to('.vi-mask-group', {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: 'Expo.easeInOut',
            transformOrigin: '50% 50%',
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    const el = document.querySelector('.svg-overlay');
                    if (el) el.remove();
                    onComplete?.();
                    this.kill();
                }
            },
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className="svg-overlay"
            style={{
                position: 'fixed', top: 0, left: 0,
                width: '100%', height: '100vh',
                zIndex: 200, overflow: 'hidden',
                pointerEvents: 'all',
            }}
        >
            <svg
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: '100%', height: '100%', display: 'block' }}
            >
                <defs>
                    <mask id="rxMask">
                        {/* White = opaque cream | Black = transparent (shows page) */}
                        <rect width="100%" height="100%" fill="white" />

                        <g className="vi-mask-group">
                            {/* ── 6-petal logo mark (centred, transparent) ── */}
                            <g transform="translate(400, 175)">
                                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                    <path
                                        key={i}
                                        /* Petal: base at origin, tip radiates outward */
                                        d="M0 0 C 16 -9, 20 -34, 0 -50 C -20 -34, -16 -9, 0 0 Z"
                                        transform={`rotate(${deg})`}
                                        fill="black"
                                    />
                                ))}
                                {/* Centre dot */}
                                <circle cx="0" cy="0" r="5" fill="black" />
                            </g>

                            {/* ── SANJEEVANI ── */}
                            <text
                                x="50%" y="295"
                                fontSize="88"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontFamily="'Outfit', sans-serif"
                                fontWeight="900"
                                letterSpacing="3"
                                fill="black"
                            >
                                SANJEEVANI
                            </text>
                        </g>
                    </mask>
                </defs>

                {/* Cream fill masked by the transparent logo + text cut-outs */}
                <rect width="100%" height="100%" fill="#f0ede6" mask="url(#rxMask)" />
            </svg>
        </div>
    );
}
