import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Cone, Torus } from '@react-three/drei'

function FriendlyRobot() {
    const headRef = useRef()
    const ringRef = useRef()
    const eyeLeftRef = useRef()
    const eyeRightRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (headRef.current) headRef.current.position.y = Math.sin(t * 1) * 0.1
        if (ringRef.current) ringRef.current.rotation.x = t * 0.5
        if (ringRef.current) ringRef.current.rotation.y = t * 0.3

        // Glowing blinking eyes logic could go here, for now just constant glow
    })

    return (
        <group position={[0, -0.5, 0]}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Head */}
                <Sphere args={[1, 32, 32]} ref={headRef}>
                    <MeshDistortMaterial
                        color="#e5e7eb"
                        emissive="#111"
                        roughness={0.1}
                        metalness={0.8}
                        distort={0.15}
                        speed={2}
                    />
                </Sphere>

                {/* Eyes */}
                <Sphere args={[0.2, 32, 32]} position={[-0.4, 0.2, 0.8]} ref={eyeLeftRef}>
                    <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
                </Sphere>
                <Sphere args={[0.2, 32, 32]} position={[0.4, 0.2, 0.8]} ref={eyeRightRef}>
                    <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
                </Sphere>

                {/* Floating Ring / Body Halo */}
                <Torus args={[1.6, 0.1, 16, 100]} rotation={[1.5, 0, 0]} ref={ringRef}>
                    <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.5} wireframe />
                </Torus>

                {/* Base/Neck */}
                <Cone args={[0.8, 0.5, 32]} position={[0, -0.9, 0]} rotation={[3.14, 0, 0]}>
                    <meshStandardMaterial color="#333" roughness={0.5} metalness={0.8} />
                </Cone>
            </Float>
        </group>
    )
}

export default function RobotScene() {
    return (
        <div className="h-[400px] w-full cursor-pointer relative z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
                <pointLight position={[-10, -5, -10]} intensity={0.5} color="#7c3aed" />

                <FriendlyRobot />
            </Canvas>
        </div>
    )
}
