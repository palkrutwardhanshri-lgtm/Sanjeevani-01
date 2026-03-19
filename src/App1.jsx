import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef } from "react"

function FloatingObject() {
    const mesh = useRef()

    useFrame(({ clock }) => {
        mesh.current.rotation.y = clock.elapsedTime * 0.5
        mesh.current.position.y = Math.sin(clock.elapsedTime) * 0.3
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={mesh}>
                <boxGeometry args={[1, 1, 1]} />
                <MeshDistortMaterial
                    color="#8E956C"
                    distort={0.4}
                    speed={2}
                    roughness={0.4}
                />
            </mesh>
        </Float>
    )
}

export default function WaterEffect() {
    return (
        <div style={{ height: "100vh" }}>
            <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={1} />
                <FloatingObject />
            </Canvas>
        </div>
    )
}