import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    React.useEffect(() => {
        document.title = 'Contact | 100xSolution';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // I'll use a public way or suggest one
        formData.append("name", formState.name);
        formData.append("email", formState.email);
        formData.append("message", formState.message);
        formData.append("subject", "New Contact from 100xSolution");
        formData.append("from_name", "100xSolution Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
                setFormState({ name: '', email: '', message: '' });
            } else {
                console.error("Error", data);
                alert("Something went wrong. Please try again or email us directly.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Network error. Please check your connection.");
        }
    };

    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Let's Scale <span className="text-primaryGlow">Together</span>
                    </motion.h1>
                    <p className="text-xl text-softText/60 max-w-2xl mx-auto">
                        Ready to multiply your results by 100? Reach out and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primaryGlow/10 rounded-xl flex items-center justify-center text-primaryGlow">
                                        📧
                                    </div>
                                    <div>
                                        <div className="text-sm text-softText/50">Email us at</div>
                                        <div className="text-white font-medium">100xsolutions.team@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primaryGlow/10 rounded-xl flex items-center justify-center text-primaryGlow">
                                        📞
                                    </div>
                                    <div>
                                        <div className="text-sm text-softText/50">Call our direct line</div>
                                        <div className="text-white font-medium">+91 90575 83676</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primaryGlow/10 rounded-xl flex items-center justify-center text-primaryGlow">
                                        📍
                                    </div>
                                    <div>
                                        <div className="text-sm text-softText/50">Visit our office</div>
                                        <div className="text-white font-medium">San Francisco, CA</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-primaryGlow/10 to-transparent border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Follow Our Journey</h3>
                            <div className="flex gap-4">
                                {/* Simplified social icons for brevity */}
                                {['Twitter', 'LinkedIn', 'Instagram'].map(platform => (
                                    <a key={platform} href="#" className="px-4 py-2 bg-white/5 rounded-lg text-sm text-softText hover:bg-primaryGlow hover:text-black transition-colors">
                                        {platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-softText/60 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primaryGlow focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-softText/60 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primaryGlow focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-softText/60 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primaryGlow focus:outline-none transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primaryGlow text-black rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all active:scale-95"
                            >
                                Send Message
                            </button>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-sm font-medium"
                                >
                                    Message sent successfully! We'll be in touch soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
