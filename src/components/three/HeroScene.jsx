import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from '@react-three/drei'

function Core() {
    const meshRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2
            meshRef.current.rotation.y = time * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]} ref={meshRef}>
                <MeshDistortMaterial
                    color="#00ffff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#00aaaa"
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Float>
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

                <Core />

                <Sparkles count={500} scale={10} size={2} speed={0.4} opacity={0.5} noise={0.2} color="#ffffff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    )
}
