import React from 'react';
import dashboardMap from '../../assets/image/dashboard_map.png';
import dashboardSummary from '../../assets/image/dashboard_summary.png';

const phoneMockupStyle = {
    width: "320px",
    height: "650px",
    border: "10px solid #2d3d1a",
    borderRadius: "44px",
    background: "#0c1405",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.05)",
    flexShrink: 0
};

const notchStyle = {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "110px",
    height: "26px",
    background: "#2d3d1a",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    zIndex: 20
};

export default function DeliverySection() {
    return (
        <section id="delivery-section" style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #1a2a0a 0%, #0a1103 100%)",
            padding: "100px 6vw 120px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden"
        }}>
            {/* Header */}
            <div className="delivery-anim" style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px" }}>
                <p style={{ color: "#b7c25e", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 16px" }}>
                    Native Android Apps
                </p>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f4ede6", margin: "0 0 24px", lineHeight: 1.05 }}>
                    Pharmacist & Rider <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0", display: "inline-block" }}>in perfect sync.</span>
                </h2>
                <p style={{ color: "#f4ede6", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", margin: "0 auto" }}>
                    Manage prescriptions, assign deliveries, and track real-time routes seamlessly through our modern, dedicated mobile applications designed for your pharmacy team.
                </p>
            </div>

            {/* Mobile App Mockups Container */}
            <div className="delivery-anim" style={{ display: "flex", gap: "6vw", flexWrap: "wrap", justifyContent: "center", width: "100%", alignItems: "center" }}>

                {/* ── Pharmacist App Mockup ── */}
                <div style={{ ...phoneMockupStyle, transform: "rotate(-2deg) translateY(-10px)", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) translateY(-20px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "rotate(-2deg) translateY(-10px)"}>
                    <div style={notchStyle} />
                    <img 
                        src={dashboardSummary} 
                        alt="Pharmacist Dashboard Summary" 
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                </div>

                {/* ── Delivery Rider App Mockup ── */}
                <div style={{ ...phoneMockupStyle, border: "10px solid #f4ede6", background: "#f4ede6", transform: "rotate(3deg) translateY(20px)", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) translateY(0px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "rotate(3deg) translateY(20px)"}>
                    <div style={{ ...notchStyle, background: "#0c1405" }} />
                    <img 
                        src={dashboardMap} 
                        alt="Rider Live Map View" 
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                </div>

            </div>
        </section>
    );
}
