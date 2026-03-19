import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Hooks ── */
import { useLenis } from "./hooks/useLenis";
import { useCurtainGsap } from "./hooks/useCurtainGsap";
import { useSectionAnimations } from "./hooks/useSectionAnimations";
import { useBlackSectionGsap } from "./hooks/useBlackSectionGsap";
import { useWhatsAppSectionGsap } from "./hooks/useWhatsAppSectionGsap";
import { useMaskScrollSectionGsap } from "./hooks/useMaskScrollSectionGsap";
import { useFooterCurtainGsap } from "./hooks/useFooterCurtainGsap";

/* ── Layout ── */
import LoadingOverlay from "./components/effects/LoadingOverlay";
import CubeGrid from "./components/effects/CubeGrid";
import CubeGridFooter from "./components/effects/CubeGridFooter";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

/* ── Components ── */
import DemoModal from "./components/components/DemoModal";

/* ── Sections ── */
import LandingHero from "./components/sections/LandingHero";
import FeaturesSection from "./components/sections/FeaturesSection";
import BlackSection from "./components/sections/BlackSection";
import WhatsAppSection from "./components/sections/WhatsAppSection";
import MaskScrollSection from "./components/sections/MaskScrollSection";
import DeliverySection from "./components/sections/DeliverySection";
import FooterSection from "./components/sections/FooterSection";

/* ── Global styles & fonts ── */
import "remixicon/fonts/remixicon.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────── */

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  /* Scroll-driven animations — start once overlay is gone */
  useLenis(showContent);
  useCurtainGsap(showContent);
  useSectionAnimations(showContent);
  useBlackSectionGsap(showContent);
  useWhatsAppSectionGsap(showContent);
  useMaskScrollSectionGsap(showContent);
  useFooterCurtainGsap(showContent);

  return (
    <>
      {/*
        Loading overlay — cream bg, logo springs in,
        spins → burst → brand name fans in → wipes upward.
        Calls setShowContent(true) when it removes itself.
      */}
      <LoadingOverlay onComplete={() => setShowContent(true)} />

      {/* Global Navbar - Sticky across all pages */}
      <Navbar onMenuClick={() => setMenuOpen(true)} onBookDemo={() => setDemoModalOpen(true)} />

      {/* Main scrollable page */}
      <div className="w-full overflow-y-scroll scroll-smooth relative">

        {/*
          ╔══════════════════════════════════════════════════════════╗
          ║  ANIMATION BLOCK — pinned for the cube curtain wipe      ║
          ║  Layer 1 (z-10)   : Landing hero                        ║
          ║  Layer 2 (z-[60]) : Features — revealed by curtain      ║
          ║  Layer 3 (z-[70]) : Cube grid curtain overlay           ║
          ╚══════════════════════════════════════════════════════════╝
        */}
        <div className="animation-block relative h-screen w-full overflow-hidden">
          <LandingHero onMenuClick={() => setMenuOpen(true)} />
          <FeaturesSection />
          <CubeGrid />
        </div>

        {/* ── Content sections (normal scroll) ── */}
        <BlackSection />
        <WhatsAppSection />    {/* Page 3 — WhatsApp & Telegram ordering  */}

        <MaskScrollSection />  {/* Page 5.5 — Mask Reveal for Dashboard */}

        {/* 
          ╔══════════════════════════════════════════════════════════╗
          ║  FOOTER ANIMATION BLOCK — pinned for the CubeGrid wipe   ║
          ╚══════════════════════════════════════════════════════════╝
        */}
        <div className="footer-wipe-container relative w-full bg-[#0a1103]">

          <DeliverySection />    {/* Page 6 — Delivery scrolls naturally  */}

          {/* Placed absolutely at the bottom so it aligns with the screen when container pins at 'bottom bottom' */}
          <div className="footer-inner absolute bottom-0 left-0 w-full h-screen z-[60]" style={{ opacity: 0, pointerEvents: "none" }}>
            <FooterSection />      {/* Page 7 — Footer / contact (cream bg)   */}
          </div>

          <div className="footer-grid-wrapper absolute bottom-0 left-0 w-full h-screen z-[70] pointer-events-none">
            <CubeGridFooter />
          </div>
        </div>
      </div>

      {/* Slide-in navigation sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Book a Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}