import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useSmsVoiceSectionGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        // Make the previous WhatsAppSection stick visually in place
        // so that SmsVoiceSection slides over it seamlessly.
        gsap.to("#whatsapp-section", {
            yPercent: 100, // Move it down matching the scroll speed
            ease: "none",
            scrollTrigger: {
                trigger: "#sms-voice-section",
                start: "top bottom", // Triggers as soon as SmsVoiceSection begins to appear
                end: "top top",      // Ends when SmsVoiceSection fully covers the screen
                scrub: true,
            }
        });

        // Content box starts off-screen to the left (because image will be on the right)
        gsap.set(".sv-content-box", { xPercent: -100 });

        // Image box starts full screen, pinned to the right
        gsap.set(".sv-image-box", {
            width: "100%",
            height: "100%",
            right: "0%",
            top: "0%"
        });

        // Add a slight zoom effect to the image itself
        gsap.set(".sv-image-box img", { scale: 1.2 });

        // Create the animation sequence for the SMS/Voice section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#sms-voice-section",
                start: "top 75%", // Starts animating when it's partially into view
                end: "top 10%",   // Finishes when it's almost at the top
                scrub: 1.5,       // Links the animation smoothly to the scroll
                once: true        // Plays exactly once
            }
        });

        // Animate the image box to the right, taking up 50% width
        tl.to(".sv-image-box", {
            width: "50%",
            ease: "none"
        }, 0);

        // Reset the image scale, zooming it out gently
        tl.to(".sv-image-box img", {
            scale: 1,
            ease: "none"
        }, 0);

        // Subtly animate the content box coming in from the left, synchronized
        tl.to(".sv-content-box", {
            xPercent: 0,
            ease: "none"
        }, 0);

        // Pin the SMS/Voice section for 1 screen height after it fully arrives, 
        // giving the user time to read before the MaskScrollSection comes up.
        ScrollTrigger.create({
            trigger: "#sms-voice-section",
            start: "top top",
            end: "+=50%", // Pin for 1 full screen height (adjust for more/less reading time)
            pin: true,
            pinSpacing: true, // creates space so the next section waits
        })

    }, [showContent]);
}
