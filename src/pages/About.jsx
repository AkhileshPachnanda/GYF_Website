import { motion } from 'framer-motion';
import { Shield, Users, Globe, Award } from 'lucide-react';

export default function About() {
    const stats = [
        { label: "Beta Users", value: "50+" },
        { label: "Test Analyses Run", value: "1K+" },
        { label: "In Development", value: "MVP" },
        { label: "Founded in", value: "2025" },
    ];

    return (
        <div className="pb-24">
            {/* Header */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6 text-white"
                    >
                        We're building the future of <br />
                        <span className="text-brand-blue underline decoration-wavy decoration-brand-blue underline-offset-8">how people try on clothes.</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        We're in beta, building technology to help fashion brands reduce returns and boost customer confidence through AI-powered fit and style recommendations.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="max-w-[1280px] mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-4xl font-bold text-white mb-2 font-serif">{stat.value}</div>
                            <div className="text-sm text-brand-blue uppercase tracking-wider font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sub-sections */}
            <section className="py-24 max-w-[1280px] mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold mb-8 text-white">Built by Engineers & Stylists</h2>

                    <ul className="grid md:grid-cols-2 gap-6 text-left">
                        {[
                            "Proprietary Computer Vision Models",
                            "Diverse Training Data Sets",
                            "Sustainability Focused",
                            "Privacy First Architecture"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 font-medium text-lg bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center shrink-0">
                                    <Users size={16} className="text-brand-blue" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
