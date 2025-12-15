import { Shirt, ScanFace, BarChart3, Layers, Wand2, Smartphone } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

export default function Solutions() {
    const solutions = [
        {
            icon: Shirt,
            title: "Virtual Styling Engine",
            description: "Our core styling engine uses graph neural networks to understand fashion compatibility.",
        },
        {
            icon: ScanFace,
            title: "Skin Tone Analysis",
            description: "Proprietary computer vision algorithms detector skin undertones in varying lighting conditions.",
        },
        {
            icon: BarChart3,
            title: "Fit Intelligence",
            description: "Map garment dimensions to user body measurements with 96% accuracy.",
        },
        {
            icon: Layers,
            title: "Wardrobe Digitization",
            description: "Turn user photos into a digital inventory with automatic background removal and tagging.",
        },
        {
            icon: Wand2,
            title: "Outfit Generation",
            description: "Create complete looks for any occasion automatically.",
        },
        {
            icon: Smartphone,
            title: "Mobile SDK",
            description: "Drop-in iOS and Android components for AR try-on experiences.",
        }
    ];

    return (
        <div className="py-24 max-w-[1280px] mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Technology</h1>
                <p className="text-xl text-gray-600">
                    A comprehensive suite of AI tools designed to modernize the fashion retail stack.
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
