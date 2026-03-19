import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useLenis
 * Initialises Lenis smooth scrolling once the intro is done.
 * Higher duration + lower wheelMultiplier = noticeably smoother, more cinematic scroll.
 * @param {boolean} showContent - true when SVG intro has finished
 */
export function useLenis(showContent) {
    useEffect(() => {
        if (!showContent) return;

        const lenis = new Lenis({
            duration: 2.2,          // Longer glide — feels luxurious, not snappy
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
            smoothWheel: true,
            wheelMultiplier: 0.65,         // Lower = slower response per scroll tick (smoother)
            smoothTouch: false,        // Let native touch handle itself
            touchMultiplier: 1.2,
        });

        // Sync ScrollTrigger with Lenis scroll position (scrollerProxy for accurate scrub)
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length) lenis.scrollTo(value);
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight, width: window.innerWidth, height: window.innerHeight };
            },
        });
        lenis.on("scroll", ScrollTrigger.update);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [showContent]);
}
