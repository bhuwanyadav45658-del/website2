import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AIAgents = () => {
    useEffect(() => {
        document.title = 'Custom AI Agents | 100xSolution';
    }, []);

    const capabilities = [
        { title: 'Natural Language Processing', desc: 'Understand and respond to customer queries with human-like precision.' },
        { title: 'Task Automation', desc: 'Let your AI handle bookings, support, and repetitive data entry.' },
        { title: 'Knowledge Base', desc: 'Train your agent on your specific business documentation and rules.' },
        { title: '24/7 Availability', desc: 'Instant response times for your global audience, any time of day.' }
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                {/* Decorative background animation */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] z-0"
                />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16 relative z-10"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        Custom <span className="text-accent">AI Agents</span>
                    </h1>
                    <p className="text-xl text-softText/60 max-w-3xl leading-relaxed">
                        Scale your operations without increasing headcount. We develop intelligent AI agents that act as your virtual workforce, handling complex tasks and customer interactions with ease.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-20 relative z-10">
                    {capabilities.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform text-2xl">🤖</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{c.title}</h3>
                            <p className="text-softText/60">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-12 rounded-[3rem] bg-gradient-to-br from-accent/10 to-transparent border border-white/5 text-center relative z-10"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to automate your team?</h2>
                    <a href="/contact" className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all active:scale-95">
                        Build My Agent
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AIAgents;
