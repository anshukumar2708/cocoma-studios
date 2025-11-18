"use client";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink";
import ReactPlayer from "react-player";

interface HeroSectionProps {
    heroBg: string | StaticImageData;
    highlightedText: string;
    title?: string;
    subtitle: string;
    videoUrl?: string;
    primaryBtn?: {
        href: string;
        title: string;
    };
    secondaryBtn?: {
        href: string;
        title: string;
    };
}

const HeroSection: React.FC<HeroSectionProps> = ({
    heroBg,
    highlightedText,
    title,
    subtitle,
    videoUrl,
    primaryBtn,
    secondaryBtn,
}) => {
    const pathname = usePathname();

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                {videoUrl ? (
                    <ReactPlayer
                        src={videoUrl}
                        playing
                        loop
                        muted
                        controls={false}
                        width="100%"
                        height="100%"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        src={heroBg}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-30"
                        fill
                        priority
                    />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <div className="animate-fade-in">

                    {pathname === "/" ? (
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="gradient-text">{highlightedText}</span>
                            <br />
                            {title}
                        </h1>
                    ) : (
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            {title} <span className="gradient-text">{highlightedText}</span>
                        </h1>
                    )}

                    <p
                        className={`text-xl ${pathname === "/" ? "sm:text-2xl" : ""
                            } text-muted-foreground max-w-3xl mx-auto mb-8`}
                    >
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryBtn && (
                            <CustomLink
                                href={primaryBtn.href}
                                title={primaryBtn.title}
                                className="btn-secondary"
                            />
                        )}
                        {secondaryBtn && (
                            <CustomLink
                                href={secondaryBtn.href}
                                title={secondaryBtn.title}
                                className="btn-primary"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
