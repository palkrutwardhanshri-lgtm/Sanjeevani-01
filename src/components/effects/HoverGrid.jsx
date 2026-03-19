import { useEffect, useRef } from "react";

/**
 * HoverGrid — v6
 * ──────────────
 * • No permanent grid lines.
 * • ONE cell lit at a time; past cells fade out (~300ms).
 * • Hover color adapts to background brightness:
 *     - Top (dark bg)    → bright light-green fill  (visible on dark)
 *     - Bottom (light bg) → deep dark-green fill    (visible on light)
 * • Larger cells (70px).
 */
export default function HoverGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        /* ── Config ─────────────────────────────────────────────── */
        const CELL = 70;   // px per cell
        const PEAK = 1.0;  // internal peak value
        const FADE = 0.82; // per-frame decay for fading-out cells

        // #B7C25E Moss Green — used across the full gradient background
        const LIGHT = { r: 183, g: 194, b: 94, a: 0.68 };
        const DARK = { r: 183, g: 194, b: 94, a: 0.68 };
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
            const a = (LIGHT.a + (DARK.a - LIGHT.a) * ratio) * alpha;
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

            for (const [key, alpha] of cells.entries()) {
                const isCurrent = key === currentKey;
                const next = isCurrent ? PEAK : alpha * FADE;
                if (next < 0.004) { cells.delete(key); continue; }
                cells.set(key, next);
                const [c, r] = key.split(",").map(Number);
                ctx.fillStyle = cellColor(r, next);
                ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2);
            }

            rafId = requestAnimationFrame(draw);
        }

        /* ── Init ── */
        updateRect();
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseleave", onMouseLeave, { passive: true });
        window.addEventListener("resize", updateRect, { passive: true });
        draw();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("resize", updateRect);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 12,
                display: "block",
            }}
        />
    );
}
