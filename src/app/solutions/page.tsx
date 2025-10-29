import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import { TrendingUp, Music, Film, Shield, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Solutions = () => {
    const solutions = [
        {
            icon: TrendingUp,
            title: "OTT / Streaming Platforms",
            description: "Scalable content solutions for streaming services",
            features: [
                "High-volume content processing",
                "Multi-language localization at scale",
                "Automated workflow integration",
                "Quality assurance systems",
                "Fast turnaround times",
                "Custom metadata management",
            ],
            benefits: "Launch content globally with confidence. Our AI-powered workflows handle large volumes while maintaining consistent quality across all deliverables.",
        },
        {
            icon: Music,
            title: "Music Labels & Creators",
            description: "Creative video production for music industry",
            features: [
                "Music video editing and production",
                "Album and single artwork design",
                "Social media content creation",
                "Lyric video production",
                "Behind-the-scenes content",
                "Multi-platform optimization",
            ],
            benefits: "Elevate your music with stunning visuals. From concept to final delivery, we create content that amplifies your artistic vision and engages your audience.",
        },
        {
            icon: Film,
            title: "Production Houses",
            description: "Complete post-production services",
            features: [
                "Feature film editing",
                "Sound design and mixing",
                "Color grading and DI",
                "VFX and motion graphics",
                "Trailer and promo creation",
                "Festival-ready deliverables",
            ],
            benefits: "Partner with us for world-class post-production. Our experienced team handles everything from rough cut to final delivery, ensuring your vision reaches the screen perfectly.",
        },
        {
            icon: Shield,
            title: "Media Houses",
            description: "Enterprise-grade media services",
            features: [
                "News and documentary post-production",
                "Multi-platform content adaptation",
                "Real-time collaboration tools",
                "Secure content management",
                "White-label solutions",
                "Dedicated account management",
            ],
            benefits: "Streamline your media operations with our enterprise solutions. Scalable, secure, and designed to meet the demands of high-volume content production.",
        },
    ];

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title="Tailored"
                highlightedText="Solutions"
                subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
            />

            {/* Solutions */}
            {solutions.map((solution, index) => (
                <section key={solution.title} className="section-container">
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-left`}>
                            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                                <solution.icon className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4">{solution.title}</h2>
                            <p className="text-xl text-muted-foreground mb-6">{solution.description}</p>
                            <p className="text-muted-foreground mb-8">{solution.benefits}</p>
                            <Button href="/contact" title="Get Started" className="btn-primary" />
                        </div>
                        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-right`}>
                            <div className="glass-card">
                                <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                                <ul className="space-y-4">
                                    {solution.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Choose Our Solutions */}
            <section className="section-container">
                <div className="glass-card max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Our Solutions?</h2>
                        <p className="text-xl text-muted-foreground">
                            We understand the unique challenges of each industry
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Industry Expertise", desc: "Deep understanding of sector-specific requirements and workflows" },
                            { title: "Scalable Technology", desc: "AI-powered solutions that grow with your business" },
                            { title: "Flexible Integration", desc: "Seamlessly integrate with your existing systems and processes" },
                            { title: "Dedicated Support", desc: "Account managers and technical support tailored to your needs" },
                            { title: "Cost-Effective", desc: "Optimize your production costs without compromising quality" },
                            { title: "Global Reach", desc: "Serve audiences worldwide with our localization capabilities" },
                        ].map((item, index) => (
                            <div key={item.title} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-container">
                <div className="glass-card text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-glow" />
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
                        <p className="text-xl text-muted-foreground mb-6">
                            Let&apos;s discuss how our tailored solutions can accelerate your success
                        </p>
                        <Button href="/contact" title="Schedule a Consultation" className="btn-primary" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
