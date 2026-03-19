import { ROWS, COLS, TOTAL_CUBES } from "../../constants/gridConfig";

/**
 * CubeGridFooter — LAYER 3 (z-[70])
 * Renders the grid of shutter cubes used in the footer curtain wipe animation.
 * GSAP targets the `.footer-grid-cube` class selector.
 */
export default function CubeGridFooter() {
    return (
        <div
            className="absolute inset-0 z-[70] pointer-events-none"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                gridTemplateRows: "1fr",
            }}
        >
            {[...Array(COLS)].map((_, i) => (
                <div
                    key={i}
                    className="footer-grid-cube"
                    style={{
                        transform: "translateZ(0)",
                        willChange: "transform, opacity",
                        /* Vertical shutter style without horizontal rows */
                        borderLeft: "1px solid rgba(45, 61, 26, 0.30)",
                        borderRight: "1px solid rgba(45, 61, 26, 0.30)",
                        boxSizing: "border-box",
                    }}
                />
            ))}
        </div>
    );
}
