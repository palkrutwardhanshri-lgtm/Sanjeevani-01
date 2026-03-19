import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useWhatsAppSectionGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        // Removed the complex yPercent: 100 animation on #black-medical-section 
        // as it causes severe layout jitter and shake when combined with pinning.

        // Set initial states
        gsap.set(".wa-content-box", { xPercent: 100 });

        // Start the video as a full screen box
        gsap.set(".wa-video-box", {
            width: "100%",
            height: "100%",
            left: "0%",
            top: "0%"
        });

        // Add a slight zoom effect to the video itself
        gsap.set(".wa-video-box video", { scale: 1.2 });

        // Create the animation sequence for the WhatsApp section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#whatsapp-section",
                start: "top 75%", // Starts animating when it's partially into view
                end: "top 10%",   // Finishes when it's almost at the top
                scrub: 1,         // Reduced scrub latency to feel more responsive and smooth
                // Removed once: true to prevent jarring stops/jumps during scrub
            }
        });

        // Animate the width so the nested video with object-cover stays properly centered
        tl.to(".wa-video-box", {
            width: "50%",
            ease: "none"
        }, 0);

        // Reset the video scale, zooming it out gently
        tl.to(".wa-video-box video", {
            scale: 1,
            ease: "none"
        }, 0);

        // Subtly animate the content box coming in from the right, perfectly synchronized
        tl.to(".wa-content-box", {
            xPercent: 0,
            ease: "none"
        }, 0);

        // Pin the WhatsApp section to give the user time to read it
        ScrollTrigger.create({
            trigger: "#whatsapp-section",
            start: "top top",
            end: "+=50%", // Keep it pinned for only half a viewport height of scroll
            pin: true,
        });

    }, [showContent]);
}
