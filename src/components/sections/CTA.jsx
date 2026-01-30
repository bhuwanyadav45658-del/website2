import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, Sphere } from '@react-three/drei'

function AnimatedBackground() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Sparkles count={300} scale={10} size={1.5} speed={0.5} opacity={0.3} color="#7c3aed" />
        </Canvas>
    )
}

export default function CTA() {
    return (
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
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <button className="px-8 py-4 bg-primaryGlow text-black text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                        Get Started
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-primaryGlow/50 text-primaryGlow text-lg font-bold rounded-full hover:bg-primaryGlow/10 hover:border-primaryGlow transition-all duration-300">
                        Book a Free Strategy Call
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
