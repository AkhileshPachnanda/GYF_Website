import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import WaitlistForm from './WaitlistForm';

export default function Footer() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    const socialLinks = [
        { Icon: Linkedin, href: 'https://www.linkedin.com/company/get-your-fit-g-y-f/', label: 'LinkedIn' },
        { Icon: Instagram, href: 'https://www.instagram.com/gyf.ltd?igsh=MThzeTMzcmo2ZWEzNg==', label: 'Instagram' },
        { Icon: Mail, href: 'mailto:hello@getyourfit.tech', label: 'Email' },
    ];

    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-[1100px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-serif font-black italic text-white mb-4 tracking-tighter">GYF.</h2>
                        <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
                            Building the API layer for fashion brands. Join our beta program to shape the future of AI-powered styling and fit recommendations.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-gray-400">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        {
                            title: "Solutions", links: [
                                { name: "Virtual Styling", path: "#" },
                                { name: "Fit Recommendations", path: "#" },
                                { name: "Skin Tone Analysis", path: "#" },
                                { name: "API Integration", path: "#" }
                            ]
                        },
                        {
                            title: "Company", links: [
                                { name: "Home", path: "/" },
                                { name: "Solutions", path: "/solutions" },
                                { name: "Blog", path: "/blog" },
                                { name: "About", path: "/about" }
                            ]
                        }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{col.title}</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="hover:text-brand-blue transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Join Beta</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Be the first to know when we launch. Early access perks included.
                        </p>
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="w-full bg-brand-blue text-white font-bold py-2.5 rounded-lg hover:bg-brand-blue/90 transition-colors text-sm shadow-md"
                        >
                            Join Waitlist
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Get Your Fit. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Waitlist Form Modal */}
            <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </footer>
    );
}
