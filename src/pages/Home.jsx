import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import DemoWidget from '../components/DemoWidget';
import FeatureCard from '../components/FeatureCard';

import { Squiggle, Star, Ribbon, Circle } from '../components/FloatingElements';
import { Shirt, ScanFace, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

export default function Home() {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        const query = `*[_type == "page" && slug.current == "home"][0]{
            pageBuilder[]{
                _type,
                badge,
                heading,
                highlightedWord,
                subheading,
                primaryCta,
                secondaryCta
            }
        }`;

        client.fetch(query)
            .then(data => {
                const hero = data?.pageBuilder?.find(b => b._type === 'hero');
                if (hero) setHeroData(hero);
            })
            .catch(console.error);
    }, []);

    // Defaults
    const badge = heroData?.badge || "Powering 500+ Brands";
    const heading = heroData?.heading || "We're changing how the world tries on";
    const highlight = heroData?.highlightedWord || "clothes.";
    const subheading = heroData?.subheading || "The API layer for bold fashion brands. Visual styling, fit recommendations, and skin tone analysis that actually works.";
    const cta1 = heroData?.primaryCta || "Start Building";
    const cta2 = heroData?.secondaryCta || "Book Demo";

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden min-h-[90vh] flex items-center">
                {/* Floating Elements - Dark & Glowy */}
                <Ribbon className="top-20 right-0 w-64 h-32 text-brand-blue opacity-30 rotate-12 blur-xl" />
                <Star className="top-40 left-10 w-16 h-16 text-brand-blue opacity-40 blur-lg" delay={0.5} />

                <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-white text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" /> {badge}
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] mb-8 text-white tracking-tight">
                            {heading} <br /><span className="font-bold italic text-brand-blue underline decoration-wavy decoration-white underline-offset-8">{highlight}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
                            {subheading}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/docs" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 text-lg border border-brand-blue/50 group">
                                {cta1} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="px-8 py-4 rounded-xl font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-lg text-white backdrop-blur-sm">
                                {cta2}
                            </Link>
                        </div>

                        <div className="mt-10 flex gap-6 text-sm font-bold border-t border-black/10 pt-6 inline-flex">
                            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-brand-blue rounded-full border border-black"></div> API Access</div>
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
                        <Circle className="w-96 h-96 bg-brand-blue/20 -top-10 -right-10 border-white/20" />
                        <DemoWidget />
                    </motion.div>
                </div>
            </section>

            {/* Marquee Social Proof */}
            <section className="py-6 border-y-2 border-black bg-brand-blue overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap">
                    {/* Repeating Brand Names */}
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-2xl font-black font-serif italic text-black uppercase">
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
                        <h2 className="text-5xl md:text-6xl font-serif font-black mb-6">Built for <span className="underline decoration-wavy decoration-brand-blue underline-offset-10">Scale</span></h2>
                        <p className="text-color-brand-cream text-xl font-medium">
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
                        <Circle className="w-48 h-48 bg-black/20 top-10 right-20 border-black" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 text-white italic">
                                Ready to revolutionize?
                            </h2>
                            <p className="text-xl text-brand-cream/90 mb-12 max-w-2xl mx-auto font-medium">
                                Join the waitlist for V2. It's gonna be huge.
                            </p>
                            <button className="bg-white text-black text-xl font-medium px-12 py-5 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:translate-y-[-2px] transition-all">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
