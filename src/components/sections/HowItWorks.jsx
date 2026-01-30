import { motion } from 'framer-motion'
import DataFlowScene from '../three/DataFlowScene'

export default function HowItWorks() {
    const steps = [
        { title: "1. It Watches", text: "First, our system keeps an eye on who buys your products and what they love." },
        { title: "2. It Thinks", text: "Then, it finds thousands of other people who are exactly like your best customers." },
        { title: "3. It Acts", text: "Finally, it shows them your message at the perfect moment—so you get more sales." }
    ]

    return (
        <section className="py-24 bg-background relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-softText/60 text-lg">The 3-step magic engine.</p>
                </motion.div>

                <div className="mb-16">
                    <DataFlowScene />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center text-softText">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primaryGlow/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-primaryGlow mb-3">{step.title}</h3>
                            <p className="leading-relaxed">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
