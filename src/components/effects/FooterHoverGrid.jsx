import { useEffect, useRef } from "react";

/**
 * FooterHoverGrid
 * ──────────────
 * • Interactive grid effect specifically for the Footer section.
 * • Triggers on mouse movement, leaving a subtle glowing trail on the cream bg.
 * • Uses a dark mossy-green fill for visibility on the light theme.
 */
export default function FooterHoverGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        /* ── Config ─────────────────────────────────────────────── */
        const CELL = 70;   // px per cell
        const PEAK = 1.0;  // internal peak value
        const FADE = 0.85; // per-frame decay for fading-out cells

        // Using #2d3d1a / #b7c25e tones for the trail
        const LIGHT = { r: 183, g: 194, b: 94, a: 0.2 };
        const DARK = { r: 45, g: 61, b: 26, a: 0.15 };
        /* ─────────────────────────────────────────────────────────── */

        const cells = new Map();  // "col,row" → rawAlpha (0..1)
        let currentKey = null;
        let rafId;
        let canvasRect = { left: 0, top: 0, width: 0, height: 0 };

        function updateRect() {
            canvasRect = canvas.getBoundingClientRect();
            canvas.width = Math.round(canvasRect.width);
            canvas.height = Math.round(canvasRect.height);
        }

        /** Fill colour interpolated by vertical position for contrast */
        function cellColor(row, alpha) {
            const H = canvas.height || 1;
            const ratio = Math.min(1, Math.max(0, (row * CELL + CELL / 2) / H));
            const r = Math.round(LIGHT.r + (DARK.r - LIGHT.r) * ratio);
            const g = Math.round(LIGHT.g + (DARK.g - LIGHT.g) * ratio);
            const b = Math.round(LIGHT.b + (DARK.b - LIGHT.b) * ratio);
            const a = (LIGHT.a + (DARK.a - LIGHT.a) * ratio) * alpha * 2;
            return `rgba(${r},${g},${b},${a})`;
        }

        function onMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;
            if (mx < 0 || my < 0 || mx > rect.width || my > rect.height) {
                currentKey = null;
                return;
            }
            const col = Math.floor(mx / CELL);
            const row = Math.floor(my / CELL);
            currentKey = `${col},${row}`;
            cells.set(currentKey, PEAK);
        }

        function onMouseLeave() { currentKey = null; }

        function draw() {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // Draw faint permanent grid lines
            ctx.strokeStyle = "rgba(45,61,26,0.03)";
            ctx.lineWidth = 1;

            ctx.beginPath();
            for (let x = 0; x <= W; x += CELL) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, H);
            }
            for (let y = 0; y <= H; y += CELL) {
                ctx.moveTo(0, y);
                ctx.lineTo(W, y);
            }
            ctx.stroke();

            // Draw glowing trails
            for (const [key, alpha] of cells.entries()) {
                const isCurrent = key === currentKey;
                const next = isCurrent ? PEAK : alpha * FADE;
                if (next < 0.004) { cells.delete(key); continue; }
                cells.set(key, next);
                const [c, r] = key.split(",").map(Number);

                // Active cell fill
                ctx.fillStyle = cellColor(r, next);
                ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2);
            }

            rafId = requestAnimationFrame(draw);
        }

        /* ── Init ── */
        updateRect();
        canvas.addEventListener("mousemove", onMouseMove, { passive: true });
        canvas.addEventListener("mouseleave", onMouseLeave, { passive: true });
        window.addEventListener("resize", updateRect, { passive: true });
        draw();

        return () => {
            cancelAnimationFrame(rafId);
            canvas.removeEventListener("mousemove", onMouseMove);
            canvas.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("resize", updateRect);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="footer-hover-grid"
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,       // Behind footer content
                pointerEvents: "auto", // Crucial: must catch mouse events for the footer background
                display: "block",
            }}
        />
    );
}
