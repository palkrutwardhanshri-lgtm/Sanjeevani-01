/**
 * FooterSection — Final page (Page 7)
 * Matches the CropTab/Farm Minerals reference:
 *  • Cream background
 *  • Column nav grid (left) + contact (right)
 *  • Large 3D logo centered at bottom
 *  • Copyright + LinkedIn bottom bar
 */
import Logo3DFooter from "../effects/Logo3DFooter";

const NAV_COLS = [
    {
        heading: "Features",
        links: [
            { name: "WhatsApp Orders", href: "#whatsapp-section" },
            { name: "Telegram Orders", href: "#whatsapp-section" },
            { name: "Voice AI", href: "#sms-voice-section" },
            { name: "Prescription Verification", href: "#delivery-section" },
        ],
    },
    {
        heading: "Platform",
        links: [
            { name: "Pharmacist Dashboard", href: "#dashboard-section" },
            { name: "Delivery Module", href: "#delivery-section" },
            { name: "Analytics", href: "#dashboard-section" },
            { name: "Inventory", href: "#features-section" },
        ],
    },
    {
        heading: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Contact", href: "#footer-section" },
        ],
    },
];

const TEXT = {
    fontFamily: "'Outfit', sans-serif",
    color: "#2d3d1a",
};

export default function FooterSection() {
    return (
        <section id="footer-section" style={{
            background: "#ede9df",
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>

            {/* ── Top bar: thin line ── */}
            <div style={{ borderTop: "1px solid rgba(45,61,26,0.15)" }} />

            {/* ── Nav + Contact grid ── */}
            <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] gap-10 px-6 py-12 md:px-[6vw] md:pt-[64px] md:pb-[48px]">

                {/* Nav columns */}
                {NAV_COLS.map(col => (
                    <div key={col.heading} className="footer-anim" style={{ position: "relative", zIndex: 10 }}>
                        <p style={{ ...TEXT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 18px", opacity: 0.5 }}>{col.heading}</p>
                        {col.links.map(link => (
                            <a key={link.name} href={link.href} style={{
                                ...TEXT, display: "block", fontSize: "0.85rem", fontWeight: 500,
                                textDecoration: "none", marginBottom: "10px", opacity: 0.75,
                                transition: "opacity 0.2s",
                            }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
                            >{link.name}</a>
                        ))}
                    </div>
                ))}

                {/* Right: Contact */}
                <div className="footer-anim text-left lg:text-right" style={{ position: "relative", zIndex: 10 }}>
                    <p style={{ ...TEXT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 12px", lineHeight: 1.6 }}>
                        IF YOU HAVE ANY QUESTIONS<br />FEEL FREE TO CONTACT US:
                    </p>
                    <a href="mailto:samaypowade1@gmail.com" style={{
                        ...TEXT, fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)", fontWeight: 700, textDecoration: "none",
                        display: "block", marginBottom: "28px", transition: "opacity 0.2s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 0.65}
                        onMouseLeave={e => e.currentTarget.style.opacity = 1}
                    >
                        samaypowade1@gmail.com
                    </a>

                    <a href="https://www.linkedin.com/in/samay-p-103259269/" target="_blank" rel="noreferrer" style={{ ...TEXT, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", opacity: 0.55, transition: "opacity 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 1}
                        onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                    >
                        LINKEDIN
                    </a>
                </div>
            </div>

            {/* ── Logo center ── */}
            <div className="footer-anim" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0", marginTop: "-60px", position: "relative", zIndex: 10, pointerEvents: "auto" }}>
                <Logo3DFooter
                    color="#2d3d1a"         // Deep moss green
                    highlightColor="#b7c25e" // Bright vibrant green glint
                    style={{
                        top: "-130px",
                        position: 'relative',
                        width: '550px',
                        height: '550px',
                    }}
                />
            </div>

            {/* ── Bottom bar ── */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-[#2d3d1a]/20 px-6 py-5 md:px-[6vw] relative z-10">
                <p style={{ ...TEXT, fontSize: "0.65rem", opacity: 0.45, margin: 0 }}>© 2025 Sanjeevani Inc.</p>
                <p style={{ ...TEXT, fontSize: "0.65rem", opacity: 0.45, margin: 0 }}>TERMS OF USE</p>
            </div>
        </section >
    );
}
