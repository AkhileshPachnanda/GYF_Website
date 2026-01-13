import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function WaitlistForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        useCase: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const useCases = [
        'E-commerce Store',
        'Fashion Brand',
        'Personal Styling App',
        'Retail Platform',
        'Other'
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.useCase) {
            newErrors.useCase = 'Please select a use case';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus('submitting');

        // Simulate API call - replace with actual backend integration
        setTimeout(() => {
            console.log('Waitlist submission:', formData);
            setStatus('success');

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', company: '', useCase: '' });
                setStatus('idle');
                onClose();
            }, 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] max-w-md w-full overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Header */}
                            <div className="bg-brand-blue border-b-4 border-black p-8 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -translate-y-12 -translate-x-12"
                                />

                                <Sparkles className="mx-auto mb-4 text-white" size={40} />
                                <h2 className="text-3xl font-serif font-black text-white mb-2">Join the Beta!</h2>
                                <p className="text-white/90 font-medium">Be among the first to revolutionize fashion tech</p>
                            </div>

                            {/* Form Content */}
                            <div className="p-8">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-center py-8"
                                    >
                                        <CheckCircle className="mx-auto mb-4 text-green-600" size={64} />
                                        <h3 className="text-2xl font-bold mb-2 text-black">You're on the list! 🎉</h3>
                                        <p className="text-gray-700">We'll be in touch soon with early access details.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold mb-2 text-black">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white border-2 text-black placeholder:text-gray-400 ${errors.name ? 'border-red-500' : 'border-black'
                                                    } rounded-lg font-medium focus:outline-none focus:border-brand-blue transition-colors`}
                                                placeholder="Jane Doe"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle size={14} /> {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold mb-2 text-black">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white border-2 text-black placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'border-black'
                                                    } rounded-lg font-medium focus:outline-none focus:border-brand-blue transition-colors`}
                                                placeholder="jane@company.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle size={14} /> {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Company Field */}
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-bold mb-2 text-black">
                                                Company <span className="text-gray-500 font-normal">(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg font-medium text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                                                placeholder="Acme Fashion Co."
                                            />
                                        </div>

                                        {/* Use Case Field */}
                                        <div>
                                            <label htmlFor="useCase" className="block text-sm font-bold mb-2 text-black">
                                                Use Case *
                                            </label>
                                            <select
                                                id="useCase"
                                                name="useCase"
                                                value={formData.useCase}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 bg-white border-2 text-black ${errors.useCase ? 'border-red-500' : 'border-black'
                                                    } rounded-lg font-medium focus:outline-none focus:border-brand-blue transition-colors`}
                                            >
                                                <option value="" className="text-gray-400">Select your use case</option>
                                                {useCases.map(useCase => (
                                                    <option key={useCase} value={useCase}>{useCase}</option>
                                                ))}
                                            </select>
                                            {errors.useCase && (
                                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                    <AlertCircle size={14} /> {errors.useCase}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    Joining...
                                                </span>
                                            ) : (
                                                'Join Beta Waitlist'
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-600 text-center">
                                            We respect your privacy. No spam, ever. 🔒
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
