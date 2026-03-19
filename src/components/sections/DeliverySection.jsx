import React from "react";

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
                    <div style={{ padding: "44px 20px 20px", height: "100%", display: "flex", flexDirection: "column", background: "#0c1405" }}>
                        {/* Top Bar */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                            <div>
                                <h3 style={{ color: "#f4ede6", fontSize: "1.1rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>Sanjeevani</h3>
                                <p style={{ color: "#b7c25e", fontSize: "0.7rem", margin: "2px 0 0", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Pharmacy Manager</p>
                            </div>
                            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(183,194,94,0.12)", border: "1px solid rgba(183,194,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <i className="ri-store-2-line" style={{ color: "#b7c25e", fontSize: "1.2rem" }} />
                            </div>
                        </div>

                        {/* Summary Widget */}
                        <div style={{ background: "rgba(244,237,230,0.04)", border: "1px solid rgba(244,237,230,0.08)", borderRadius: "20px", padding: "18px", marginBottom: "20px" }}>
                            <div style={{ color: "#f4ede6", fontSize: "0.75rem", opacity: 0.7, marginBottom: "8px", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Unassigned Orders</div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                                <div style={{ fontSize: "2rem", color: "#f4ede6", fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>12</div>
                                <div style={{ fontSize: "0.85rem", color: "#b7c25e", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Ready to dispatch</div>
                            </div>
                        </div>

                        <div style={{ color: "#f4ede6", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: "14px", opacity: 0.9 }}>Pending Shipments</div>

                        {/* Analytics Chart Widget */}
                        <div style={{ background: "rgba(244,237,230,0.02)", border: "1px solid rgba(244,237,230,0.06)", borderRadius: "16px", padding: "16px", marginBottom: "20px" }}>
                            <div style={{ color: "#f4ede6", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: "4px" }}>Order Volume</div>
                            <div style={{ color: "#b7c25e", fontSize: "0.65rem", fontFamily: "'Outfit', sans-serif", marginBottom: "16px" }}>+14% vs last week</div>

                            {/* CSS Bar Chart */}
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "80px", borderBottom: "1px solid rgba(244,237,230,0.1)", paddingBottom: "4px" }}>
                                {[40, 65, 45, 80, 50, 90, 75].map((h, i) => (
                                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                                        <div style={{ width: "100%", height: `${h}%`, background: i === 6 ? "#b7c25e" : "rgba(183,194,94,0.3)", borderRadius: "4px" }} />
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", color: "rgba(244,237,230,0.4)", fontSize: "0.55rem", fontFamily: "'Outfit', sans-serif" }}>
                                <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                            </div>
                        </div>

                        {/* Recent Incoming Orders Widget */}
                        <div style={{ color: "#f4ede6", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: "12px", opacity: 0.9 }}>Incoming (WhatsApp)</div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", overflowY: "auto", scrollbarWidth: "none" }}>
                            {[
                                { id: "RX488", name: "Sunil V.", time: "2 min ago", amount: "₹450" },
                                { id: "RX487", name: "Priya M.", time: "12 min ago", amount: "₹1,200" }
                            ].map((order, i) => (
                                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(244,237,230,0.02)", border: "1px solid rgba(244,237,230,0.06)", borderRadius: "14px", padding: "12px" }}>
                                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(37,211,102,0.1)", color: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <i className="ri-whatsapp-fill" style={{ fontSize: "1.1rem" }} />
                                        </div>
                                        <div>
                                            <div style={{ color: "#f4ede6", fontSize: "0.8rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>{order.name}</div>
                                            <div style={{ color: "rgba(244,237,230,0.5)", fontSize: "0.6rem", fontFamily: "'Outfit', sans-serif" }}>#{order.id} • {order.time}</div>
                                        </div>
                                    </div>
                                    <div style={{ color: "#b7c25e", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>{order.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Delivery Rider App Mockup ── */}
                <div style={{ ...phoneMockupStyle, border: "10px solid #f4ede6", background: "#f4ede6", transform: "rotate(3deg) translateY(20px)", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg) translateY(0px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "rotate(3deg) translateY(20px)"}>
                    <div style={{ ...notchStyle, background: "#f4ede6" }} />
                    <div style={{ padding: "0", height: "100%", display: "flex", flexDirection: "column", background: "#f4ede6" }}>

                        {/* Top Bar over Map */}
                        <div style={{ padding: "44px 20px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f4ede6", zIndex: 10, borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                            <div>
                                <h3 style={{ color: "#1a2a0a", fontSize: "1.1rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>Driver Mode</h3>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7dcf50", boxShadow: "0 0 8px #7dcf50" }} />
                                    <p style={{ color: "#4d6628", fontSize: "0.75rem", margin: 0, fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Online & Routing</p>
                                </div>
                            </div>
                            <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#1a2a0a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                                <i className="ri-e-bike-line" style={{ color: "#b7c25e", fontSize: "1.3rem" }} />
                            </div>
                        </div>

                        {/* Interactive Fake Map */}
                        <div style={{ flex: 1, background: "#e0d8cd", position: "relative", overflow: "hidden" }}>
                            {/* Grid / Roads Pattern */}
                            <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.25 }}>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4d6628" strokeWidth="1.5" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                                {/* Fake animated route line */}
                                <path d="M 120,240 Q 150,150 120,100 T 220,50" fill="none" stroke="#7dcf50" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10" />
                                <path d="M 120,240 Q 150,150 120,100 T 220,50" fill="none" stroke="#1a2a0a" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10" strokeDashoffset="20" opacity="0.4" />
                            </svg>

                            {/* Map UI Elements */}
                            <div style={{ position: "absolute", top: "20px", left: "20px", background: "white", padding: "8px 12px", borderRadius: "99px", display: "flex", gap: "6px", alignItems: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                                <i className="ri-time-line" style={{ color: "#1a2a0a" }} />
                                <span style={{ color: "#1a2a0a", fontSize: "0.75rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>ETA 14 mins</span>
                            </div>

                            {/* Rider Pin */}
                            <div style={{ position: "absolute", top: "220px", left: "105px", width: "32px", height: "32px", background: "#1a2a0a", borderRadius: "50%", border: "4px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.25)", zIndex: 10 }}>
                                <i className="ri-navigation-fill" style={{ color: "#b7c25e", fontSize: "0.9rem", transform: "rotate(35deg) translateY(-1px)" }} />
                            </div>

                            {/* Dest Pin */}
                            <div style={{ position: "absolute", top: "4px", left: "196px", color: "#ff6b6b", fontSize: "2.5rem", textShadow: "0 4px 10px rgba(255,107,107,0.4)" }}>
                                <i className="ri-map-pin-2-fill" />
                            </div>
                        </div>

                        {/* Bottom Sheet UI */}
                        <div style={{ background: "#ffffff", padding: "24px 20px 30px", borderTopLeftRadius: "28px", borderTopRightRadius: "28px", boxShadow: "0 -15px 40px rgba(0,0,0,0.12)", position: "relative", zIndex: 10, marginTop: "-20px" }}>
                            <div style={{ width: "40px", height: "4px", background: "#e8dfd5", borderRadius: "4px", margin: "0 auto 24px" }} />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "20px" }}>
                                <div>
                                    <div style={{ color: "#6b7a49", fontSize: "0.7rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: "6px", letterSpacing: "0.05em" }}>DELIVERING TO</div>
                                    <div style={{ color: "#1a2a0a", fontSize: "1.3rem", fontWeight: 900, fontFamily: "'Outfit', sans-serif" }}>Ramesh K.</div>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <div style={{ color: "#1a2a0a", fontSize: "1.3rem", fontWeight: 900, fontFamily: "'Outfit', sans-serif" }}>8 min</div>
                                    <div style={{ color: "#6b7a49", fontSize: "0.75rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif", marginTop: "2px" }}>2.4 km remaining</div>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                                <button style={{ flex: 1, background: "rgba(107,122,73,0.08)", color: "#1a2a0a", border: "1px solid rgba(107,122,73,0.15)", padding: "12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                                    <i className="ri-phone-fill" style={{ color: "#4d6628" }} /> Call
                                </button>
                                <button style={{ flex: 1, background: "rgba(107,122,73,0.08)", color: "#1a2a0a", border: "1px solid rgba(107,122,73,0.15)", padding: "12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                                    <i className="ri-message-2-fill" style={{ color: "#4d6628" }} /> Message
                                </button>
                            </div>

                            {/* Swipe to deliver fake btn */}
                            <div style={{ width: "100%", background: "#7dcf50", borderRadius: "99px", padding: "6px", display: "flex", alignItems: "center", cursor: "pointer", boxShadow: "0 4px 15px rgba(125,207,80,0.3)" }}>
                                <div style={{ width: "48px", height: "48px", background: "#ffffff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                                    <i className="ri-arrow-right-double-line" style={{ color: "#7dcf50", fontSize: "1.5rem" }} />
                                </div>
                                <span style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginLeft: "30px", letterSpacing: "0.02em" }}>Swipe to Complete</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
