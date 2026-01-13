import { Shirt, ScanFace, BarChart3, Layers, Wand2, Smartphone } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

export default function Solutions() {
    const solutions = [
        {
            icon: Shirt,
            title: "Virtual Styling Engine",
            description: "Our core styling engine is being developed using graph neural networks to understand fashion compatibility. Coming in beta.",
        },
        {
            icon: ScanFace,
            title: "Skin Tone Analysis",
            description: "Computer vision algorithms to detect skin undertones in varying lighting conditions. Currently in development.",
        },
        {
            icon: BarChart3,
            title: "Fit Intelligence",
            description: "We're building ML models to map garment dimensions to user body measurements for accurate fit predictions.",
        },
        {
            icon: Layers,
            title: "Wardrobe Digitization",
            description: "Turn user photos into a digital inventory with automatic background removal and tagging.",
        },
        {
            icon: Wand2,
            title: "Outfit Generation",
            description: "Automatically create complete looks for any occasion. In active development.",
        },
        {
            icon: Smartphone,
            title: "Mobile SDK",
            description: "Drop-in iOS and Android components for AR try-on experiences. Planned for future release.",
        }
    ];

    return (
        <div className="py-24 max-w-[1280px] mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    Our <span className="underline decoration-wavy decoration-brand-blue underline-offset-8 decoration-4">Technology</span>
                </h1>
                <p className="text-xl text-gray-400">
                    A comprehensive suite of AI tools in development to modernize the fashion retail stack. Join our beta to help shape the future.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((sol, idx) => (
                    <FeatureCard
                        key={idx}
                        icon={sol.icon}
                        title={sol.title}
                        description={sol.description}
                        delay={idx * 0.1}
                    />
                ))}
            </div>
        </div>
    );
}
