import React from "react";
import rightImage from "../../assets/image/rightside.png";

export default function VoiceSection() {
    return (
        <section id="sms-voice-section" className="relative w-full h-[100vh] z-30 overflow-hidden bg-[#f4ede6]" style={{ boxShadow: "0 -20px 50px rgba(0,0,0,0.3)" }}>

            {/* Full-screen Image Box (Will be animated to 50% width on the right) */}
            <div className="sv-image-box absolute top-0 right-0 w-full h-full overflow-hidden bg-[#f4ede6]">
                <img
                    src={rightImage}
                    alt="Pharmacy Voice AI Interface"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "brightness(0.95)" }}
                />
            </div>

            {/* Left Box: Content (Starts hidden off-screen to the left) */}
            <div className="sv-content-box absolute top-0 left-0 w-full md:w-1/2 h-full bg-[#f4ede6] flex flex-col justify-center px-8 md:px-[6vw] lg:px-[6vw]">

                <div style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    marginBottom: "30px", opacity: 0.8
                }}>
                    <i className="ri-phone-line" style={{ color: "#4d6628", fontSize: "1.2rem" }} />
                    <span style={{ color: "#4d6628", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Live Voice Agent</span>
                </div>

                <h2 style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#4d6628",
                    margin: "0 0 24px 0", lineHeight: 1.05, letterSpacing: "-0.03em"
                }}>
                    Voice AI for Pharmacy&nbsp;—<br />
                    Just Speak Naturally
                </h2>

                <div style={{ maxWidth: "480px" }}>
                    <p style={{
                        color: "#4d6628", opacity: 0.85, fontSize: "0.95rem",
                        lineHeight: 1.65, fontFamily: "'Outfit', sans-serif", margin: "0 0 16px",
                        fontWeight: 500
                    }}>
                        Just like speaking to a real pharmacist, our Voice AI handles patient calls effortlessly.
                    </p>
                    <p style={{
                        color: "#4d6628", opacity: 0.85, fontSize: "0.95rem",
                        lineHeight: 1.65, fontFamily: "'Outfit', sans-serif", margin: "0 0 32px",
                        fontWeight: 500
                    }}>
                        Patients call your pharmacy, and the AI answers instantly. It listens to their requirements, talks them through the process, verifies their prescriptions, and securely places the order in your system — all over a natural glowing phone conversation. Complete 24/7 care, zero wait times.
                    </p>
                </div>

            </div>

        </section>
    );
}
