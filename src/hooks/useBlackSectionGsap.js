import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useBlackSectionGsap
 * Handles the scroll-triggered pinning and bottom-to-top medical cross fill effect 
 * for the BlackSection (which is now our cream Medical section).
 */
export function useBlackSectionGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#black-medical-section",
                start: "top top", // Triggers immediately when scrolling hits the top
                end: "+=120%",     // Length of scroll for the fill effect
                scrub: 1,
                pin: true,        // Pins the section to the screen
                anticipatePin: 1,
            }
        });

        // Set initial state of the fill to 0 height
        gsap.set("#medical-fill-wrapper", { height: "0%" });

        // Animate up to 100% height to reveal the fully filled graphic
        tl.to("#medical-fill-wrapper", { height: "100%", ease: "none" });

    }, [showContent]);
}
