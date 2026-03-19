import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * LogoCanvas
 * Renders the 6-petal 3D brand logo using raw Three.js.
 * Animation sequence:
 *   0.0s  Logo appears at 3× scale (fills screen)
 *   0.0→1.6s  Slowly rotates + scales down to 1.5× (normal size)
 *   1.6→2.5s  Scales down from 1.5× → 0, canvas fades out
 *   2.5s  onDone() called → parent unmounts this, SVG mask begins
 */
export default function LogoCanvas({ onDone }) {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const W = mount.clientWidth || window.innerWidth;
        const H = mount.clientHeight || window.innerHeight;

        /* ── Scene & Camera ──────────────────────────────────── */
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a2a0a);

        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
        camera.position.z = 6;

        /* ── Renderer ────────────────────────────────────────── */
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        mount.appendChild(renderer.domElement);

        /* ── Lights ──────────────────────────────────────────── */
        scene.add(new THREE.AmbientLight(0xffffff, 0.45));

        const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
        keyLight.position.set(4, 6, 5);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x88cc44, 0.50);
        fillLight.position.set(-3, -2, 2);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0xb7c25e, 0.30);
        rimLight.position.set(0, -4, -4);
        scene.add(rimLight);

        /* ── Rounded-square background plate ─────────────────── */
        const S = 1.48, R = 0.32;   // size, corner radius
        const bgShape = new THREE.Shape();
        bgShape.moveTo(-S + R, -S);
        bgShape.lineTo(S - R, -S);
        bgShape.quadraticCurveTo(S, -S, S, -S + R);
        bgShape.lineTo(S, S - R);
        bgShape.quadraticCurveTo(S, S, S - R, S);
        bgShape.lineTo(-S + R, S);
        bgShape.quadraticCurveTo(-S, S, -S, S - R);
        bgShape.lineTo(-S, -S + R);
        bgShape.quadraticCurveTo(-S, -S, -S + R, -S);

        const bgGeo = new THREE.ExtrudeGeometry(bgShape, {
            depth: 0.08, bevelEnabled: true,
            bevelThickness: 0.07, bevelSize: 0.06, bevelSegments: 8,
        });
        const bgMat = new THREE.MeshStandardMaterial({
            color: 0x1c2b0c, metalness: 0.20, roughness: 0.80,
        });
        const bgMesh = new THREE.Mesh(bgGeo, bgMat);
        bgMesh.position.z = -0.28;

        /* ── Petal shape (leaf: base at origin, tip points up) ── */
        //  One petal: bottom tip at (0,0), top tip at (0, 1.15)
        const ps = new THREE.Shape();
        ps.moveTo(0, 0);
        ps.bezierCurveTo(0.30, 0.14, 0.34, 0.68, 0, 1.15);
        ps.bezierCurveTo(-0.34, 0.68, -0.30, 0.14, 0, 0);

        const petalGeo = new THREE.ExtrudeGeometry(ps, {
            depth: 0.22, bevelEnabled: true,
            bevelThickness: 0.06, bevelSize: 0.035, bevelSegments: 6,
        });
        // Centre the petal in X so it extrudes in both ±Z
        {
            const bb = new THREE.Box3().setFromObject(new THREE.Mesh(petalGeo));
            const cx = (bb.max.x + bb.min.x) / 2;
            petalGeo.translate(-cx, 0, -0.11);
        }

        const petalMat = new THREE.MeshStandardMaterial({
            color: 0x2b3c18, metalness: 0.38, roughness: 0.52,
        });

        /* ── Logo group: background + 6 petals ───────────────── */
        const logoGroup = new THREE.Group();
        logoGroup.add(bgMesh);

        for (let i = 0; i < 6; i++) {
            const mesh = new THREE.Mesh(petalGeo, petalMat);
            const angle = (i / 6) * Math.PI * 2;
            mesh.rotation.z = angle;   // base stays at origin, tip rotates outward
            logoGroup.add(mesh);
        }
        scene.add(logoGroup);

        /* ── Animation ───────────────────────────────────────── */
        const INTRO_DUR = 1.6;   // big → normal size
        const SHRINK_DUR = 0.85;  // normal → zero
        const TOTAL = INTRO_DUR + SHRINK_DUR;

        const easeInOut = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const easeInCubic = t => t * t * t;

        logoGroup.scale.setScalar(3.0);
        renderer.domElement.style.transition = 'opacity 0.2s';

        let startTime = null;
        let rafId = null;
        let done = false;

        function tick(ts) {
            if (done) return;
            rafId = requestAnimationFrame(tick);

            if (!startTime) startTime = ts;
            const t = (ts - startTime) / 1000;

            if (t < INTRO_DUR) {
                // Phase 1: rotate a little, scale 3→1.5
                const e = easeInOut(t / INTRO_DUR);
                logoGroup.rotation.z = e * 0.22;
                logoGroup.scale.setScalar(3.0 - e * 1.5);
                renderer.domElement.style.opacity = '1';

            } else if (t < TOTAL) {
                // Phase 2: scale 1.5→0, fade out
                const e = easeInCubic((t - INTRO_DUR) / SHRINK_DUR);
                logoGroup.scale.setScalar(Math.max(0, 1.5 * (1 - e)));
                renderer.domElement.style.opacity = String(1 - e);

            } else if (!done) {
                done = true;
                renderer.domElement.style.opacity = '0';
                cancelAnimationFrame(rafId);
                setTimeout(() => onDone?.(), 60);
                return;
            }

            renderer.render(scene, camera);
        }

        rafId = requestAnimationFrame(tick);

        /* Resize */
        const onResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', onResize);

        /* Cleanup */
        return () => {
            done = true;
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, [onDone]);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed', top: 0, left: 0,
                width: '100vw', height: '100vh',
                zIndex: 200,
                background: '#1a2a0a',
            }}
        />
    );
}
