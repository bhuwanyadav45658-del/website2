import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const webServices = [
    {
        title: 'Custom Web Development',
        description: 'Bespoke, high-performance websites built with the latest technologies to ensure your brand stands out in the digital landscape.',
        icon: '💻',
        path: '/services/web-dev'
    },
    {
        title: 'Progressive Web Apps',
        description: 'Application-like experiences in the browser that work offline, load instantly, and provide high engagement across all devices.',
        icon: '📱',
        path: '/services/web-dev'
    },
    {
        title: 'E-com Solutions',
        description: 'Scalable, secure e-commerce platforms designed to maximize conversions and streamline your online sales process.',
        icon: '🛍️',
        path: '/services/web-dev'
    }
];

const aiServices = [
    {
        title: 'Custom AI Agents',
        description: 'Develop intelligent agents tailored to your specific business needs, from customer support to complex decision-making tasks.',
        icon: '🤖',
        path: '/services/ai-agents'
    },
    {
        title: 'AI Workflow Automation',
        description: 'Integrate AI into your existing workflows to eliminate repetitive tasks, reduce errors, and multiply team productivity.',
        icon: '⚡',
        path: '/services/ai-agents'
    },
    {
        title: 'Intelligent Data Processing',
        description: 'Transform raw data into actionable insights using advanced machine learning models and automated processing pipelines.',
        icon: '🧠',
        path: '/services/ai-agents'
    }
];

const Services = () => {
    useEffect(() => {
        document.title = 'Services | 100xSolution Web & AI';
    }, []);

    const ServiceCard = ({ service, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primaryGlow/50 transition-all hover:bg-white/10 group active:scale-[0.98] cursor-pointer relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-primaryGlow text-2xl"
                >
                    →
                </motion.span>
            </div>

            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primaryGlow transition-colors">{service.title}</h3>
            <p className="text-softText/70 leading-relaxed mb-6">
                {service.description}
            </p>
            <Link to={service.path} className="inline-flex items-center gap-2 text-primaryGlow font-semibold hover:gap-4 transition-all">
                Learn More <span>→</span>
            </Link>
        </motion.div>
    );

    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Powering Your <span className="text-primaryGlow">Digital Future</span>
                    </h1>
                    <p className="text-xl text-softText/60 max-w-3xl mx-auto">
                        From high-performance web infrastructure to cutting-edge AI integration, we build the tools that scale your business.
                    </p>
                </motion.div>

                {/* Web & Apps Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                        <span className="w-12 h-1 bg-primaryGlow rounded-full"></span>
                        Websites & Web Apps
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {webServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* AI & Agents Section */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                        <span className="w-12 h-1 bg-accent rounded-full"></span>
                        AI Integration & Agent Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {aiServices.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
