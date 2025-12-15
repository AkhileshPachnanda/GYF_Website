import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative bg-white border-2 border-black rounded-xl p-6 shadow-brutalist hover:shadow-brutalist-lg hover:-translate-y-1 transition-all duration-200"
        >
            <div className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {/* Decorative element on hover */}
                <div className="w-12 h-12 bg-brand-green rounded-full border-2 border-black" />
            </div>

            <div className="w-14 h-14 bg-brand-cream border-2 border-black rounded-lg flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Icon size={28} className="text-black group-hover:text-white transition-colors" />
            </div>

            <h3 className="text-2xl font-serif font-bold mb-3 text-black">{title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{description}</p>
        </motion.div>
    );
}
