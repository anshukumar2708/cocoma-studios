import { Briefcase, MapPin, Clock, Heart, Users, Zap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/ui/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";
import CustomLink from "@/components/ui/CustomLink";
import { Metadata } from "next";
import { CallToAction } from "@/components/ui/ctaSection";

const positions = [
    {
        title: "Senior Video Editor",
        department: "Post-Production",
        location: "Remote / Los Angeles",
        type: "Full-time",
        description: "Join our editing team to work on major film and streaming projects.",
    },
    {
        title: "Color Grading Artist",
        department: "Post-Production",
        location: "Remote / London",
        type: "Full-time",
        description: "Create stunning cinematic looks for feature films and series.",
    },
    {
        title: "Sound Designer",
        department: "Audio",
        location: "Remote / Mumbai",
        type: "Full-time",
        description: "Design immersive audio experiences for diverse content.",
    },
    {
        title: "Localization Project Manager",
        department: "Localization",
        location: "Remote",
        type: "Full-time",
        description: "Manage multi-language projects for global clients.",
    },
    {
        title: "VFX Compositor",
        department: "VFX",
        location: "Remote / Vancouver",
        type: "Full-time",
        description: "Create seamless visual effects for film and television.",
    },
    {
        title: "Motion Graphics Designer",
        department: "Design",
        location: "Remote / Singapore",
        type: "Full-time",
        description: "Design engaging motion graphics and title sequences.",
    },
];

const benefits = [
    { icon: Heart, title: "Work-Life Balance", description: "Flexible hours and remote work options" },
    { icon: Zap, title: "Growth Opportunities", description: "Continuous learning and career development" },
    { icon: Users, title: "Amazing Team", description: "Collaborate with industry veterans" },
    { icon: Award, title: "Competitive Pay", description: "Industry-leading compensation and benefits" },
];

const values = [
    "Creativity and Innovation",
    "Collaboration and Teamwork",
    "Continuous Learning",
    "Quality Excellence",
    "Diversity and Inclusion",
    "Work-Life Harmony",
];

export const metadata: Metadata = {
    title: "Careers | Cocoma Studios – Join Our Creative & Technology Team",
    description:
        "Build your career at Cocoma Studios. Explore open positions in creative production, AI engineering, post-production, content strategy, design, VFX, and OTT technology. Work with a team shaping the future of digital media and entertainment.",

    keywords: [
        "Cocoma Studios careers",
        "media jobs",
        "film production jobs",
        "AI engineering jobs",
        "OTT platform careers",
        "video editing jobs",
        "VFX jobs",
        "creative jobs",
        "content creation jobs",
        "digital media careers",
        "Cocoma hiring",
        "work at Cocoma Studios",
    ],

    openGraph: {
        title:
            "Careers | Cocoma Studios – Work in Creative Media, AI, Post-Production & OTT Technology",
        description:
            "Join Cocoma Studios and build the future of media. We're hiring creators, editors, AI engineers, designers, and technical experts for high-impact roles in digital entertainment.",
        url: "https://www.cocomastudios.com/careers",
        siteName: "Cocoma Studios",
        images: [
            {
                url: "/og/careers-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Cocoma Studios Careers",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Careers at Cocoma Studios | Creative, Technical & Media Jobs",
        description:
            "Explore job opportunities at Cocoma Studios across creative, technical, and production teams — including editing, VFX, AI development, design, and OTT technology.",
        images: ["/og/careers-banner.jpg"],
    },
};

const Careers = () => {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title="Join"
                highlightedText="Our Team"
                subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
            />

            {/* Why Work With Us */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Why Cocoma Studios?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join a company that values creativity, innovation, and your personal growth
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <Card key={benefit.title} className="glass-card hover-lift text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </Card>
                    ))}
                </div>

                <div className="glass-card max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Our Core Values</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {values.map((value, index) => (
                            <div key={value} className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-muted-foreground">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
                    <p className="text-xl text-muted-foreground">
                        Find your next opportunity with us
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {positions.map((position, index) => (
                        <Card key={position.title} className="glass-card hover-lift group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {position.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{position.department}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{position.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{position.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <CustomLink href="/hiring" title=" Apply Now" className="btn-primary" />
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Hiring Process */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Hiring Process</h2>
                    <p className="text-xl text-muted-foreground">
                        Simple, transparent, and designed to find the right fit
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        { step: "01", title: "Apply", description: "Submit your application and portfolio" },
                        { step: "02", title: "Review", description: "Our team reviews your submission" },
                        { step: "03", title: "Interview", description: "Virtual interview with the team" },
                        { step: "04", title: "Offer", description: "Welcome to Cocoma Studios!" },
                    ].map((stage, index) => (
                        <div key={stage.step} className="glass-card text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="text-5xl font-bold gradient-text mb-4">{stage.step}</div>
                            <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                            <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <CallToAction
                title="Don&apos;t See a Perfect Match"
                description="We&apos;re always looking for talented individuals. Send us your portfolio!"
                primaryLink={{ href: "/hiring", title: "Submit General Application" }}
            />
        </div>
    );
};

export default Careers;
