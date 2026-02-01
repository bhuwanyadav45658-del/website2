import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from '@react-three/drei'

function ParticleNetwork() {
    const points = useRef()
    const lightRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (points.current) {
            points.current.rotation.y = time * 0.05
            points.current.rotation.x = time * 0.02
        }
        if (lightRef.current) {
            lightRef.current.intensity = 1.5 + Math.sin(time * 2) * 0.5
        }
    })

    return (
        <group ref={points}>
            <pointLight ref={lightRef} color="#00ffff" intensity={2} distance={10} />
            <Sparkles
                count={2000}
                scale={10}
                size={2}
                speed={0.3}
                opacity={0.6}
                color="#00ffff"
            />
            <Sparkles
                count={1000}
                scale={15}
                size={4}
                speed={0.1}
                opacity={0.4}
                color="#7c3aed"
            />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} color="#7c3aed" intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1} />

                <ParticleNetwork />

                <Sparkles count={500} scale={10} size={2} speed={0.4} opacity={0.5} noise={0.2} color="#ffffff" />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    )
}
