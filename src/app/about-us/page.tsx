import { Users, Target, Award, Zap, Heart, Globe2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import HeroSection from "@/components/ui/HeroSection";

const About = () => {
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
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
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
                    <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <div className="glass-card">
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
                    <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A diverse team of creative professionals and technical experts from around the world
                    </p>
                </div>

                <div className="glass-card max-w-4xl mx-auto text-center">
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
