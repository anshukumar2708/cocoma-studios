
import HeroSection from "@/components/ui/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";
import OurWorkContent from "@/components/ourWork/ourWorkContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work | Cocoma Studios – Case Studies, Campaigns & Creative Projects",
    description:
        "Explore Cocoma Studios’ portfolio of digital campaigns and creative projects crafted for brands, OTT platforms, and content creators. From YouTube growth to cinematic storytelling, discover how our work blends strategy, design, and production to deliver measurable results.",
    keywords: [
        "Cocoma Studios work",
        "Cocoma portfolio",
        "creative case studies",
        "digital campaigns",
        "OTT marketing projects",
        "video production showcase",
        "YouTube content strategy",
        "brand storytelling examples",
        "Cocoma Digital projects",
        "Cocoma Studios campaigns",
    ],
    openGraph: {
        title:
            "Our Work | Cocoma Studios – Case Studies, Campaigns & Creative Projects",
        description:
            "Dive into Cocoma Studios’ most impactful work — from brand campaigns and OTT marketing to YouTube content strategies and full-scale video production.",
        url: "https://www.cocomastudios.com/work",
        siteName: "Cocoma Studios",
        images: [
            {
                url: "/og/our-work-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Cocoma Studios – Our Work",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Our Work | Cocoma Studios – Digital Campaigns & Creative Case Studies",
        description:
            "See how Cocoma Studios transforms ideas into award-worthy digital experiences — from YouTube growth campaigns to cinematic brand storytelling.",
        images: ["/og/our-work-banner.jpg"],
    },
};



const Work = () => {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title="Our"
                highlightedText="Work"
                subtitle="Explore our portfolio of successful projects across visual promotion, post-production, localisation, and music videos"
            />

            {/* Our work content category tabs & cards */}
            <OurWorkContent />
        </div>
    );
};

export default Work;
