import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative bg-white border-2 border-black rounded-3xl p-8 hover:shadow-brutalist hover:-translate-y-2 transition-all duration-300"
        >
            <div className="w-14 h-14 bg-brand-cream border border-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-black group-hover:scale-110 transition-all duration-300 relative z-10">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{description}</p>
        </motion.div>
    );
}
