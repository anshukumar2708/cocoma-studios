import { Film, Globe, Music, Sparkles, CheckCircle2, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import CustomLink from "@/components/ui/CustomLink";
import { Metadata } from "next";
import { CallToAction } from "@/components/ui/ctaSection";


const services = [
  {
    icon: Film,
    title: "Visual Promotion",
    description: "Create stunning key art, trailers, and social media content that captures attention.",
    items: ["Key Art Development", "Trailer & Teaser Editing", "Social Media Creatives"],
  },
  {
    icon: Sparkles,
    title: "Post-Production",
    description: "Complete editing, sound design, color grading, and VFX for films and web series.",
    items: ["Film & Web Series Editing", "Sound Design & Mixing", "Color Grading / DI"],
  },
  {
    icon: Globe,
    title: "Localisation Services",
    description: "Professional transcription, translation, subtitling, and dubbing in multiple languages.",
    items: ["Transcription & Translation", "Subtitling & Dubbing", "Multi-language Administration"],
  },
  {
    icon: Music,
    title: "Music Video Production",
    description: "End-to-end music video production, from concept to final delivery.",
    items: ["Music Video Editing", "Key Art Development", "Promo & Teaser Editing"],
  },
];

const solutions = [
  { icon: TrendingUp, title: "OTT/Streaming Platforms", description: "Scalable content solutions" },
  { icon: Music, title: "Music Labels & Creators", description: "Creative video production" },
  { icon: Film, title: "Production Houses", description: "Complete post-production" },
  { icon: Shield, title: "Media Houses", description: "Enterprise-grade services" },
];

export const metadata: Metadata = {
  title: "Cocoma Studios | Creative Digital Agency for Films, Brands & OTT",
  description:
    "Cocoma Studios is a creative digital agency that brings stories to life through strategy, design, and video production. We specialize in YouTube growth, brand storytelling, and OTT marketing for entertainment and creators. From concept to campaign, we craft visuals that connect, engage, and inspire.",
  keywords: [
    "Cocoma Studios",
    "digital agency",
    "video production",
    "YouTube marketing",
    "OTT campaigns",
    "brand storytelling",
    "creative design",
    "content strategy",
    "Amazon MiniTV marketing",
    "Cocoma Digital",
  ],
  openGraph: {
    title: "Cocoma Studios | Creative Digital Agency for Films, Brands & OTT",
    description:
      "We create high-impact campaigns for OTT, brands, and creators — blending design, storytelling, and strategy to deliver measurable results.",
    url: "https://www.cocomastudios.com",
    siteName: "Cocoma Studios",
    images: [
      {
        url: "/og/homepage-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Cocoma Studios – Creative Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocoma Studios | Digital Agency for Films & Brands",
    description:
      "Helping brands and creators grow through strategy, design, and digital storytelling.",
    images: ["/og/homepage-banner.jpg"],
  },
};


const Home = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSection
        heroBg={heroBg}
        highlightedText="AI-Powered"
        title="Post-Production Excellence"
        subtitle="International Post-Production and Localisation Company delivering cinematic quality across all platforms"
        primaryBtn={{ href: "/services", title: "Explore Services" }}
        secondaryBtn={{ href: "/contact", title: "Get in Touch" }}
      />

      {/* Services Overview */}
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your production needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center mt-12">
          <CustomLink href="/services" title="View All Services" className="btn-primary" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <div className="glass-card max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Cocoma Studios?</h2>
            <p className="text-xl text-muted-foreground">
              Excellence powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "AI-Powered Workflow", desc: "Leverage advanced AI for faster, smarter production" },
              { title: "International Expertise", desc: "Multi-language support with native speakers" },
              { title: "Industry Veterans", desc: "Team of award-winning professionals" },
              { title: "24/7 Support", desc: "Round-the-clock assistance for global clients" },
              { title: "Quick Turnaround", desc: "Meet tight deadlines without compromising quality" },
              { title: "Scalable Solutions", desc: "From indie projects to large-scale productions" },
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

      {/* Solutions */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tailored Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom services designed for your industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Link key={solution.title} href="/solutions">
              <div className="glass-card hover-lift text-center group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Launch Your Next Big Idea"
        description="Partner with our creative team to craft campaigns that stand out."
        primaryLink={{ href: "/get-started", title: "Get Started" }}
        secondaryLink={{ href: "/portfolio", title: "Explore Work" }}
      />

    </div>
  );
};

export default Home;

