import { motion } from 'framer-motion'

const benefits = [
    { title: "No Tech Skills Needed", desc: "You don't need to be a computer wizard." },
    { title: "Stop Wasting Money", desc: "Only show ads to people who actually want to buy." },
    { title: "Save Hours Every Week", desc: "The AI does the heavy lifting while you focus on business." },
    { title: "Get More Sales", desc: "Reach the right people at the right time." },
    { title: "Works While You Sleep", desc: "Your marketing runs 24/7 without you lifting a finger." },
]

export default function Benefits() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primaryGlow/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Why Use <span className="text-accent">AI Marketing</span>?
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, borderColor: '#7c3aed' }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 group cursor-default"
                        >
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primaryGlow transition-colors">{item.title}</h3>
                            <p className="text-softText/80">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
