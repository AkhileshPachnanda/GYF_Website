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
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
                        Our mission is to reduce fashion waste and boost confidence by helping everyone find their perfect fit, regardless of body type or size.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y-2 border-black bg-brand-green/10">
                <div className="max-w-[1280px] mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-4xl font-bold text-black mb-2 font-serif">{stat.value}</div>
                            <div className="text-sm text-gray-700 uppercase tracking-wider font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sub-sections */}
            <section className="py-24 max-w-[1280px] mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-serif font-bold mb-6">Built by Engineers & Stylists</h2>

                        <ul className="space-y-4">
                            {[
                                "Proprietary Computer Vision Models",
                                "Diverse Training Data Sets",
                                "Sustainability Focused",
                                "Privacy First Architecture"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-black font-bold text-lg">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center">
                                        <Users size={16} className="text-brand-blue" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-black rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                        <div className="bg-brand-cream border-2 border-black p-8 rounded-3xl h-[400px] flex items-center justify-center relative z-10">
                            <span className="text-gray-500 font-mono font-bold">Team Photo Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
