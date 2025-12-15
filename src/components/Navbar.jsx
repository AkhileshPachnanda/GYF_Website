import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Docs', path: '/docs' },
        { name: 'About', path: '/about' },
    ];

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="fixed w-full z-50 top-6 px-4 pointer-events-none">
            <div className="max-w-[1280px] mx-auto pointer-events-auto">
                <div className="bg-white border-2 border-black shadow-brutalist rounded-full px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="font-serif text-3xl font-bold italic tracking-tighter text-black">
                            GYF.
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm transition-all hover:bg-brand-green hover:px-2 hover:py-1 hover:-rotate-2 rounded-md border border-transparent hover:border-black ${location.pathname === link.path
                                                ? 'font-bold underline decoration-2 decoration-brand-blue underline-offset-4'
                                                : 'text-gray-600 hover:text-black'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 bg-brand-blue text-white px-6 py-2 rounded-full font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
                            Get API Access <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-full"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-4 right-4 pointer-events-auto"
                    >
                        <div className="bg-white border-2 border-black shadow-brutalist-lg rounded-2xl p-6 overflow-hidden">
                            <ul className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={`block text-xl font-serif font-bold ${location.pathname === link.path
                                                    ? 'text-brand-blue'
                                                    : 'text-black'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <button className="w-full flex items-center justify-center gap-2 bg-brand-green text-black border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] px-5 py-3 rounded-xl font-bold transition-all mt-4">
                                        Get API Access <ArrowRight size={18} />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
