import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WebDev = () => {
    useEffect(() => {
        document.title = 'Custom Web Development | 100xSolution';
    }, []);

    const features = [
        { title: 'Responsive Design', desc: 'Flawless performance on mobile, tablet, and desktop.' },
        { title: 'SEO Optimized', desc: 'Built with search engines in mind to drive organic traffic.' },
        { title: 'Security First', desc: 'Modern encryption and protection for your digital assets.' },
        { title: 'Performance', desc: 'Ultra-fast load times using modern frameworks like React and Vite.' }
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        Custom <span className="text-primaryGlow">Web Development</span>
                    </h1>
                    <p className="text-xl text-softText/60 max-w-3xl leading-relaxed">
                        We don't just build websites; we build high-converting digital storefronts. Our development process focuses on scale, speed, and stunning aesthetics.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primaryGlow/30 transition-all hover:translate-y-[-5px]"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                            <p className="text-softText/60">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="p-12 rounded-[3rem] bg-gradient-to-br from-primaryGlow/10 to-transparent border border-white/5 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to build your dream site?</h2>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-primaryGlow text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all active:scale-95">
                        Start Project
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WebDev;
