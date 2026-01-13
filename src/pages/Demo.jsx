
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Loader2, Shirt, Scan, CheckCircle, AlertCircle, Sparkles, MoveRight, ShoppingBag, ExternalLink, Star } from 'lucide-react';
import axios from 'axios';

export default function Demo() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [step, setStep] = useState(0); // 0: Upload, 1: Scanning, 2: Form, 3: Analyzing, 4: Match

    // Form State
    const [budget, setBudget] = useState('4000');
    const [prompt, setPrompt] = useState('');

    const steps = [
        { text: "Upload Image", icon: Upload, color: "text-gray-400" },
        { text: "Scanning...", icon: Scan, color: "text-brand-blue animate-pulse" },
        { text: "Preferences", icon: Sparkles, color: "text-brand-blue" },
        { text: "Analyzing Fit", icon: Loader2, color: "text-brand-blue animate-spin" },
        { text: "Match Found!", icon: CheckCircle, color: "text-brand-blue" },
    ];

    const budgetOptions = [
        { value: '4000', label: '< ₹4k', desc: 'Budget' },
        { value: '8000', label: '₹4k-8k', desc: 'Moderate' },
        { value: '16000', label: '₹8k-16k', desc: 'Premium' },
        { value: '30000', label: '₹16k+', desc: 'Luxury' }
    ];

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) processFile(selectedFile);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files[0];
        if (selectedFile) processFile(selectedFile);
    };

    const processFile = (selectedFile) => {
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
        setError(null);
        setResult(null);
        setStep(1); // Start Scanning

        // Simulate Scanning delay then show Form
        setTimeout(() => {
            setStep(2); // Show Form
        }, 1500);
    };

    const handleSubmit = async () => {
        if (!file) return;

        setStep(3); // Analyzing
        setError(null);

        const formData = new FormData();
        formData.append('image', file);
        formData.append('budget', budget);
        formData.append('prompt', prompt || "Generate a stylish outfit");

        try {
            const response = await axios.post('/api/v1/recommendation/get-recommendations', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-api-key': 'DEMO_KEY'
                },
            });

            if (response.data.success) {
                setResult(response.data.data);
                setStep(4); // Match Found
            } else {
                setError('Failed. Try again.');
                setStep(0);
            }
        } catch (err) {
            console.error(err);
            setError('Error connecting to server.');
            setStep(0);
        }
    };

    // Process results for the rich grid view
    const processedOutfits = useMemo(() => {
        if (!result || !result.recommendations) return [];

        return result.recommendations.map(rec => {
            // Flatten items structure for display
            const allItems = [];
            rec.items.forEach(group => {
                Object.entries(group).forEach(([category, item]) => {
                    allItems.push({
                        ...item,
                        category,
                        price: item.price || Math.floor(Math.random() * 3000) + 500 // Mock price if missing
                    });
                });
            });

            const totalPrice = allItems.reduce((acc, item) => acc + item.price, 0);

            return {
                ...rec,
                allItems,
                totalPrice
            };
        });
    }, [result]);


    return (
        <div className="min-h-screen pt-32 pb-24 px-4 bg-brand-cream text-white flex flex-col items-center">

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-serif font-bold text-black mb-12 text-center"
            >
                Try the <span className="text-brand-blue underline decoration-wavy decoration-black underline-offset-4">Demo</span>
            </motion.h1>

            {/* Widget Container */}
            <div className={`bg - white border - 2 border - black rounded - 3xl p - 6 w - full shadow - brutalist - lg relative overflow - hidden transition - all duration - 500 ${step === 2 ? 'max-w-2xl' : 'max-w-sm'} `}>
                {/* Decorative Badge */}
                <div className="absolute top-4 right-4 bg-brand-blue border border-black px-2 py-1 text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white z-20">
                    Live
                </div>

                <div className="relative z-10 flex flex-col items-center text-center mt-4">
                    <h3 className="text-black text-xl font-serif font-bold italic mb-6">API Playground</h3>

                    {/* Main Interaction Area */}
                    <div className="w-full relative min-h-[320px] flex flex-col items-center">

                        {/* STEP 0 & 1: UPLOAD & SCANNING */}
                        <AnimatePresence mode="wait">
                            {(step === 0 || step === 1 || step === 3 || step === 4) && (
                                <motion.div
                                    key="upload-zone"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`w - 64 h - 80 bg - brand - cream border - 2 border - dashed border - black rounded - xl flex flex - col items - center justify - center relative overflow - hidden cursor - pointer hover: bg - gray - 50 transition - colors mx - auto`}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                >
                                    {/* Hidden Input */}
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        disabled={step !== 0}
                                    />

                                    {/* Preview */}
                                    {preview && (
                                        <motion.img
                                            src={preview}
                                            alt="Preview"
                                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
                                        />
                                    )}

                                    {/* Icon & Label */}
                                    <div className={`flex flex - col items - center z - 20 pointer - events - none`}>
                                        <div className={`w - 24 h - 24 rounded - full bg - white border - 2 border - black flex items - center justify - center mb - 4 shadow - brutalist - sm ${step === 1 || step === 3 ? 'animate-pulse' : ''} `}>
                                            {(() => {
                                                const currentStep = step === 4 ? 4 : (step === 3 ? 3 : (step === 1 ? 1 : 0));
                                                const Icon = steps[currentStep].icon;
                                                return <Icon size={44} className={steps[currentStep].color} />;
                                            })()}
                                        </div>
                                        <p className="text-black font-bold text-xl">{steps[step === 4 ? 4 : (step === 3 ? 3 : (step === 1 ? 1 : 0))].text}</p>
                                    </div>

                                    {/* Scanning Line */}
                                    {(step === 1 || step === 3) && (
                                        <motion.div
                                            className="absolute top-0 left-0 w-full h-1 bg-brand-blue border-b border-black z-20"
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    )}
                                </motion.div>
                            )}

                            {/* STEP 2: PREFERENCES FORM */}
                            {step === 2 && (
                                <motion.div
                                    key="pref-form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="w-full text-left"
                                >
                                    <div className="flex gap-6">
                                        {/* Image Thumbnail */}
                                        <div className="hidden sm:block w-1/3">
                                            <div className="aspect-[3/4] rounded-xl border-2 border-black overflow-hidden relative">
                                                <img src={preview} alt="Upload" className="w-full h-full object-cover" />
                                                <button
                                                    onClick={() => { setStep(0); setFile(null); setPreview(null); }}
                                                    className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-red-500 transition-colors"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Form Fields */}
                                        <div className="flex-1 space-y-6">
                                            <div>
                                                <label className="text-black font-bold text-sm uppercase tracking-wider mb-3 block"> Budget (₹)</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {budgetOptions.map(opt => (
                                                        <button
                                                            key={opt.value}
                                                            onClick={() => setBudget(opt.value)}
                                                            className={`border - 2 rounded - lg py - 2 px - 1 text - center transition - all ${budget === opt.value
                                                                ? 'bg-brand-blue border-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[1px] translate-y-[1px]'
                                                                : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                                                                } `}
                                                        >
                                                            <div className="font-bold text-sm bg-transparent">{opt.label}</div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-black font-bold text-sm uppercase tracking-wider mb-3 block">Style Goal</label>
                                                <textarea
                                                    value={prompt}
                                                    onChange={(e) => setPrompt(e.target.value)}
                                                    placeholder="e.g. 'Office party casual'..."
                                                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-3 text-black font-sans focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue resize-none h-24"
                                                />
                                            </div>

                                            <button
                                                onClick={handleSubmit}
                                                className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-[4px_4px_0px_0px_#8b5cf6] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#8b5cf6] transition-all flex items-center justify-center gap-2"
                                            >
                                                <Sparkles size={20} /> Generate Outfits
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* Progress Indicator (Only for non-form steps) */}
                    {step !== 2 && (
                        <div className="mt-6 w-full bg-gray-200 h-3 rounded-full border border-black overflow-hidden relative">
                            <motion.div
                                className="h-full bg-brand-blue"
                                initial={{ width: "0%" }}
                                animate={{ width: `${((step + 1) / 5) * 100}% ` }}
                            />
                        </div>
                    )}

                    {/* Console Log */}
                    <div className="mt-6 w-full text-left bg-black p-4 rounded-lg border-2 border-gray-800 shadow-brutalist-sm transform -rotate-1">
                        <div className="flex gap-1.5 mb-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
                        </div>
                        <p className="font-mono text-xs text-brand-blue">
                            {step === 0 && "> Ready. Waiting for file..."}
                            {step === 1 && "> Reading binary data..."}
                            {step === 2 && "> User input required."}
                            {step === 3 && "> POST /api/v1/recommendation..."}
                            {step === 4 && "> 200 OK. Rendering results."}
                            {error && <span className="text-red-500 ml-2">Error: {error}</span>}
                        </p>
                    </div>
                    {/* Reset Button (Only when finished) */}
                    {step === 4 && (
                        <button
                            onClick={() => { setStep(0); setFile(null); setPreview(null); setResult(null); setPrompt(''); }}
                            className="mt-4 text-sm underline text-gray-500 hover:text-black"
                        >
                            Reset / Start Over
                        </button>
                    )}
                </div>
            </div>

            {/* Enhanced Results Section */}
            <AnimatePresence>
                {result && step === 4 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-20 w-full max-w-7xl"
                    >
                        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                            <div>
                                <h2 className="text-4xl font-serif font-bold mb-2">Your Recommendations</h2>
                                <p className="text-gray-400">Curated based on your style profile & budget.</p>
                            </div>
                            <div className="hidden md:flex gap-4">
                                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Budget</div>
                                    <div className="font-bold font-mono text-brand-blue">₹{budget}</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Goal</div>
                                    <div className="font-bold">{prompt || "General Style"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {processedOutfits.map((outfit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]"
                                >
                                    {/* Image Area */}
                                    <div className="aspect-[3/4] relative overflow-hidden bg-black/20">
                                        {/* Main Outfit Image */}
                                        <img
                                            src={outfit.image_url}
                                            alt={outfit.title}
                                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                        />

                                        {/* Match Badge */}
                                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-xl">
                                            <Star size={14} className="text-brand-blue fill-brand-blue" />
                                            <span className="text-sm font-bold">{(outfit.confidence_score * 100).toFixed(0)}% Match</span>
                                        </div>

                                        {/* Items Overlay (On Hover) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {outfit.allItems.slice(0, 2).map((item, idx) => (
                                                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-2 flex items-center justify-between border border-white/5">
                                                        <span className="text-sm font-medium truncate max-w-[150px]">{item.class}</span>
                                                        <span className="text-xs text-brand-blue font-mono font-bold">₹{item.price}</span>
                                                    </div>
                                                ))}
                                                {outfit.allItems.length > 2 && (
                                                    <div className="text-xs text-center text-gray-400">+ {outfit.allItems.length - 2} more items</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6">
                                        <h3 className="font-serif font-bold text-xl mb-4 leading-tight min-h-[3rem] line-clamp-2">{outfit.title}</h3>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <div>
                                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Est. Total</div>
                                                <div className="text-2xl font-bold font-mono text-white">₹{outfit.totalPrice.toLocaleString()}</div>
                                            </div>

                                            <button className="bg-white text-black p-3 rounded-xl hover:bg-brand-blue hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

