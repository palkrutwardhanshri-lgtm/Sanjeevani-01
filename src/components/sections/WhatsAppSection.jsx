import React from "react";
import videoSrc from "../../assets/video/video.mp4";

const WA_CHANNELS = [
    { name: "WhatsApp", icon: "ri-whatsapp-line", color: "#25D366", bg: "rgba(37,211,102,0.15)", border: "rgba(37,211,102,0.3)" },
    { name: "Telegram", icon: "ri-telegram-line", color: "#29B6F6", bg: "rgba(41,182,246,0.15)", border: "rgba(41,182,246,0.3)" },
    // { name: "Voice Call", icon: "ri-phone-line", color: "#607a30", bg: "rgba(96,122,48,0.15)", border: "rgba(96,122,48,0.3)" },
];

const WA_FEATURES = [
    { icon: "ri-robot-2-line", text: "AI intent & language processing" },
    { icon: "ri-shield-check-line", text: "Auto prescription verification" },
    { icon: "ri-map-pin-2-line", text: "Real-time delivery tracking" },
    { icon: "ri-notification-3-line", text: "Proactive refill reminders" },
];

export default function WhatsAppSection() {
    return (
        <section id="whatsapp-section" className="relative w-full h-[100vh] z-30 overflow-hidden bg-black" style={{ boxShadow: "0 -20px 50px rgba(0,0,0,0.3)" }}>
            {/* Full-screen Video Box (Will be animated to 50% width) */}
            <div className="wa-video-box absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={videoSrc}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "brightness(0.9)" }}
                />
            </div>

            {/* Right Box: Content (Light color theme, starts hidden off-screen to the right) */}
            <div className="wa-content-box absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#f4ede6] flex flex-col justify-center px-8 md:px-[6vw] lg:px-[6vw]">
                {/* Title */}
                <h2 className="font-['Outfit'] font-[900] text-[clamp(2rem,3vw,3.2rem)] text-[#4d6628] mb-5 leading-[1.05] tracking-tight">
                    Order medicines<br />
                    <span className="font-serif italic font-[400] text-[#7a9947]">in a single message.</span>
                </h2>

                <p className="text-[#4d6628] opacity-80 text-[0.95rem] leading-[1.65] font-['Outfit'] max-w-[480px] mb-8 font-[500]">
                    Patients simply message the pharmacy on WhatsApp or Telegram. The AI
                    understands their request, verifies prescriptions, confirms the order,
                    and sends real-time updates — all within the chat.
                </p>

                {/* Channel Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-10">
                    {WA_CHANNELS.map(c => (
                        <div key={c.name} className="flex items-center gap-2 px-3 py-1 rounded-[14px] border border-solid" style={{ backgroundColor: c.bg, borderColor: c.border }}>
                            <i className={`${c.icon} text-[1rem]`} style={{ color: c.color }} />
                            <span className="font-['Outfit'] font-[700] text-[0.75rem] tracking-wide" style={{ color: c.color }}>{c.name}</span>
                        </div>
                    ))}
                </div>

                {/* Feature list */}
                <div className="flex flex-col gap-4">
                    {WA_FEATURES.map(f => (
                        <div key={f.text} className="flex items-center gap-4">
                            <div className="w-[36px] h-[36px] rounded-[10px] shrink-0 bg-[#4d6628]/5 border border-[#4d6628]/20 flex items-center justify-center">
                                <i className={`${f.icon} text-[#4d6628] opacity-80 text-[1.1rem]`} />
                            </div>
                            <span className="text-[#4d6628] opacity-90 text-[0.9rem] font-['Outfit'] font-[600] tracking-wide">{f.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
