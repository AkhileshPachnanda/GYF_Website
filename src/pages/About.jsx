import { motion } from 'framer-motion';
import { Shield, Users, Globe, Award } from 'lucide-react';

export default function About() {
    const stats = [
        { label: "Partner Brands", value: "500+" },
        { label: "Daily Recommendations", value: "1M+" },
        { label: "Countries Supported", value: "30+" },
        { label: "Team Members", value: "45" },
    ];

    return (
        <div className="pb-24">
            {/* Header */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-coral/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-[1280px] mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        We're changing how the <br />
                        <span className="text-brand-coral">world tries on clothes.</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Our mission is to reduce fashion waste and boost confidence by helping everyone find their perfect fit, regardless of body type or size.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-white/10 bg-white/[0.02]">
                <div className="max-w-[1280px] mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sub-sections */}
            <section className="py-24 max-w-[1280px] mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Built by Engineers & Stylists</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            GYF was founded in 2024 by a team of ex-FAANG engineers and fashion industry veterans who saw a massive gap in how e-commerce handles sizing. Existing size charts are broken; we built a visual intelligence layer to fix them.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Proprietary Computer Vision Models",
                                "Diverse Training Data Sets",
                                "Sustainability Focused",
                                "Privacy First Architecture"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-coral/20 flex items-center justify-center">
                                        <Users size={14} className="text-brand-coral" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-coral/20 to-transparent rounded-2xl" />
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-[400px] flex items-center justify-center">
                            <span className="text-gray-600 font-mono">Team Photo Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
