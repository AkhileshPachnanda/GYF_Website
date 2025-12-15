import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-black pt-20 pb-10">
            <div className="max-w-[1100px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-serif font-black italic text-black mb-4 tracking-tighter">GYF.</h2>
                        <p className="text-gray-600 text-sm mb-6 max-w-xs leading-relaxed">
                            The API layer for bold fashion brands. Visual styling, fit recommendations, and skin tone analysis that actually works.
                        </p>
                        <div className="flex space-x-3">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 bg-black rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors text-white">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: "Solutions", links: ["Virtual Styling", "Fit Recommendations", "Skin Tone Analysis", "API Integration"] },
                        { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h3 className="text-black font-bold text-sm mb-4 uppercase tracking-wider">{col.title}</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {col.links.map((link) => (
                                    <li key={link}><Link to="#" className="hover:text-black transition-colors">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="text-black font-bold text-sm mb-4 uppercase tracking-wider">Stay Updated</h3>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                            />
                            <button className="bg-black text-white font-bold py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Get Your Fit. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-black">Privacy Policy</Link>
                        <Link to="#" className="hover:text-black">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
