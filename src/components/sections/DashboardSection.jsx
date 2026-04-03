/**
 * DashboardSection — Page 5
 * Pharmacist command dashboard — rendered via the exact visual image you requested.
 */
import React from 'react';
import backgroundImage from "../../assets/image/imagebackgrouns.png";
import dashboardImage from "../../assets/image/image copy 3.png";

const QUICK_STATS = [
    { icon: "ri-whatsapp-line", label: "WhatsApp Orders", value: "142", color: "#25D366" },
    { icon: "ri-telegram-line", label: "Telegram Orders", value: "89", color: "#b7c25e" },
    { icon: "ri-phone-line", label: "Voice Orders", value: "53", color: "#7dcf50" },
];

export default function DashboardSection() {
    return (
        <section id="dashboard-section" style={{
            background: `linear-gradient(180deg, rgba(30,45,15,0.2) 0%, rgba(15,25,8,0.45) 100%), url(${backgroundImage}) center top no-repeat`,
            backgroundAttachment: "scroll",
            backgroundSize: "100% auto",
            minHeight: "100vh",
            padding: "15vh 6vw 10vh",
            display: "flex",
            flexDirection: "column",
            gap: "80px",
        }}>

            {/* ── Header ── */}
            <div className="dash-anim">
                <p style={{ color: "#b7c25e", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 10px" }}>
                    Pharmacy Command Centre
                </p>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3.4rem)", color: "#f4ede6", margin: "0 0 10px", lineHeight: 1.05 }}>
                    Your patients order via chat —
                    <br />
                    <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0" }}>you manage it all here.</span>
                </h2>
            </div>

            {/* ── Channel Quick Stats ── */}
            <div className="dash-anim" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "-40px" }}>
                {QUICK_STATS.map(s => (
                    <div key={s.label} style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        background: `${s.color}0D`,
                        border: `1px solid ${s.color}25`,
                        borderRadius: "12px", padding: "10px 18px",
                    }}>
                        <i className={s.icon} style={{ color: s.color, fontSize: "1.1rem" }} />
                        <div>
                            <div style={{ color: s.color, fontWeight: 800, fontSize: "1.05rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{s.value}</div>
                            <div style={{ color: "#f4ede6", opacity: 0.5, fontSize: "0.6rem", fontFamily: "'Outfit', sans-serif", marginTop: "2px", letterSpacing: "0.05em" }}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Dashboard Image Wrapper ── */}
            <div className="dash-anim" style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(183,194,94,0.1)",
                display: "flex",
                justifyContent: "center",
                background: "#f8f9fa",
                width: "100%",
                marginTop: "20px"
            }}>
                <img 
                    src={dashboardImage} 
                    alt="Sanjeevani Dashboard UI Screenshot" 
                    style={{ width: "100%", height: "auto", display: "block" }} 
                />
            </div>
        </section>
    );
}