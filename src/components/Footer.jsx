import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-black pt-20 pb-10">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-4xl font-serif font-black italic text-black mb-6 tracking-tighter">GYF.</h2>
                        <p className="text-gray-600 font-medium mb-8 max-w-s line-spacing-1">
                            The API layer for bold fashion brands. Visual styling, fit recommendations, and skin tone analysis that actually works.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-brand-green border-2 border-black rounded-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-brutalist-sm transition-all text-black">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: "Solutions", links: ["Virtual Styling", "Fit Recommendations", "Skin Tone Analysis", "API Integration"] },
                        { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h3 className="text-black font-bold text-lg mb-6 uppercase tracking-wider border-b-2 border-brand-green inline-block">{col.title}</h3>
                            <ul className="space-y-3 font-medium text-gray-600">
                                {col.links.map((link) => (
                                    <li key={link}><Link to="#" className="hover:text-brand-blue hover:underline decoration-wavy transition-colors">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="text-black font-bold text-lg mb-6 uppercase tracking-wider border-b-2 border-brand-green inline-block">Stay Updated</h3>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white border-2 border-black rounded-lg px-4 py-3 font-medium focus:outline-none focus:shadow-brutalist transition-all"
                            />
                            <button className="bg-brand-black text-white font-bold py-3 rounded-lg border-2 border-black hover:bg-brand-blue hover:shadow-brutalist transition-all uppercase tracking-wide">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t-2 border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Get Your Fit. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-black hover:underline">Privacy Policy</Link>
                        <Link to="#" className="hover:text-black hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
