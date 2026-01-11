import { motion } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Docs() {
    const [copied, setCopied] = useState(false);

    const codeSnippet = `
// Initialize the GYF Client
const client = new GYFClient('{API_KEY}');

// Analyze an image
const result = await client.analyze({
  imageUrl: 'https://example.com/photo.jpg',
  userPreferences: {
    style: 'casual',
    fit: 'relaxed'
  }
});

console.log(result.recommendations);
`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="py-16 max-w-[1280px] mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
                {/* Sidebar */}
                <div className="lg:col-span-1 hidden lg:block">
                    <h3 className="font-bold text-white mb-4">Documentation</h3>
                    <ul className="space-y-3 text-sm text-gray-400 border-l border-white/10 pl-4">
                        <li className="text-brand-blue border-l border-brand-blue -ml-[17px] pl-4 font-bold">Quick Start</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Authentication</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Endpoints</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Models</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Errors</li>
                    </ul>
                </div>

                {/* Content */}
                <div className="lg:col-span-4">
                    <h1 className="text-4xl font-bold mb-6 text-white">
                        <span className="underline decoration-wavy decoration-brand-blue underline-offset-8 decoration-4">Quick Start</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Get up and running with the GYF API in less than 5 minutes.
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Installation</h2>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300 backdrop-blur-sm">
                                npm install @gyf-tech/sdk
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Analysis Request</h2>
                            <p className="text-gray-400 mb-4">
                                Submit an image URL to our core analysis engine to get fit predictions and style tags.
                            </p>

                            <div className="relative group">
                                <div className="absolute top-4 right-4 z-10">
                                    <button
                                        onClick={copyToClipboard}
                                        className="p-2 rounded bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"
                                    >
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                                <pre className="bg-[#0f0f11] border border-white/10 rounded-xl p-6 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed shadow-lg">
                                    <code>{codeSnippet.trim()}</code>
                                </pre>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Response Object</h2>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                                <ul className="space-y-2 font-mono text-sm text-gray-400">
                                    <li><span className="text-purple-400">id</span>: "ana_8f92j39"</li>
                                    <li><span className="text-purple-400">status</span>: "completed"</li>
                                    <li><span className="text-purple-400">confidence</span>: 0.985</li>
                                    <li><span className="text-purple-400">body_type</span>: "hourglass"</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
