import { Film, Sparkles, Globe, Image, Scissors, Mic2, Palette, Wand2, Languages, FileText, Headphones } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/ui/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";
import CustomLink from "@/components/ui/CustomLink";

const Services = () => {
    const visualPromotion = [
        { icon: Image, title: "Key Art Development", description: "Stunning visual designs for posters, thumbnails, and promotional materials", items: ["Poster Design", "Thumbnail Creation", "Digital Banners", "Social Assets"] },
        { icon: Film, title: "Trailer & Teaser Editing", description: "Captivating trailers that drive engagement and build anticipation", items: ["Film Trailers", "Web Series Teasers", "Launch Promos", "Highlight Reels"] },
        { icon: Sparkles, title: "Promo & Sizzle Editing", description: "Dynamic promotional content optimized for all platforms", items: ["Brand Promos", "Sizzle Reels", "Event Coverage", "Campaign Videos"] },
        { icon: Wand2, title: "Social Media Creatives", description: "Engaging content tailored for social media platforms", items: ["Instagram Reels", "YouTube Shorts", "TikTok Content", "Story Formats"] },
    ];

    const postProduction = [
        { icon: Scissors, title: "Film & Web Series Editing", description: "Professional editing services for all formats and genres", items: ["Feature Films", "Web Series", "Documentaries", "Short Films"] },
        { icon: Mic2, title: "Sound Design & Mixing", description: "Immersive audio experiences with professional sound engineering", items: ["Sound Design", "Audio Mixing", "Mastering", "Foley Work"] },
        { icon: Palette, title: "Color Grading / DI Services", description: "Cinematic color grading and digital intermediate services", items: ["Color Correction", "Creative Grading", "DI Workflow", "HDR Mastering"] },
        { icon: Wand2, title: "Motion Graphics & VFX", description: "Stunning visual effects and motion graphics", items: ["VFX Compositing", "Motion Graphics", "3D Animation", "Title Design"] },
    ];

    const localisation = [
        { icon: FileText, title: "Transcription", description: "Accurate transcription services in multiple languages", items: ["Audio Transcription", "Video Transcription", "Time-coded Scripts", "Format Conversion"] },
        { icon: Languages, title: "Translation", description: "Professional translation by native speakers", items: ["Script Translation", "Document Translation", "Cultural Adaptation", "Quality Assurance"] },
        { icon: Globe, title: "Subtitling", description: "Precise subtitling and closed captioning services", items: ["Open Subtitles", "Closed Captions", "SDH Subtitles", "Multi-language Subs"] },
        { icon: Mic2, title: "Dubbing", description: "Professional dubbing with native voice actors", items: ["Voice Casting", "Lip Sync Dubbing", "Voice Direction", "Audio Mastering"] },
        { icon: Headphones, title: "Audio Mix & Sound Design", description: "Complete audio post-production for localized content", items: ["Dialogue Mixing", "Music Integration", "Sound Effects", "Final Mix"] },
        { icon: Globe, title: "Multi-language Administration", description: "End-to-end management of multi-language projects", items: ["Project Management", "Quality Control", "Asset Management", "Delivery Coordination"] },
    ];

    const musicVideo = [
        { icon: Scissors, title: "Music Video Editing", description: "Creative editing for music videos across all genres", items: ["Narrative Editing", "Performance Cuts", "Effects Integration", "Multi-cam Editing"] },
        { icon: Image, title: "Key Art for Songs", description: "Eye-catching visual designs for music releases", items: ["Album Covers", "Single Artwork", "Lyric Videos", "Visualizers"] },
        { icon: Film, title: "Promo & Teaser Editing", description: "Promotional content to maximize music release impact", items: ["Release Teasers", "Behind-the-Scenes", "Social Promos", "Artist Features"] },
        { icon: Sparkles, title: "Music Video Social Media", description: "Optimized content for social media platforms", items: ["Instagram Content", "YouTube Shorts", "TikTok Clips", "Reels & Stories"] },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title="Our"
                highlightedText="Services"
                subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
            />

            {/* Visual Promotion */}
            <section className="section-container">
                <div className="mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 text-center">Visual Promotion</h2>
                    <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
                        Create compelling visual content that captures attention and drives engagement
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visualPromotion.map((service, index) => (
                        <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Post-Production */}
            <section className="section-container">
                <div className="mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 text-center">Post-Production Services</h2>
                    <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
                        Professional editing, sound design, color grading, and VFX for films, web series, and more
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {postProduction.map((service, index) => (
                        <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Localisation */}
            <section className="section-container">
                <div className="mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 text-center">Localisation Services</h2>
                    <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
                        Bridge language barriers with professional transcription, translation, subtitling, and dubbing
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {localisation.map((service, index) => (
                        <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Music Video */}
            <section className="section-container">
                <div className="mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 text-center">Music Video Production</h2>
                    <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
                        End-to-end music video production services from editing to promotional content
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {musicVideo.map((service, index) => (
                        <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-container">
                <div className="glass-card text-center max-w-4xl mx-auto flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-muted-foreground mb-6">
                        Let&apos;s discuss how our services can bring your project to life
                    </p>
                    <CustomLink href="/contact" title="Contact Us Today" className="btn-primary inline-block" />
                </div>
            </section>
        </div>
    );
};

export default Services;
