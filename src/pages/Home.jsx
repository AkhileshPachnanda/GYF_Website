import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import DemoWidget from '../components/DemoWidget';
import FeatureCard from '../components/FeatureCard';

import { Squiggle, Star, Ribbon, Circle } from '../components/FloatingElements';
import { Shirt, ScanFace, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                {/* Floating Elements */}

                {/* Top Right Ribbon */}
                <Ribbon className="top-20 right-0 w-64 h-32 text-brand-blue opacity-80 rotate-12" />

                {/* Left Side Elements */}
                <Star className="top-40 left-10 w-16 h-16 text-brand-green" delay={0.5} />
                <Squiggle className="top-1/2 left-0 w-48 text-black opacity-20 -rotate-45" />

                <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-bold uppercase tracking-wider mb-8 transform -rotate-2">
                            <Sparkles size={14} /> Powering 500+ Brands
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] mb-8 text-black">
                            We're changing how the world tries on  <span className="underline decoration-wavy decoration-brand-blue underline-offset-8">clothes. </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-xl font-medium">
                            The API layer for bold fashion brands. Visual styling, fit recommendations, and skin tone analysis that actually works.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/docs" className="bg-brand-black text-white px-8 py-4 rounded-xl font-bold border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-lg">
                                Start Building <ArrowRight size={20} />
                            </Link>
                            <Link to="/about" className="px-8 py-4 rounded-xl font-bold border-2 border-black bg-white hover:bg-brand-cream hover:-translate-y-1 hover:shadow-brutalist transition-all text-lg">
                                Book Demo
                            </Link>
                        </div>

                        <div className="mt-10 flex gap-6 text-sm font-bold border-t-2 border-black pt-6 inline-flex">
                            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-brand-green rounded-full border border-black"></div> API Access</div>
                            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-brand-blue rounded-full border border-black"></div> 14-Day Free Trial</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center relative"
                    >
                        {/* Element behind widget */}
                        <Circle className="w-96 h-96 bg-brand-green/20 -top-10 -right-10 border-0" />
                        <DemoWidget />
                    </motion.div>
                </div>
            </section>

            {/* Marquee Social Proof */}
            <section className="py-6 border-y-2 border-black bg-brand-green overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap">
                    {/* Repeating Brand Names */}
                    {[...Array(10)].map((_, i) => (
                        <span className="text-2xl font-black font-serif italic text-black uppercase">
                            LOREM • IPSUM • DOLOR • SIT • AMET
                        </span>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 relative" id="features">
                {/* Background Squiggles */}
                <Squiggle className="top-20 right-20 w-32 text-brand-blue" />

                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-20 relative">
                        <Star className="-top-10 -left-10 w-12 h-12 text-black" />
                        <h2 className="text-5xl md:text-6xl font-serif font-black mb-6">Built for <span className="underline decoration-wavy decoration-brand-green underline-offset-10">Scale</span></h2>
                        <p className="text-gray-700 text-xl font-medium">
                            Heavy lifting done by us. Seamless experience for your users.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Shirt}
                            title="Virtual Styling"
                            description="Generate complete outfits based on single item selection using our compatibility engine."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={ScanFace}
                            title="Skin Tone Analysis"
                            description="Accurately detect skin undertones to recommend complementary color palettes."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={BarChart3}
                            title="Fit Intelligence"
                            description="Reduce returns by 40% with size recommendations that actually work across brands."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Real-time API"
                            description="Sub-100ms latency responses designed for high-traffic e-commerce storefronts."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 relative">
                <div className="max-w-[1280px] mx-auto px-4">
                    <div className="bg-brand-blue border-2 border-black shadow-brutalist-lg rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden group">
                        {/* Background Shapes */}
                        <Circle className="w-64 h-64 bg-white/10 top-0 left-0 border-white/20" />
                        <Circle className="w-48 h-48 bg-brand-green top-10 right-20 border-black" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 text-white italic">
                                Ready to revolutionize?
                            </h2>
                            <p className="text-xl text-brand-cream/90 mb-12 max-w-2xl mx-auto font-medium">
                                Join the waitlist for V2. It's gonna be huge.
                            </p>
                            <button className="bg-white text-black text-xl font-bold px-12 py-5 rounded-xl border-2 border-black shadow-brutalist hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all transform hover:rotate-1">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
