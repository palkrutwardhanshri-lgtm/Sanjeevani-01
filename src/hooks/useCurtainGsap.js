import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ROWS, COLS } from "../constants/gridConfig";

/**
 * useCurtainGsap
 * All scroll-driven GSAP animations after the intro:
 *  • Hero scale-in
 *  • Cube curtain close → features reveal → curtain open
 *  • Contact section entrance
 *
 * @param {boolean} showContent - true when SVG intro has finished
 */
export function useCurtainGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        // ── Landing hero scale-in from rotated/scaled state ──────────────────
        gsap.to(".main", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: -1,
            ease: "Expo.easeInOut",
        });
        gsap.to(".hero-text", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: -0.8,
            ease: "Expo.easeInOut",
        });

        // ── CURTAIN WIPE ──────────────────────────────────────────────────────
        // Each cube starts rolled UP (scaleY 0 from top)
        gsap.set(".grid-cube", {
            scaleY: 0,
            opacity: 1,
            transformOrigin: "top center",
        });

        // ── NAVBAR COLOR TOGGLE ───────────────────────────────────────────────
        // Dark sections: light cream (#EAE5D9) like Sanjeevani logo. Light sections: dark olive (#5C683B) like MENU.
        ScrollTrigger.create({
            trigger: ".animation-block",
            start: "top top",
            end: "+=350%",
            onUpdate: (self) => {
                // Change point matches the timing when the white grid is fully visible
                const isLightSection = self.progress > 0.45 && self.progress < 1.0;
                gsap.to("body", {
                    "--nav-color": isLightSection ? "#5C683B" : "#EAE5D9",
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            }
        });

        gsap.set(".features-inner", { opacity: 0, y: 20 });

        const cubeTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animation-block",
                start: "top top",
                end: "+=350%",
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Phase 1 — CURTAIN CLOSES: right→left within each row, bottom rows first
        cubeTl.to(".grid-cube", {
            scaleY: 1,
            duration: 1.4,
            stagger: (i) => {
                const row = Math.floor(i / COLS);
                const col = i % COLS;
                const reversedRow = (ROWS - 1) - row;
                const reversedCol = (COLS - 1) - col;
                return reversedRow * 0.45 + reversedCol * 0.13;
            },
            backgroundColor: "#f0ede6",
            ease: "power3.inOut",
        })

            // Phase 2 — landing fades/blurs behind closed curtain
            .to(".landing-content", {
                opacity: 0,
                scale: 0.95,
                filter: "blur(10px)",
                duration: 0.5,
                ease: "power2.in",
            }, "-=0.5")

            // Phase 3a — features fade in as curtain starts opening
            .to(".features-inner", {
                opacity: 1,
                y: 0,
                pointerEvents: "auto",
                duration: 1.0,
                ease: "power3.out",
            }, "open1")

            // Phase 3b — CURTAIN OPENS: left col first, bottom rows first
            .to(".grid-cube", {
                scaleY: 0,
                transformOrigin: "top center",
                duration: 1.4,
                stagger: (i) => {
                    const row = Math.floor(i / COLS);
                    const col = i % COLS;
                    const reversedRow = (ROWS - 1) - row;
                    return reversedRow * 0.45 + col * 0.13;
                },
                ease: "power3.inOut",
            }, "open1");

        // ── Contact section scroll-in ─────────────────────────────────────────
        gsap.fromTo(
            ".contact-anim",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 65%",
                    toggleActions: "play reverse play reverse",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
            }
        );
    }, [showContent]);
}
