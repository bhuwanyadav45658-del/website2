import { motion } from 'framer-motion'
import RobotScene from '../three/AIRobot'

export default function WhatIsAI() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 bg-background overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Meet Your New <br /><span className="text-primaryGlow">Digital Employee</span>
                    </h2>

                    <div className="space-y-6 text-lg text-softText leading-relaxed">
                        <p>
                            Imagine if you could hire a marketing expert who <b>never sleeps, never takes a coffee break, and never asks for a raise</b>. That is exactly what our AI is.
                        </p>
                        <p>
                            While you are busy running your business, our system is quietly working in the background. It looks at thousands of data points—like who visited your site, what they clicked on, and how long they stayed—to understand <i>exactly</i> what your customers want.
                        </p>
                        <p>
                            Then, like a super-smart assistant, it automatically sends the perfect message to the right person at the exact moment they are ready to buy. No manual work. No guesswork. Just results.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: 3D Robot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] w-full flex justify-center items-center"
                >
                    <div className="absolute inset-0 bg-primaryGlow/5 rounded-full blur-[80px]" />
                    <RobotScene />
                </motion.div>

            </div>
        </section>
    )
}
