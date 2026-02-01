import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Sphere, Float, MeshDistortMaterial, Cone, Torus } from '@react-three/drei'
import VoiceAssistant from '../ui/VoiceAssistant'

function AnimatedBackground() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Sparkles count={300} scale={10} size={1.5} speed={0.5} opacity={0.3} color="#7c3aed" />
        </Canvas>
    )
}

function SpeakingRobot({ isSpeaking }) {
    const headRef = useRef()
    const ringRef = useRef()
    const eyeLeftRef = useRef()
    const eyeRightRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (headRef.current) {
            headRef.current.position.y = Math.sin(t * 1) * 0.1
            // Add more movement when speaking
            if (isSpeaking) {
                headRef.current.position.y += Math.sin(t * 8) * 0.03
                headRef.current.rotation.x = Math.sin(t * 6) * 0.05
            }
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = t * 0.5
            ringRef.current.rotation.y = t * 0.3
        }
        // Pulsing eyes when speaking
        if (isSpeaking && eyeLeftRef.current && eyeRightRef.current) {
            const pulse = (Math.sin(t * 10) + 1) / 2
            eyeLeftRef.current.scale.setScalar(1 + pulse * 0.3)
            eyeRightRef.current.scale.setScalar(1 + pulse * 0.3)
        }
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
                        speed={isSpeaking ? 3 : 2}
                    />
                </Sphere>

                {/* Eyes */}
                <Sphere args={[0.2, 32, 32]} position={[-0.4, 0.2, 0.8]} ref={eyeLeftRef}>
                    <meshStandardMaterial
                        color={isSpeaking ? "#ff00ff" : "#00ffff"}
                        emissive={isSpeaking ? "#ff00ff" : "#00ffff"}
                        emissiveIntensity={isSpeaking ? 3 : 2}
                    />
                </Sphere>
                <Sphere args={[0.2, 32, 32]} position={[0.4, 0.2, 0.8]} ref={eyeRightRef}>
                    <meshStandardMaterial
                        color={isSpeaking ? "#ff00ff" : "#00ffff"}
                        emissive={isSpeaking ? "#ff00ff" : "#00ffff"}
                        emissiveIntensity={isSpeaking ? 3 : 2}
                    />
                </Sphere>

                {/* Floating Ring / Body Halo */}
                <Torus args={[1.6, 0.1, 16, 100]} rotation={[1.5, 0, 0]} ref={ringRef}>
                    <meshStandardMaterial
                        color={isSpeaking ? "#ff00ff" : "#7c3aed"}
                        emissive={isSpeaking ? "#ff00ff" : "#7c3aed"}
                        emissiveIntensity={isSpeaking ? 0.8 : 0.5}
                        wireframe
                    />
                </Torus>

                {/* Base/Neck */}
                <Cone args={[0.8, 0.5, 32]} position={[0, -0.9, 0]} rotation={[3.14, 0, 0]}>
                    <meshStandardMaterial color="#333" roughness={0.5} metalness={0.8} />
                </Cone>
            </Float>
        </group>
    )
}

function RobotCanvas({ isSpeaking }) {
    return (
        <div className="h-[200px] w-full cursor-pointer">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
                <pointLight position={[-10, -5, -10]} intensity={0.5} color="#7c3aed" />
                <SpeakingRobot isSpeaking={isSpeaking} />
            </Canvas>
        </div>
    )
}

export default function CTA() {
    const [isSpeaking, setIsSpeaking] = useState(false)

    const handleSpeakComplete = () => {
        setIsSpeaking(false)
    }

    const toggleSpeaking = () => {
        setIsSpeaking(!isSpeaking)
    }

    return (
        <>
            <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <AnimatedBackground />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Let AI Grow Your Business <span className="text-primaryGlow">24/7</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-softText mb-12 font-light"
                    >
                        No more guessing. Just smart marketing that grows your business.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                    >
                        <a
                            href="https://www.instagram.com/100xsolutions.live?igsh=ZTVnbTdvbWhkcXJ4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primaryGlow text-black text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                        >
                            Get Started
                        </a>
                        <button className="px-8 py-4 bg-transparent border-2 border-primaryGlow/50 text-primaryGlow text-lg font-bold rounded-full hover:bg-primaryGlow/10 hover:border-primaryGlow transition-all duration-300">
                            Book a Free Strategy Call
                        </button>
                    </motion.div>

                    {/* Voice Assistant Button with Robot */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="max-w-md mx-auto"
                    >
                        <motion.button
                            onClick={toggleSpeaking}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${isSpeaking
                                    ? 'bg-primaryGlow/20 border-primaryGlow shadow-[0_0_30px_rgba(0,255,255,0.5)]'
                                    : 'bg-white/5 border-white/20 hover:border-primaryGlow/50'
                                }`}
                        >
                            <div className="flex items-center justify-center gap-3">
                                <div className="flex gap-1 items-end h-6">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                height: isSpeaking ? [6, 20, 10, 18, 8][i - 1] : 6,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                            }}
                                            className="w-1 bg-primaryGlow rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className={`font-bold ${isSpeaking ? 'text-primaryGlow' : 'text-softText'}`}>
                                    {isSpeaking ? 'Listening to AI Assistant...' : 'Click to Hear AI Explain Services'}
                                </span>
                            </div>
                        </motion.button>

                        {/* Small 3D Robot Preview */}
                        {isSpeaking && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-6 mx-auto w-64"
                            >
                                <RobotCanvas isSpeaking={isSpeaking} />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Voice Assistant Overlay */}
            <VoiceAssistant isSpeaking={isSpeaking} onSpeakComplete={handleSpeakComplete} />
        </>
    )
}
