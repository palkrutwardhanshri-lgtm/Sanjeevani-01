import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Logo3D
 * Renders the 6-petal brand logo as an extruded, auto-rotating 3D mesh
 * on a transparent WebGL canvas. Sits in the right half of the hero.
 *
 * Geometry: 6 leaf-shaped petals (ExtrudeGeometry from a Bezier curve)
 * each rotated 60° around Z, tilted 20° on X for depth.
 */
export default function Logo3D({ style, color = '#1a1a1a', highlightColor = '#bbbbbb' }) {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const W = mount.clientWidth || 280;
        const H = mount.clientHeight || 280;

        /* ── Renderer — transparent bg so green hero shows through ── */
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        mount.appendChild(renderer.domElement);

        /* ── Scene & camera ── */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
        camera.position.set(0, 0.2, 5.8);

        /* ── Lighting: mimics sunlight from upper-right + rim ── */
        scene.add(new THREE.AmbientLight(0xffffff, 0.45));

        const key = new THREE.DirectionalLight(0xffffff, 3.0);
        key.position.set(4, 6, 5);
        scene.add(key);

        const fill = new THREE.DirectionalLight(0xffffff, 1.2); // stronger fill for better gradients on black
        fill.position.set(-5, -2, 4);
        scene.add(fill);

        const rim = new THREE.DirectionalLight(0xaaaaaa, 0.8);  // brighter rim for edge separation
        rim.position.set(0, -6, -3);
        scene.add(rim);

        /* ── Petal shape via Bezier curves ──────────────────────────
           One petal: base at (0,0) → tip at (0, 1.15)
           Matches the logo's rounded-leaf profile.
        ─────────────────────────────────────────────────────────── */
        const ps = new THREE.Shape();
        ps.moveTo(0, 0);
        ps.bezierCurveTo(0.44, 0.16, 0.52, 0.72, 0, 1.15);  // right arc
        ps.bezierCurveTo(-0.52, 0.72, -0.44, 0.16, 0, 0);  // left arc

        const petalGeo = new THREE.ExtrudeGeometry(ps, {
            depth: 0.28,
            bevelEnabled: true,
            bevelThickness: 0.07,
            bevelSize: 0.04,
            bevelSegments: 24,       // Increased for ultra-smooth edges
            curveSegments: 64,       // Adds highly detailed smoothness to the curves
        });

        /* Centre geometry on X & offset Z so front face is at z=0 */
        petalGeo.computeBoundingBox();
        const bb = petalGeo.boundingBox;
        petalGeo.translate(-(bb.max.x + bb.min.x) / 2, 0, -0.14);

        /* ── Material: dynamic color with slight sheen ── */
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.6,
            roughness: 0.45,                     // tightened roughness for a cleaner, polished gleam
        });

        /* ── Highlight/specular accent layer (thinner clone, cream/highlight match) ── */
        const matHighlight = new THREE.MeshStandardMaterial({
            color: new THREE.Color(highlightColor),
            metalness: 0.9,
            roughness: 0.15,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,    // Adds a richer, glowing specular highlight
        });

        /* ── Logo group: 6 petals rotated every 60° ── */
        const logo = new THREE.Group();
        for (let i = 0; i < 6; i++) {
            const petal = new THREE.Mesh(petalGeo, mat);
            const highlight = new THREE.Mesh(petalGeo, matHighlight);
            petal.rotation.z = highlight.rotation.z = (i / 6) * Math.PI * 2;
            logo.add(petal);
            logo.add(highlight);
        }

        /* ── Centre sphere (small, shiny) ── */
        const sphereGeo = new THREE.SphereGeometry(0.12, 24, 24);
        const sphereMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.9, roughness: 0.1 });
        logo.add(new THREE.Mesh(sphereGeo, sphereMat));

        logo.rotation.x = 0.28;  // tilt forward to show depth
        scene.add(logo);

        /* ── Dynamic Gleam Light (Creates a shine when the logo turns) ── */
        const gleamLight = new THREE.PointLight(0xffffff, 8.0, 15);
        scene.add(gleamLight);

        /* ── Animation loop ── */
        let rafId;
        const tick = () => {
            rafId = requestAnimationFrame(tick);
            logo.rotation.y += 0.010;

            // Rotate the light around the logo for a sweeping glint effect
            const time = Date.now() * 0.0015;
            gleamLight.position.x = Math.sin(time) * 4;
            gleamLight.position.y = Math.cos(time) * 2;
            gleamLight.position.z = Math.cos(time) * 4 + 2;

            renderer.render(scene, camera);
        };
        tick();

        /* ── Resize handler ── */
        const onResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: 'min(500px, 80vw)',
                height: 'min(500px, 80vw)',
                position: 'absolute',
                left: '50%',
                top: '5%', // Default to top instead of bottom
                transform: 'translateX(-50%)',
                zIndex: 15,
                pointerEvents: 'none',
                ...style
            }}
        />
    );
}
