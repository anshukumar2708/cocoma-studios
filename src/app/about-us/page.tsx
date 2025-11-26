import { Users, Target, Award, Zap, Heart, Globe2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import HeroSection from "@/components/ui/HeroSection";
import { Metadata } from "next";
import satyam from "@/assets/satyam.jpeg";
import vyom from "@/assets/vyom.jpg";
// import rajesh from "@/assets/rajesh.jpeg";
import OurTeamCard from "@/components/our-team/our-team";

const values = [
    { icon: Target, title: "Excellence", description: "Delivering world-class quality in every project" },
    { icon: Zap, title: "Innovation", description: "Pioneering AI-powered production workflows" },
    { icon: Heart, title: "Passion", description: "Driven by love for storytelling and creativity" },
    { icon: Globe2, title: "Global Reach", description: "Serving clients worldwide with local expertise" },
];

const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Countries Served" },
    { number: "100+", label: "Team Members" },
    { number: "15+", label: "Years Experience" },
];

export const metadata: Metadata = {
    title: "About Us | Cocoma Studios – Creative Minds Behind Films, Brands & OTT",
    description:
        "Learn about Cocoma Studios, a creative digital agency that blends storytelling, design, and technology to power growth for brands, OTT platforms, and creators. Our team of filmmakers, strategists, and designers craft campaigns that inspire emotion and deliver measurable impact.",
    keywords: [
        "About Cocoma Studios",
        "Cocoma Digital team",
        "creative agency India",
        "film marketing experts",
        "OTT campaign strategy",
        "digital storytelling agency",
        "YouTube content marketing",
        "video production company",
        "brand communication",
        "Cocoma Studios team",
    ],
    openGraph: {
        title: "About Cocoma Studios | Meet the Creative Digital Agency Behind the Vision",
        description:
            "Discover the story of Cocoma Studios — a team of creators, storytellers, and strategists dedicated to shaping how audiences connect with brands, films, and entertainment online.",
        url: "https://www.cocomastudios.com/about",
        siteName: "Cocoma Studios",
        images: [
            {
                url: "/og/about-us-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Cocoma Studios – About Us",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Cocoma Studios | The Team Powering Creative Digital Campaigns",
        description:
            "Meet the people, passion, and process behind Cocoma Studios — a creative digital agency specializing in brand storytelling and entertainment marketing.",
        images: ["/og/about-us-banner.jpg"],
    },
};

const ourTeamData = [
    { name: "Satyam Kumar", imageUrl: satyam, designation: "Backend Developer", experience: "3 Years" },
    { name: "Satyam Kumar", imageUrl: satyam, designation: "Backend Developer", experience: "4 Years" },
    { name: "Satyam Kumar", imageUrl: satyam, designation: "Backend Developer", experience: "2 Years" },
    { name: "Satyam Kumar", imageUrl: satyam, designation: "Backend Developer", experience: "5 Years" },
    { name: "Satyam Kumar", imageUrl: satyam, designation: "Backend Developer", experience: "3 Years" },
    { name: "Satyam Kumar", imageUrl: vyom, designation: "Backend Developer", experience: "6 Years" },
    { name: "Satyam Kumar", imageUrl: vyom, designation: "Backend Developer", experience: "7 Years" },
    { name: "Satyam Kumar", imageUrl: vyom, designation: "Backend Developer", experience: "4 Years" },
    { name: "Satyam Kumar", imageUrl: vyom, designation: "Backend Developer", experience: "5 Years" },
    { name: "Satyam Kumar", imageUrl: vyom, designation: "Backend Developer", experience: "8 Years" },
];


const About = () => {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title="About"
                highlightedText="Cocoma Studios"
                subtitle="We are an AI-powered international post-production and localisation company
                            dedicated to bringing creative visions to life with cutting-edge technology
                            and unparalleled expertise."
            />

            {/* Story Section */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-left">
                        <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Founded with a vision to revolutionize the post-production industry, Cocoma Studios has grown from a small creative team into a global powerhouse serving clients across 50+ countries.
                            </p>
                            <p>
                                Our journey began with a simple belief: that technology and artistry should work hand in hand to create extraordinary content. Today, we combine the precision of AI with the creativity of seasoned professionals to deliver exceptional results.
                            </p>
                            <p>
                                From indie filmmakers to major production houses, OTT platforms to music labels, we&apos;ve helped countless creators tell their stories to global audiences through our comprehensive post-production and localisation services.
                            </p>
                        </div>
                    </div>
                    <div className="glass-card animate-fade-in-right">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                            <Award className="w-24 h-24 text-primary animate-glow" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-container">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card animate-fade-in">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-muted-foreground">
                            To empower storytellers worldwide with cutting-edge AI-powered post-production and localisation services, making professional-grade content creation accessible to all while maintaining the highest standards of quality and creativity.
                        </p>
                    </div>
                    <div className="glass-card animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-muted-foreground">
                            To be the world&apos;s leading AI-powered post-production studio, bridging cultures and languages through exceptional content, while pioneering innovative workflows that shape the future of media production.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-container">
                <div className="text-center mb-16">
                    <h2 className="page-title">Our Core Values</h2>
                    <p className="page-description mt-2 mx-auto">
                        The principles that guide everything we do
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={value.title} className="glass-card hover-lift text-center group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <value.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="section-container">
                <div className="glass-card py-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-container">
                <div className="text-center mb-16">
                    <h2 className="page-title">Meet Our Team</h2>
                    <p className="page-description mt-2 mx-auto">
                        A diverse team of creative professionals and technical experts from around the world
                    </p>
                </div>

                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {ourTeamData?.map((team, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <OurTeamCard
                                name={team?.name}
                                imageUrl={team?.imageUrl}
                                designation={team?.designation}
                                experience={team?.experience}
                            />
                        </div>
                    ))}
                </div>

                <div className="glass-card max-full mx-auto text-center mt-16">
                    <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">100+ Creative Minds</h3>
                    <p className="text-muted-foreground mb-6">
                        Our team includes award-winning editors, sound designers, colorists, translators, and technical specialists who bring decades of combined experience to every project.
                    </p>
                    <p className="text-muted-foreground">
                        With representatives across multiple continents and expertise in over 50 languages, we&apos;re truly a global team united by a passion for excellence in post-production.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
