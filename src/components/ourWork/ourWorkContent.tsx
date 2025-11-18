"use client"
import React from 'react'
import WorkCard from "@/components/WorkCard";
import postProductionImg from "@/assets/post-production.jpg";
import localizationImg from "@/assets/localization.jpg";
import musicVideoImg from "@/assets/music-video.jpg";
import {
    Music,
    Tv,
    Mic,
    PlayCircle,
    Car,
    Grid2X2,
    Trophy,
} from "lucide-react";
import ScrollableTabs from '../ui/scrollableTabs';

interface TabItem {
    icon: React.ElementType;
    label: string;
}

const tabsData: TabItem[] = [
    { icon: Grid2X2, label: "All" },
    { icon: PlayCircle, label: "Films" },
    { icon: Tv, label: "Web Series" },
    { icon: Mic, label: "Podcasts" },
    { icon: Trophy, label: "Live Matches" },
    { icon: Music, label: "Music Videos" },
    { icon: Car, label: "Automobile" },
    { icon: Tv, label: "Documentaries" },
    { icon: PlayCircle, label: "Short Films" },
    { icon: Mic, label: "Talk Shows" },
    { icon: Trophy, label: "Sports Highlights" },
    { icon: Grid2X2, label: "Entertainment" },
];

const visualPromotionWorks = [
    { title: "Epic Fantasy Series Key Art", category: "Key Art", imageUrl: postProductionImg, description: "Stunning promotional artwork for major streaming series" },
    { title: "Action Thriller Trailer", category: "Trailer Editing", imageUrl: postProductionImg, description: "High-octane trailer that generated 5M+ views" },
    { title: "Documentary Sizzle Reel", category: "Promo Editing", imageUrl: postProductionImg, description: "Compelling promotional content for award-winning documentary" },
    { title: "Social Media Campaign", category: "Social Creatives", imageUrl: postProductionImg, description: "Viral social media content for film launch" },
    { title: "Award-Winning Feature Film", category: "Film Editing", imageUrl: postProductionImg, description: "Complete post-production for festival favorite" },
    { title: "Mystery Web Series", category: "Color Grading", imageUrl: postProductionImg, description: "Cinematic color grading for streaming hit" },
    { title: "Sci-Fi Thriller Sound Design", category: "Sound Design", imageUrl: postProductionImg, description: "Immersive 5.1 surround sound experience" },
    { title: "Fantasy Epic VFX", category: "VFX", imageUrl: postProductionImg, description: "200+ VFX shots for major production" },
    { title: "Global Series Localisation", category: "Multi-language", imageUrl: localizationImg, description: "Subtitling and dubbing in 15+ languages" },
    { title: "Documentary Translation", category: "Translation", imageUrl: localizationImg, description: "Professional translation for international release" },
    { title: "Feature Film Dubbing", category: "Dubbing", imageUrl: localizationImg, description: "Native voice actors for authentic localization" },
    { title: "Streaming Platform Subtitles", category: "Subtitling", imageUrl: localizationImg, description: "SDH and closed captions for accessibility" },
    { title: "Pop Artist Music Video", category: "Music Video", imageUrl: musicVideoImg, description: "Vibrant editing for chart-topping single" },
    { title: "Rock Band Album Art", category: "Key Art", imageUrl: musicVideoImg, description: "Bold visual identity for album release" },
    { title: "Hip-Hop Release Teaser", category: "Promo", imageUrl: musicVideoImg, description: "Hype-building teaser for major release" },
    { title: "Indie Artist Social Content", category: "Social Media", imageUrl: musicVideoImg, description: "Engaging content for artist's social channels" },
];

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Film Director",
        quote:
            "Cocoma Studios brought our vision to life with incredible attention to detail. Their post-production work is simply outstanding.",
    },
    {
        name: "David Chen",
        role: "OTT Platform Manager",
        quote:
            "Their localization services helped us reach global audiences. Professional, efficient, and always on time.",
    },
    {
        name: "Maria Garcia",
        role: "Music Producer",
        quote:
            "The music video team at Cocoma is phenomenal. They understand the creative vision and deliver beyond expectations.",
    },
];


const OurWorkContent = () => {
    return (
        <>
            {/* Portfolio Tabs */}
            <section className="section-container w-full flex flex-col justify-center items-center gap-10 md:gap-20">
                <ScrollableTabs tabs={tabsData} />

                <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visualPromotionWorks.map((work, index) => (
                        <div key={work.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <WorkCard
                                title={work.title}
                                category={work.category}
                                imageUrl={work.imageUrl}
                                description={work.description}
                            />
                        </div>
                    ))}
                </div>

            </section>

            {/* Testimonials */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-xl text-muted-foreground">
                        Trusted by creators worldwide
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={item.name}
                            className="glass-card animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <p className="text-muted-foreground mb-4 italic">
                                &quot;{item.quote}&quot;
                            </p>

                            <div className="border-t border-border pt-4">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurWorkContent