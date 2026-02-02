import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Torus, Cone, Sparkles } from '@react-three/drei';

function SpeakingRobot({ isSpeaking }) {
    const headRef = useRef();
    const ringRef = useRef();
    const eyeLeftRef = useRef();
    const eyeRightRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (headRef.current) {
            headRef.current.position.y = Math.sin(t * 1) * 0.1;
            if (isSpeaking) {
                headRef.current.position.y += Math.sin(t * 8) * 0.03;
                headRef.current.rotation.x = Math.sin(t * 6) * 0.05;
            }
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = t * 0.5;
            ringRef.current.rotation.y = t * 0.3;
        }
        if (isSpeaking && eyeLeftRef.current && eyeRightRef.current) {
            const pulse = (Math.sin(t * 10) + 1) / 2;
            eyeLeftRef.current.scale.setScalar(1 + pulse * 0.3);
            eyeRightRef.current.scale.setScalar(1 + pulse * 0.3);
        }
    });

    return (
        <group scale={0.6} position={[0, -0.2, 0]}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
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
                <Torus args={[1.6, 0.1, 16, 100]} rotation={[1.5, 0, 0]} ref={ringRef}>
                    <meshStandardMaterial
                        color={isSpeaking ? "#ff00ff" : "#7c3aed"}
                        emissive={isSpeaking ? "#ff00ff" : "#7c3aed"}
                        emissiveIntensity={isSpeaking ? 0.8 : 0.5}
                        wireframe
                    />
                </Torus>
                <Cone args={[0.8, 0.5, 32]} position={[0, -0.9, 0]} rotation={[3.14, 0, 0]}>
                    <meshStandardMaterial color="#333" roughness={0.5} metalness={0.8} />
                </Cone>
            </Float>
        </group>
    );
}

const FloatingAIAssistant = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const synthRef = useRef(null);
    const speechText = "Welcome to 100xSolution. We specialize in two core pillars: Digital Infrastructure and AI Integration. For Digital Infrastructure, we offer Custom Web Development, building lightning-fast Progressive Web Apps, and scalable Ecommerce Solutions to grow your sales. For AI Integration, we develop Custom AI Agents tailored to your business, implement AI Workflow Automation to eliminate repetitive tasks, and provide Intelligent Data Processing to turn your data into actionable insights. Let us handle the tech so you can focus on scale. Ready to multiply your results?";

    useEffect(() => {
        synthRef.current = window.speechSynthesis;
        return () => {
            if (synthRef.current) synthRef.current.cancel();
        };
    }, []);

    const toggleSpeech = () => {
        if (!synthRef.current) return;

        if (isSpeaking) {
            synthRef.current.cancel();
            setIsSpeaking(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(speechText);
            utterance.rate = 0.95;
            utterance.pitch = 1.1;

            const voices = synthRef.current.getVoices();
            const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'));
            if (preferredVoice) utterance.voice = preferredVoice;

            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            synthRef.current.speak(utterance);
            setIsSpeaking(true);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isSpeaking && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        className="mb-4 mr-2 max-w-[280px] bg-black/80 backdrop-blur-xl border border-primaryGlow/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                    >
                        <div className="flex gap-2 mb-2">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [4, 12, 4] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-1 bg-primaryGlow rounded-full"
                                />
                            ))}
                        </div>
                        <p className="text-xs text-softText leading-relaxed">
                            {speechText}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleSpeech}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border-2 transition-all duration-500 overflow-hidden ${isSpeaking ? 'border-primaryGlow shadow-[0_0_25px_rgba(0,255,255,0.4)]' : 'border-white/10 hover:border-primaryGlow/50'
                    }`}
            >
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 3] }}>
                        <ambientLight intensity={1} />
                        <pointLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
                        <SpeakingRobot isSpeaking={isSpeaking} />
                    </Canvas>
                </div>

                {/* Status Indicator */}
                {!isSpeaking && isHovered && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 text-[10px] font-bold text-primaryGlow uppercase tracking-tighter">
                        Hear Services
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingAIAssistant;
