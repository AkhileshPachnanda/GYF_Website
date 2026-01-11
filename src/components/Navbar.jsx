import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Using null to signify initial state where nav is visible
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Blog', path: '/blog' },
        { name: 'Docs', path: '/docs' },
        { name: 'About', path: '/about' },
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            {/* Desktop Navbar (Floating & Scroll-aware) */}
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed w-full z-50 top-6 px-4 pointer-events-none hidden md:block"
            >
                <div className="max-w-[850px] mx-auto pointer-events-auto">
                    <div className="relative overflow-hidden bg-black/50 backdrop-blur-3xl border border-white/5 shadow-[0_8px_32px_rgba(139,92,246,0.15)] rounded-full px-6 py-3 flex items-center justify-between group">
                        {/* Purple Tint Gradient */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />

                        {/* Logo - Serif Text */}
                        <Link to="/" className="relative z-10 text-2xl font-serif font-black italic tracking-tighter hover:scale-105 transition-transform text-white">
                            GYF.
                        </Link>

                        {/* Desktop Nav Links */}
                        <ul className="flex items-center gap-6 font-medium text-sm relative z-10">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`transition-all duration-300 relative ${location.pathname === link.path
                                            ? 'text-white font-bold'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue"
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link to="/docs" className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-brand-blue transition-colors">
                            Get API <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Bottom FAB Navbar */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 active:scale-90 transition-transform"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 100%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 100%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 100%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-brand-cream flex flex-col items-center justify-center md:hidden"
                    >
                        <ul className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-4xl font-serif font-bold ${location.pathname === link.path
                                            ? 'text-brand-blue'
                                            : 'text-black'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-8">
                                <Link
                                    to="/docs"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000]"
                                >
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
