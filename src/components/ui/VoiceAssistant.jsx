import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const speeches = [
    "Welcome to 100xSolution! I'm your AI marketing assistant.",
    "Our AI technology helps businesses grow 24 hours a day, 7 days a week.",
    "We analyze thousands of data points to understand exactly what your customers want.",
    "Our system automatically sends the perfect message to the right person at the perfect moment.",
    "No tech skills needed - we handle everything for you.",
    "Stop wasting money on ads that don't work. We only show ads to people who want to buy.",
    "Save hours every week while our AI does the heavy lifting.",
    "Get more sales by reaching the right people at the right time.",
    "Your marketing runs 24/7 without you lifting a finger.",
    "Ready to grow your business? Let's get started!"
]

export default function VoiceAssistant({ isSpeaking, onSpeakComplete }) {
    const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const synthRef = useRef(null)
    const utteranceRef = useRef(null)

    useEffect(() => {
        // Initialize speech synthesis
        synthRef.current = window.speechSynthesis
        
        return () => {
            if (synthRef.current) {
                synthRef.current.cancel()
            }
        }
    }, [])

    useEffect(() => {
        if (isSpeaking && !isPlaying) {
            startSpeaking()
        } else if (!isSpeaking && isPlaying) {
            stopSpeaking()
        }
    }, [isSpeaking])

    const startSpeaking = () => {
        if (!synthRef.current) return

        const speech = speeches[currentSpeechIndex]
        const utterance = new SpeechSynthesisUtterance(speech)
        
        // Configure voice settings
        utterance.rate = 0.9
        utterance.pitch = 1.1
        utterance.volume = 1

        // Try to use a pleasant voice
        const voices = synthRef.current.getVoices()
        const preferredVoice = voices.find(voice => 
            voice.name.includes('Google') || 
            voice.name.includes('Samantha') ||
            voice.name.includes('Daniel')
        )
        if (preferredVoice) {
            utterance.voice = preferredVoice
        }

        utterance.onend = () => {
            setIsPlaying(false)
            setCurrentSpeechIndex((prev) => (prev + 1) % speeches.length)
            if (onSpeakComplete) {
                onSpeakComplete()
            }
        }

        utterance.onerror = () => {
            setIsPlaying(false)
            if (onSpeakComplete) {
                onSpeakComplete()
            }
        }

        utteranceRef.current = utterance
        synthRef.current.speak(utterance)
        setIsPlaying(true)
    }

    const stopSpeaking = () => {
        if (synthRef.current) {
            synthRef.current.cancel()
        }
        setIsPlaying(false)
    }

    return (
        <AnimatePresence>
            {isSpeaking && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <div className="bg-gradient-to-br from-background to-accent/20 p-6 rounded-2xl border border-primaryGlow/30 shadow-[0_0_30px_rgba(0,255,255,0.3)] backdrop-blur-xl max-w-sm">
                        <div className="flex items-start gap-4">
                            {/* Animated Voice Indicator */}
                            <div className="flex gap-1 items-end h-12">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            height: isPlaying ? [8, 24, 16, 28, 12][i - 1] : 8,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                        className="w-1 bg-primaryGlow rounded-full"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <p className="text-softText text-sm leading-relaxed">
                                    {speeches[currentSpeechIndex]}
                                </p>
                                <p className="text-primaryGlow/60 text-xs mt-2">
                                    Speaking: {currentSpeechIndex + 1}/{speeches.length}
                                </p>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={stopSpeaking}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-primaryGlow rounded-full text-black text-xs font-bold hover:scale-110 transition-transform"
                        >
                            ✕
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}