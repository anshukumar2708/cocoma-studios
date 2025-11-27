import { Film, Sparkles, Globe, Image, Scissors, Mic2, Palette, Wand2, Languages, FileText, Headphones } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";
import { Metadata } from "next";
import { CallToAction } from "@/components/ui/ctaSection";
import Service from "@/components/services/service";

export const metadata: Metadata = {
    title: "Our Services | Cocoma Studios – Digital Strategy, Video Production & OTT Marketing",
    description:
        "Explore the range of creative digital services offered by Cocoma Studios — from YouTube growth and content strategy to OTT campaign marketing, brand design, and full-scale video production. We help brands and creators craft stories that captivate and convert.",
    keywords: [
        "Cocoma Studios services",
        "digital marketing agency",
        "video production",
        "OTT campaign management",
        "YouTube growth strategy",
        "brand identity design",
        "content creation",
        "performance marketing for creators",
        "social media strategy",
        "Cocoma Digital services",
    ],
    openGraph: {
        title: "Our Services | Cocoma Studios – Digital Strategy, Video Production & OTT Marketing",
        description: "From concept to campaign — Cocoma Studios delivers creative digital solutions for brands, OTT platforms, and content creators. Discover how we transform ideas into high-impact campaigns.",
        url: "https://www.cocomastudios.com/services",
        siteName: "Cocoma Studios",
        images: [{ url: "/og/services-banner.jpg", width: 1200, height: 630, alt: "Cocoma Studios – Services" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cocoma Studios Services | Creative Strategy, Design & Video Production",
        description: "Discover Cocoma Studios’ suite of digital services — YouTube growth, OTT marketing, video production, and brand storytelling crafted for impact.",
        images: ["/og/services-banner.jpg"],
    },
};

const serviceData = [
    {
        id: "visual-promotion",
        title: "Visual Promotion",
        subtitle: "Create compelling visual content that captures attention and drives engagement",
        services: [
            {
                icon: Image,
                title: "Key Art Development",
                description: "Stunning visual designs for posters, thumbnails, and promotional materials",
                items: ["Poster Design", "Thumbnail Creation", "Digital Banners", "Social Assets"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Film,
                title: "Trailer & Teaser Editing",
                description: "Captivating trailers that drive engagement and build anticipation",
                items: ["Film Trailers", "Web Series Teasers", "Launch Promos", "Highlight Reels"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
            {
                icon: Sparkles,
                title: "Promo & Sizzle Editing",
                description: "Dynamic promotional content optimized for all platforms",
                items: ["Brand Promos", "Sizzle Reels", "Event Coverage", "Campaign Videos"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Wand2,
                title: "Social Media Creatives",
                description: "Engaging content tailored for social media platforms",
                items: ["Instagram Reels", "YouTube Shorts", "TikTok Content", "Story Formats"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
        ],
    },

    {
        id: "post-production",
        title: "Post-Production Services",
        subtitle: "Professional editing, sound design, color grading, and VFX for films, web series, and more",
        services: [
            {
                icon: Scissors,
                title: "Film & Web Series Editing",
                description: "Professional editing services for all formats and genres",
                items: ["Feature Films", "Web Series", "Documentaries", "Short Films"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Mic2,
                title: "Sound Design & Mixing",
                description: "Immersive audio experiences with professional sound engineering",
                items: ["Sound Design", "Audio Mixing", "Mastering", "Foley Work"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
            {
                icon: Palette,
                title: "Color Grading / DI Services",
                description: "Cinematic color grading and digital intermediate services",
                items: ["Color Correction", "Creative Grading", "DI Workflow", "HDR Mastering"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Wand2,
                title: "Motion Graphics & VFX",
                description: "Stunning visual effects and motion graphics",
                items: ["VFX Compositing", "Motion Graphics", "3D Animation", "Title Design"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
        ],
    },

    {
        id: "localisation",
        title: "Localisation Services",
        subtitle: "Bridge language barriers with professional transcription, translation, subtitling, and dubbing",
        services: [
            {
                icon: FileText,
                title: "Transcription",
                description: "Accurate transcription services in multiple languages",
                items: ["Audio Transcription", "Video Transcription", "Time-coded Scripts", "Format Conversion"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Languages,
                title: "Translation",
                description: "Professional translation by native speakers",
                items: ["Script Translation", "Document Translation", "Cultural Adaptation", "Quality Assurance"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
            {
                icon: Globe,
                title: "Subtitling",
                description: "Precise subtitling and closed captioning services",
                items: ["Open Subtitles", "Closed Captions", "SDH Subtitles", "Multi-language Subs"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Mic2,
                title: "Dubbing",
                description: "Professional dubbing with native voice actors",
                items: ["Voice Casting", "Lip Sync Dubbing", "Voice Direction", "Audio Mastering"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
            {
                icon: Headphones,
                title: "Audio Mix & Sound Design",
                description: "Complete audio post-production for localized content",
                items: ["Dialogue Mixing", "Music Integration", "Sound Effects", "Final Mix"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Globe,
                title: "Multi-language Administration",
                description: "End-to-end management of multi-language projects",
                items: ["Project Management", "Quality Control", "Asset Management", "Delivery Coordination"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
        ],
    },

    {
        id: "music-video",
        title: "Music Video Production",
        subtitle: "End-to-end music video production services from editing to promotional content",
        services: [
            {
                icon: Scissors,
                title: "Music Video Editing",
                description: "Creative editing for music videos across all genres",
                items: ["Narrative Editing", "Performance Cuts", "Effects Integration", "Multi-cam Editing"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Image,
                title: "Key Art for Songs",
                description: "Eye-catching visual designs for music releases",
                items: ["Album Covers", "Single Artwork", "Lyric Videos", "Visualizers"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
            {
                icon: Film,
                title: "Promo & Teaser Editing",
                description: "Promotional content to maximize music release impact",
                items: ["Release Teasers", "Behind-the-Scenes", "Social Promos", "Artist Features"],
                images: ["/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg"],
            },
            {
                icon: Sparkles,
                title: "Music Video Social Media",
                description: "Optimized content for social media platforms",
                items: ["Instagram Content", "YouTube Shorts", "TikTok Clips", "Reels & Stories"],
                images: ["/free/camera2.jpg", "/free/camera1.jpg", "/free/camera2.jpg", "/free/camera1.jpg"],
            },
        ],
    },
]


const Services = () => {
    return (
        <div className="min-h-screen">
            <HeroSection
                heroBg={heroBg}
                title="Our"
                highlightedText="Services"
                subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
            />

            {/* Services section */}
            <section className="w-full">
                <Service serviceData={serviceData} />
            </section>


            <CallToAction
                title="Ready to Get Started?"
                description="Let&apos;s discuss how our services can bring your project to life"
                primaryLink={{ href: "/contact-u", title: "Contact Us Today" }}
            />
        </div>
    );
};

export default Services;
