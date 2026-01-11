import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
        >
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue/50 group-hover:scale-105 transition-all duration-500 relative z-10">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{description}</p>
        </motion.div>
    );
}
