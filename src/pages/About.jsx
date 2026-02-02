import React from 'react';
import { motion as Motion } from 'framer-motion';

const About = () => {
    React.useEffect(() => {
        document.title = 'About Us | 100xSolution';
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            We Are <span className="text-primaryGlow">100xSolution</span>
                        </h1>
                        <p className="text-xl text-softText/70 leading-relaxed mb-6">
                            Founded at the intersection of marketing excellence and silicon-valley technology, we believe that the future of business belongs to those who embrace AI.
                        </p>
                        <p className="text-lg text-softText/60 leading-relaxed mb-8">
                            Our mission is to democratize high-end AI marketing tools for businesses of all sizes, enabling them to compete with industry giants without the need for massive technical teams.
                        </p>
                        <div className="flex gap-12 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-primaryGlow">100x</div>
                                <div className="text-sm text-softText/50">Growth Rate</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primaryGlow">500+</div>
                                <div className="text-sm text-softText/50">Clients Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primaryGlow">24/7</div>
                                <div className="text-sm text-softText/50">AI Support</div>
                            </div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-primaryGlow/20 to-accent/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent)] blur-3xl"></div>
                            <div className="text-primaryGlow/40 text-9xl font-bold rotate-12">AI</div>
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="w-full h-full rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                    <p className="text-softText/60">
                                        To be the bridge between human creativity and artificial intelligence, creating a world where no good idea fails due to lack of marketing reach.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decortive elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primaryGlow/20 rounded-full blur-2xl"></div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
