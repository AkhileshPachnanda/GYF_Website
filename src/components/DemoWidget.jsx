import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, CheckCircle, Shirt, Loader2 } from 'lucide-react';

export default function DemoWidget() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        { text: "Upload Image", icon: Scan, color: "text-gray-400" },
        { text: "Scanning...", icon: Loader2, color: "text-brand-blue animate-spin" },
        { text: "Analyzing Fit", icon: Shirt, color: "text-brand-blue" },
        { text: "Match Found!", icon: CheckCircle, color: "text-brand-blue" },
    ];

    return (
        <div className="bg-white border-2 border-black rounded-3xl p-6 w-full max-w-sm mx-auto shadow-brutalist-lg relative overflow-hidden">
            {/* Decorative Badge */}
            <div className="absolute top-4 right-4 bg-brand-blue border border-black px-2 py-1 text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Live
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-4">
                <h3 className="text-black text-xl font-serif font-bold italic mb-6">API Playground</h3>

                <div className="w-64 h-80 bg-brand-cream border-2 border-dashed border-black rounded-xl flex flex-col items-center justify-center relative overflow-hidden mb-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className={`w-24 h-24 rounded-full bg-white border-2 border-black flex items-center justify-center mb-4 ${step === 2 ? 'animate-pulse' : ''} shadow-brutalist-sm`}>
                                {(() => {
                                    const IconComponent = steps[step].icon;
                                    return <IconComponent size={44} className={steps[step].color} />;
                                })()}
                            </div>
                            <p className="text-color-brand-cream font-bold text-xl">{steps[step].text}</p>
                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-2 text-xs font-bold bg-brand-blue text-white px-3 py-1 rounded-full border border-black"
                                >
                                    Size M • 98% Confidence
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {step === 1 && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-brand-blue border-b border-black"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    )}
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full border border-black overflow-hidden">
                    <motion.div
                        className="h-full bg-brand-blue"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((step + 1) / 4) * 100}%` }}
                    />
                </div>

                <div className="mt-6 w-full text-left bg-black p-4 rounded-lg border-2 border-gray-800 shadow-brutalist-sm transform -rotate-1">
                    <div className="flex gap-1.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
                    </div>
                    <p className="font-mono text-xs text-brand-blue">{`> Get Your Fit Today.`}</p>
                    <p className="font-mono text-xs text-white">{`> 200 OK (${step * 150}ms)`}</p>
                </div>
            </div>
        </div>
    );
}
