import React from "react";
import Image from "next/image";
import {
    Sparkles,
    Users,
    Clock,
    Globe,
    Headphones,
    TrendingUp,
} from "lucide-react";

type IconType = React.ComponentType<React.ComponentProps<"svg">>;

type Feature = {
    icon: IconType;
    title: string;
    subtitle: string;
    bg?: string;
    image: string;
};

const features: Feature[] = [
    {
        icon: Sparkles,
        title: "AI-Powered Workflow",
        subtitle: "Leverage advanced AI for faster, smarter production Leverage advanced AI for faster, smarter production",
        image: "/free/camera1.jpg",
    },
    {
        icon: Users,
        title: "Industry Veterans",
        subtitle: "Team of award-winning professionals Leverage advanced AI for faster, smarter production",
        image: "/free/camera2.jpg",
    },
    {
        icon: Clock,
        title: "Quick Turnaround",
        subtitle: "Meet tight deadlines without compromising quality Leverage advanced AI for faster, smarter production",
        image: "/free/camera1.jpg",
    },
    {
        icon: Globe,
        title: "International Expertise",
        subtitle: "Global reach for worldwide productions Leverage advanced AI for faster, smarter production",
        image: "/free/camera2.jpg",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        subtitle: "Round-the-clock assistance for global clients Leverage advanced AI for faster, smarter production",
        image: "/free/camera1.jpg",
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        subtitle: "From indie projects to large-scale productions Leverage advanced AI for faster, smarter production",
        image: "/free/camera2.jpg",
    },
];

export default function WhyChooseCocoma(): JSX.Element {
    return (
        <section className="w-full mx-auto">
            <div className="text-center mb-16">
                <h2 className="page-title">
                    Why Choose Cocoma Studios?
                </h2>
                <p className="mt-2 page-description">
                    Excellence powered by cutting-edge AI technology Excellence powered by cutting-edge AI technology
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, index) => {
                    const Icon = item?.icon;
                    return (
                        <article
                            key={index}
                            className="relative rounded-lg md:rounded-2xl overflow-hidden group shadow-lg transition-transform duration-300 hover:-translate-y-2"
                            aria-labelledby={`feature-${index}`}
                        >
                            {/* Background image */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={item?.image}
                                    alt={item?.title}
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Light overlay — brighter on hover */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 transition-all duration-500 group-hover:bg-white/20"
                                    style={{ background: "rgba(255,255,255,0.12)" }}
                                />
                            </div>

                            {/* Glassy content */}
                            <div className="w-full relative z-10 p-4 md:p-6 bg-black/30 backdrop-blur-sm border border-white/6 rounded-2xl h-full flex flex-col justify-start items-center gap-4">

                                {/* Icon + Title */}
                                <div className="w-full flex-shrink-0 flex justify-start items-center gap-4 mb-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3
                                        className="text-white md:text-xl lg:text-2xl font-semibold leading-tight transition-colors duration-300 group-hover:text-primary"
                                    >
                                        {item?.title}
                                    </h3>
                                </div>

                                {/* Subtitle */}
                                <p className="w-full text-base text-white/75">
                                    {item?.subtitle}
                                </p>
                            </div>
                        </article>

                    );
                })}
            </div>
        </section>
    );
}
