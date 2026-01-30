import { motion } from 'framer-motion'
import HeroScene from '../three/HeroScene'

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-background">
            <HeroScene />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center px-4"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryGlow to-accent tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                        100xSolution
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xl md:text-2xl text-softText font-light tracking-wide"
                    >
                        Your Marketing Done Automatically. 24/7.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 w-full flex justify-center z-10"
            >
                <div className="w-6 h-10 border-2 border-softText/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-primaryGlow rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
