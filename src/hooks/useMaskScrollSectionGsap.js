import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useMaskScrollSectionGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        const maskContainer = document.querySelector("#mask-scroll-section");
        const maskGroup = document.querySelector(".ms-mask-group");
        const textContainer = document.querySelector(".ms-text-container");

        if (!maskContainer || !maskGroup || !textContainer) return;

        // Both elements start far off-screen to the right
        gsap.set(maskGroup, { x: "160vw", y: 0, scale: 1 });
        gsap.set(textContainer, { xPercent: -50, yPercent: -50, x: "160vw", y: 0 });

        const maskTl = gsap.timeline({
            scrollTrigger: {
                trigger: maskContainer,
                start: "top top",
                end: "+=280%",      // More pin room → scroll feels slower & smoother
                pin: true,
                scrub: 3,             // HIGH scrub value = very smooth, no snap-back feeling
                anticipatePin: 1,         // Prevents jump when pin starts
            },
        });

        // ── Phase 1: Slide in from right (takes most of the scroll budget) ──
        maskTl.to(textContainer, {
            x: 0,
            ease: "power1.out",       // Very gentle ease-out, feels natural
            duration: 3,
        }, 0);

        maskTl.to(maskGroup, {
            x: 0,
            ease: "power1.out",
            duration: 3,
        }, 0);

        // ── Phase 2: Hold at centre briefly ──
        // (No-op — just a pause in the timeline before the scale explodes)

        // ── Phase 3: Scale mask hole open to reveal dashboard ──
        maskTl.to(maskGroup, {
            scale: 160,
            ease: "power2.inOut",
            duration: 2,
            transformOrigin: "center center",
        }, 3.2);     // Starts after horizontal movement settles

        // Fade text out as mask blows open
        maskTl.to(textContainer, {
            opacity: 0,
            ease: "power1.in",
            duration: 0.6,
        }, 3.2);

    }, [showContent]);
}
