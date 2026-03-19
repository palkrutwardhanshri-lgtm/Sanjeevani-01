import React from "react";
import DashboardSection from "./DashboardSection";

export default function MaskScrollSection() {
    return (
        <section id="mask-scroll-section" className="relative w-full min-h-screen overflow-hidden bg-[#f4ede6]">
            {/* Revealed Content: DASHBOARD SECTION! */}
            <div className="ms-bg-image relative w-full z-0">
                <DashboardSection />
            </div>

            {/* SVG Mask Layer - Absolute to just the top 100vh */}
            <svg className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none text-[#f4ede6]">
                <defs>
                    <mask id="rxaiMask">
                        <rect width="100%" height="100%" fill="white" />
                        <g style={{ transform: "translate(50vw, 50vh)" }}>
                            <g className="ms-mask-group" style={{ transformOrigin: "center center" }}>
                                {/* 6-petal logo mark. Needs to be centered at 0,0 for scaling */}
                                <g transform="scale(0.8)">
                                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                        <path
                                            key={i}
                                            d="M0 0 C 16 -9, 20 -34, 0 -50 C -20 -34, -16 -9, 0 0 Z"
                                            transform={`rotate(${deg})`}
                                            fill="black"
                                        />
                                    ))}
                                    <circle cx="0" cy="0" r="5" fill="black" />
                                </g>
                            </g>
                        </g>
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="currentColor" mask="url(#rxaiMask)" />
            </svg>

            {/* Scrolling Text Layer with top and bottom borders */}
            <div
                className="ms-text-container absolute top-[50vh] left-[50vw] flex items-center z-20 pointer-events-none"
                style={{ width: "216vw" }}
            >
                <div
                    className="flex w-full items-center"
                    style={{
                        borderTop: "3px solid rgba(107, 122, 73, 0.3)",
                        borderBottom: "3px solid rgba(107, 122, 73, 0.3)",
                        padding: "1rem 0"
                    }}
                >
                    <span
                        className="w-[100vw] text-right pr-[8vw] font-outfit whitespace-nowrap text-[#6B7A49]"
                        style={{ fontSize: "5vw", fontWeight: 700 }}
                    >
                        For Better Pharmacies. For Healthier
                    </span>

                    {/* Visual Solid Logo perfectly sitting in the gap */}
                    <div className="w-[16vw] flex justify-center items-center">
                        <svg width="60" height="60" viewBox="-60 -60 120 120" className="text-[#6B7A49]">
                            {/* Same 6-petal logic as mask hole */}
                            <g transform="scale(0.8)">
                                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                    <path
                                        key={i}
                                        d="M0 0 C 16 -9, 20 -34, 0 -50 C -20 -34, -16 -9, 0 0 Z"
                                        transform={`rotate(${deg})`}
                                        fill="currentColor"
                                    />
                                ))}
                                <circle cx="0" cy="0" r="5" fill="currentColor" />
                            </g>
                        </svg>
                    </div>

                    <span
                        className="w-[100vw] text-left pl-[8vw] font-outfit whitespace-nowrap text-[#6B7A49]"
                        style={{ fontSize: "5vw", fontWeight: 700 }}
                    >
                        Patients.
                    </span>
                </div>
            </div>
        </section>
    );
}
