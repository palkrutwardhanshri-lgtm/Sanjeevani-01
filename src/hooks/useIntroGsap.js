import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * useIntroGsap
 * Drives the SVG mask animation.
 * Waits for `ready === true` (i.e. 3D logo intro has finished)
 * before starting, so the two phases are properly sequenced.
 *
 * @param {(val: boolean) => void} setShowContent
 * @param {boolean} ready  — becomes true once LogoCanvas calls onDone
 */
export function useIntroGsap(setShowContent, ready) {
    useGSAP(() => {
        if (!ready) return;   // wait for 3D logo to finish

        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%",
        }).to(".vi-mask-group", {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: "Expo.easeInOut",
            transformOrigin: "50% 50%",
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    const svgEl = document.querySelector(".svg");
                    if (svgEl) svgEl.remove();
                    setShowContent(true);
                    this.kill();
                }
            },
        });
    }, [ready]);   // re-runs the moment ready flips true
}
