import { ROWS, COLS, TOTAL_CUBES } from "../../constants/gridConfig";

/**
 * CubeGrid — LAYER 3 (z-[70])
 * Renders the grid of shutter cubes used in the curtain wipe animation.
 * GSAP (in useCurtainGsap) targets the `.grid-cube` class selector.
 */
export default function CubeGrid() {
    return (
        <div
            className="absolute inset-0 z-[70] pointer-events-none"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            }}
        >
            {[...Array(TOTAL_CUBES)].map((_, i) => (
                <div
                    key={i}
                    className="grid-cube"
                    style={{
                        transform: "translateZ(0)",
                        willChange: "transform, opacity",
                        /* border clearly visible on cream (#f0ede6) curtain fill */
                        border: "1px solid rgba(140, 125, 100, 0.30)",
                        boxSizing: "border-box",
                    }}
                />
            ))}
        </div>
    );
}
