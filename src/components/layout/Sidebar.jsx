import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Sidebar — slide-in navigation panel
 * Matches the CropTab-style menu:
 *  • "CLOSE" — plain text, top-left, no icon
 *  • Nav links — light weight (300), moderate size, no icons
 *  • Footer — tagline + email left, plain-text social links right
 */
export default function Sidebar({ isOpen, onClose }) {
    const panelRef = useRef(null);
    const itemsRef = useRef([]);
    const footerRef = useRef(null);
    const navLinks = [
        { label: "Home", href: "#" },
        { label: "Features", href: "#features-section" },
        { label: "Ordering", href: "#whatsapp-section" },
        { label: "Voice", href: "#sms-voice-section" },
        { label: "Dashboard", href: "#dashboard-section" },
        { label: "Delivery", href: "#delivery-section" },
        { label: "Contact", href: "#footer-section" },
    ];

    /* ── GSAP open / close ── */
    useEffect(() => {
        const panel = panelRef.current;
        const items = itemsRef.current.filter(Boolean);
        const footer = footerRef.current;

        if (isOpen) {
            gsap.fromTo(panel, { x: "-100%" }, { x: "0%", duration: 0.65, ease: "expo.out" });
            gsap.fromTo(items, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, delay: 0.22, ease: "power3.out" });
            gsap.fromTo(footer, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.52, ease: "power2.out" });
        } else {
            gsap.to(items, { y: 24, opacity: 0, stagger: 0.04, duration: 0.28, ease: "power2.in" });
            gsap.to(panel, { x: "-100%", duration: 0.5, delay: 0.12, ease: "expo.in" });
        }
    }, [isOpen]);

    const linkBase = {
        color: "#f4ede6", opacity: 0.7,
        fontSize: "0.65rem", fontWeight: 700,
        letterSpacing: "0.16em", textTransform: "uppercase",
        textDecoration: "none", fontFamily: "'Outfit', sans-serif",
        transition: "opacity 0.2s",
        cursor: "pointer", background: "none", border: "none", padding: 0,
    };

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed", inset: 0,
                    background: "rgba(0,0,0,0.40)",
                    zIndex: 198,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transition: "opacity 0.4s ease",
                }}
            />

            {/* Panel */}
            <div
                ref={panelRef}
                style={{
                    position: "fixed", top: 0, left: 0,
                    width: "min(480px, 48vw)", height: "100vh",
                    background: "linear-gradient(170deg, #1c2b0d 0%, #2d3d1a 45%, #374c1e 100%)",
                    zIndex: 199,
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                    padding: "28px 52px 38px",
                    transform: "translateX(-100%)",
                    boxShadow: "10px 0 50px rgba(0,0,0,0.55)",
                    overflowY: "auto",
                }}
            >
                <div>
                    {/* CLOSE */}
                    <button
                        onClick={onClose}
                        style={{ ...linkBase, marginBottom: "60px", display: "block" }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 1}
                        onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
                    >
                        CLOSE
                    </button>

                    {/* Nav links */}
                    <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {navLinks.map((link, i) => (
                            <a
                                key={link.label}
                                href={link.href}
                                ref={el => (itemsRef.current[i] = el)}
                                onClick={onClose}
                                style={{
                                    display: "block",
                                    color: "#f4ede6",
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                                    lineHeight: 1.2, letterSpacing: "0.02em",
                                    textDecoration: "none",
                                    paddingTop: "14px", paddingBottom: "14px",
                                    borderBottom: "1px solid rgba(244,237,230,0.08)",
                                    opacity: 0,
                                    transition: "color 0.22s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = "#b7c25e"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "#f4ede6"; }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Footer */}
                <div ref={footerRef} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", opacity: 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <span style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>
                            Pharma, Reinvented.
                        </span>
                        <a
                            href="mailto:hello@sanjeevanirxai.com"
                            style={{ color: "#f4ede6", opacity: 0.65, fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", fontFamily: "'Outfit', sans-serif", transition: "opacity 0.2s" }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 1}
                            onMouseLeave={e => e.currentTarget.style.opacity = 0.65}
                        >
                            hello@sanjeevanirxai.com
                        </a>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "7px" }}>
                        {["LinkedIn", "WhatsApp"].map(name => (
                            <a key={name} href="#"
                                style={{ ...linkBase, opacity: 0.6 }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
