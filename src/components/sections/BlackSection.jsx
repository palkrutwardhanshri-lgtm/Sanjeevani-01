import React from "react";

const MedicalGraphic = ({ filled }) => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <g
            stroke={filled ? "none" : "#4d6628"}
            fill={filled ? "#4d6628" : "none"}
            strokeWidth={filled ? "0" : "1"}
        >
            {/* Medical Cross */}
            <path d="M85 45 h30 v30 h30 v30 h-30 v30 h-30 v-30 h-30 v-30 h30 z" strokeLinejoin="round" />

            {/* Left Laurel Branch */}
            <path d="M100 180 C 40 180 20 120 20 80 C 20 60 30 40 45 25" strokeLinecap="round" strokeWidth={filled ? "0" : "2"} fill="none" />
            {/* Leaves Left */}
            <path d="M20 80 C 10 70 10 50 25 45 C 30 60 25 70 20 80 Z" />
            <path d="M25 100 C 10 90 5 70 15 65 C 25 80 25 90 25 100 Z" />
            <path d="M35 120 C 15 110 10 90 20 85 C 35 100 35 110 35 120 Z" />
            <path d="M50 140 C 30 130 20 110 30 105 C 45 125 50 135 50 140 Z" />
            <path d="M70 160 C 50 150 40 130 50 125 C 65 145 70 155 70 160 Z" />

            {/* Right Laurel Branch */}
            <path d="M100 180 C 160 180 180 120 180 80 C 180 60 170 40 155 25" strokeLinecap="round" strokeWidth={filled ? "0" : "2"} fill="none" />
            {/* Leaves Right */}
            <path d="M180 80 C 190 70 190 50 175 45 C 170 60 175 70 180 80 Z" />
            <path d="M175 100 C 190 90 195 70 185 65 C 175 80 175 90 175 100 Z" />
            <path d="M165 120 C 185 110 190 90 180 85 C 165 100 165 110 165 120 Z" />
            <path d="M150 140 C 170 130 180 110 170 105 C 155 125 150 135 150 140 Z" />
            <path d="M130 160 C 150 150 160 130 150 125 C 135 145 130 155 130 160 Z" />

            {/* Decorative base ground leaves */}
            <path d="M85 180 C 80 165 70 160 60 170 C 70 185 80 185 85 180 Z" />
            <path d="M115 180 C 120 165 130 160 140 170 C 130 185 120 185 115 180 Z" />
        </g>
    </svg>
);

export default function BlackSection() {
    return (
        <section
            id="black-medical-section"
            className="w-full relative h-[100vh] overflow-hidden bg-[#f4ede6]"
        >
            {/* Background column dividers visibly matching the exact grid pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="w-full h-full flex divide-x divide-[#4d6628] divide-dashed md:divide-solid">
                    {[...Array(6)].map((_, i) => <div key={i} className="flex-1 w-full h-full border-[#4d6628]" />)}
                </div>
            </div>

            {/* Top/Bottom border lines framing the illustration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#4d6628] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4d6628] opacity-40 pointer-events-none" />

            {/* Main content grid identical to the image layout */}
            <div className="relative z-10 w-full h-full max-w-[1700px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center">

                {/* Left Text (Top aligned) */}
                <div className="flex flex-col justify-start h-full pt-[30vh]">
                    <h2 className="text-[2.5rem] md:text-[3vw] lg:text-[3.5vw] font-[500] leading-[1.1] tracking-tight text-[#4d6628] font-['Outfit']">
                        Order medicines
                        <br />
                        effortlessly via
                        <br />
                        WhatsApp
                    </h2>
                </div>

                {/* Center SVG Graphic */}
                <div className="relative w-full aspect-square flex items-end justify-center min-w-[350px] max-w-[550px] mx-auto">
                    {/* Unfilled Outline */}
                    <div className="absolute inset-0 w-full h-full text-[#4d6628]">
                        <MedicalGraphic filled={false} />
                    </div>

                    {/* Filled Overlay animated dynamically by GSAP height */}
                    <div id="medical-fill-wrapper" className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "0%" }}>
                        <div className="absolute bottom-0 left-0 w-full text-[#4d6628]" style={{ aspectRatio: '1 / 1' }}>
                            <MedicalGraphic filled={true} />
                        </div>
                    </div>
                </div>

                {/* Right Text (Bottom aligned) */}
                <div className="flex flex-col justify-end h-full pb-[30vh]">
                    <h2 className="text-[2.5rem] md:text-[3vw] lg:text-[3.5vw] font-[500] leading-[1.1] tracking-tight text-[#4d6628] font-['Outfit'] md:text-left pl-0 md:pl-12">
                        verified instantly
                        <br />
                        by our AI
                    </h2>
                </div>

            </div>
        </section>
    );
}
