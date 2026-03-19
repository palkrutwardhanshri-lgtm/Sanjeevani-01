import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function DemoModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        pharmacyName: "",
        phone: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            gsap.fromTo(modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: "power2.out" }
            );
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 60, scale: 0.92 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.15 }
            );
            gsap.fromTo(".demo-form-field",
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, delay: 0.3, ease: "power2.out" }
            );
            gsap.fromTo(".demo-submit-btn",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: 0.6, ease: "power2.out" }
            );
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        gsap.to(formRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => setSubmitted(true)
        });
    };

    const handleClose = () => {
        gsap.to(contentRef.current, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.35,
            ease: "power2.in"
        });
        gsap.to(modalRef.current, {
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: onClose
        });
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto p-2 md:p-4"
            onClick={handleClose}
            style={{
                background: "rgba(10, 17, 3, 0.9)",
                backdropFilter: "blur(12px)",
                paddingTop: "max(10px, 2vh)",
                paddingBottom: "max(10px, 2vh)"
            }}
        >
            {/* Animated background glow */}
            <div style={{
                position: "absolute",
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(183, 194, 94, 0.15) 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(112, 127, 72, 0.2) 0%, transparent 70%)",
                top: "30%",
                left: "20%",
                pointerEvents: "none"
            }} />

            <div
                ref={contentRef}
                className="relative w-full"
                onClick={(e) => e.stopPropagation()}
                style={{
                    maxWidth: "700px",
                    maxHeight: "calc(100vh - 20px)",
                    background: "linear-gradient(160deg, rgba(43, 54, 24, 0.95) 0%, rgba(13, 20, 8, 0.98) 100%)",
                    borderRadius: "24px",
                    border: "1px solid rgba(183, 194, 94, 0.25)",
                    boxShadow: "0 40px 100px rgba(0, 0, 0, 0.6), 0 0 60px rgba(183, 194, 94, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                    overflowY: "auto",
                    margin: "auto 0"
                }}
            >
                {/* Top decorative bar */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, rgba(183, 194, 94, 0.6), transparent)"
                }} />

                <button
                    onClick={handleClose}
                    style={{
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        background: "rgba(244, 237, 230, 0.08)",
                        border: "1px solid rgba(244, 237, 230, 0.12)",
                        borderRadius: "12px",
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(244, 237, 230, 0.6)",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        zIndex: 10
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(244, 237, 230, 0.15)";
                        e.currentTarget.style.color = "#f4ede6";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(244, 237, 230, 0.08)";
                        e.currentTarget.style.color = "rgba(244, 237, 230, 0.6)";
                    }}
                >
                    <i className="ri-close-line" />
                </button>

                <div className="p-4 md:p-6" ref={formRef}>
                    {/* Logo/Brand */}
                    <div className="demo-form-field mb-2">
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px"
                        }}>
                            <div style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "9px",
                                background: "linear-gradient(135deg, #b7c25e 0%, #8E956C 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 15px rgba(183, 194, 94, 0.3)"
                            }}>
                                <i className="ri-medicine-bag-line" style={{ color: "#0a1103", fontSize: "1.1rem" }} />
                            </div>
                            <span style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 800,
                                fontSize: "1rem",
                                color: "#b7c25e",
                                letterSpacing: "0.02em"
                            }}>
                                Sanjeevani
                            </span>
                        </div>
                    </div>

                    <div className="demo-form-field">
                        <h2 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(1.2rem, 3vw, 1.65rem)",
                            color: "#f4ede6",
                            marginBottom: "4px",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2
                        }}>
                            Book Your Free Demo
                        </h2>
                    </div>

                    <div className="demo-form-field">
                        <p style={{
                            color: "rgba(244, 237, 230, 0.55)",
                            fontSize: "0.82rem",
                            marginBottom: "14px",
                            fontFamily: "'Outfit', sans-serif",
                            lineHeight: 1.4
                        }}>
                            See how Sanjeevani can transform your pharmacy. Get a personalized walkthrough with our team.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div className="demo-form-field demo-input-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                            <div>
                                <label style={{
                                    display: "block",
                                    color: "rgba(244, 237, 230, 0.7)",
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "6px",
                                    fontFamily: "'Outfit', sans-serif"
                                }}>Name</label>
                                <input
                                    type="text"
                                    className="demo-input"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{
                                    display: "block",
                                    color: "rgba(244, 237, 230, 0.7)",
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "6px",
                                    fontFamily: "'Outfit', sans-serif"
                                }}>Pharmacy Name</label>
                                <input
                                    type="text"
                                    className="demo-input"
                                    required
                                    value={formData.pharmacyName}
                                    onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="demo-form-field">
                            <label style={{
                                display: "block",
                                color: "rgba(244, 237, 230, 0.7)",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                                fontFamily: "'Outfit', sans-serif"
                            }}>Phone Number</label>
                            <input
                                type="tel"
                                className="demo-input"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="demo-form-field">
                            <label style={{
                                display: "block",
                                color: "rgba(244, 237, 230, 0.7)",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                                fontFamily: "'Outfit', sans-serif"
                            }}>Email</label>
                            <input
                                type="email"
                                className="demo-input"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="demo-form-field">
                            <label style={{
                                display: "block",
                                color: "rgba(244, 237, 230, 0.7)",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                                fontFamily: "'Outfit', sans-serif"
                            }}>Message (Optional)</label>
                            <textarea
                                className="demo-input"
                                rows="2"
                                style={{ resize: "vertical", minHeight: "68px" }}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="demo-submit-btn demo-btn" style={{ marginTop: "4px" }}>
                            <span>Schedule Demo</span>
                            <i className="ri-arrow-right-line" style={{ marginLeft: "8px" }} />
                        </button>
                    </form>

                    <div className="demo-form-field" style={{
                        marginTop: "20px",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(244, 237, 230, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px"
                    }}>
                        <i className="ri-shield-check-line" style={{ color: "rgba(183, 194, 94, 0.6)", fontSize: "0.9rem" }} />
                        <span style={{
                            color: "rgba(244, 237, 230, 0.4)",
                            fontSize: "0.75rem",
                            fontFamily: "'Outfit', sans-serif"
                        }}>
                            No credit card required • Free consultation
                        </span>
                    </div>
                </div>

                {/* Success State */}
                {submitted && (
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px",
                        background: "linear-gradient(160deg, rgba(43, 54, 24, 0.98) 0%, rgba(13, 20, 8, 0.99) 100%)"
                    }}>
                        <div style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(183, 194, 94, 0.2) 0%, rgba(142, 149, 108, 0.1) 100%)",
                            border: "2px solid rgba(183, 194, 94, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "28px",
                            boxShadow: "0 10px 40px rgba(183, 194, 94, 0.2)"
                        }}>
                            <i className="ri-check-line" style={{ fontSize: "2.8rem", color: "#b7c25e" }} />
                        </div>
                        <h2 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 900,
                            fontSize: "1.8rem",
                            color: "#f4ede6",
                            marginBottom: "12px",
                            textAlign: "center"
                        }}>
                            Request Sent!
                        </h2>
                        <p style={{
                            color: "rgba(244, 237, 230, 0.6)",
                            fontSize: "1rem",
                            fontFamily: "'Outfit', sans-serif",
                            textAlign: "center",
                            lineHeight: 1.6,
                            maxWidth: "300px"
                        }}>
                            Thank you for your interest. Our team will reach out to you within 24 hours.
                        </p>
                        <button
                            onClick={handleClose}
                            className="demo-btn"
                            style={{ marginTop: "32px" }}
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                .demo-input {
                    background: rgba(244, 237, 230, 0.05);
                    border: 1px solid rgba(244, 237, 230, 0.12);
                    border-radius: 12px;
                    padding: 10px 14px;
                    color: #f4ede6;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.88rem;
                    width: 100%;
                    transition: all 0.3s ease;
                }
                .demo-input:focus {
                    outline: none;
                    border-color: rgba(183, 194, 94, 0.6);
                    background: rgba(244, 237, 230, 0.08);
                    box-shadow: 0 0 0 3px rgba(183, 194, 94, 0.1);
                }
                .demo-input::placeholder {
                    color: rgba(244, 237, 230, 0.3);
                }
                .demo-btn {
                    background: linear-gradient(135deg, #b7c25e 0%, #9aaa5a 100%);
                    border: none;
                    border-radius: 12px;
                    padding: 12px 24px;
                    color: #0a1103;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 700;
                    font-size: 0.84rem;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                @media (max-width: 900px) {
                    .demo-input {
                        padding: 9px 12px;
                    }
                    .demo-btn {
                        padding: 11px 20px;
                    }
                }
                .demo-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 35px rgba(183, 194, 94, 0.35);
                }
                @media (max-width: 640px) {
                    .demo-input-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
