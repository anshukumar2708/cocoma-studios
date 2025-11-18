import { Calendar, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import HeroSection from "@/components/ui/HeroSection";
import CustomLink from "@/components/ui/CustomLink";
import Image from "next/image";
import { CallToAction } from "@/components/ui/ctaSection";
import CategorySection from "@/components/blog/categorySection";
import { Metadata } from "next";

const posts = [
    {
        title: "The Future of AI in Post-Production",
        slug: "the-future-of-ai-in-post-production",
        excerpt:
            "Explore how artificial intelligence is revolutionizing the post-production industry and what it means for creators.",
        author: "Sarah Mitchell",
        date: "Oct 15, 2025",
        category: "Technology",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
    {
        title: "Mastering Color Grading: A Complete Guide",
        slug: "mastering-color-grading-a-complete-guide",
        excerpt:
            "Learn the essential techniques and tools for cinematic color grading from our expert colorists.",
        author: "David Chen",
        date: "Oct 12, 2025",
        category: "Tutorial",
        readTime: "8 min read",
        image:
            "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80",
    },
    {
        title: "Localization Best Practices for Global Content",
        slug: "localization-best-practices-for-global-content",
        excerpt:
            "Discover the key strategies for effectively localizing your content to reach international audiences.",
        author: "Maria Garcia",
        date: "Oct 8, 2025",
        category: "Localization",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
    },
    {
        title: "Sound Design: Creating Immersive Audio Experiences",
        slug: "sound-design-creating-immersive-audio-experiences",
        excerpt:
            "Dive into the art and science of sound design and learn how to create compelling audio landscapes.",
        author: "James Wilson",
        date: "Oct 5, 2025",
        category: "Audio",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    },
    {
        title: "Music Video Trends in 2025",
        slug: "music-video-trends-in-2025",
        excerpt:
            "Stay ahead of the curve with the latest trends shaping music video production this year.",
        author: "Emily Rodriguez",
        date: "Oct 1, 2025",
        category: "Music Video",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800&q=80",
    },
    {
        title: "VFX Workflow Optimization Tips",
        slug: "vfx-workflow-optimization-tips",
        excerpt:
            "Streamline your visual effects pipeline with these expert tips from our VFX team.",
        author: "Michael Lee",
        date: "Sep 28, 2025",
        category: "VFX",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    },
    {
        title: "The Art of Trailer Editing",
        slug: "the-art-of-trailer-editing",
        excerpt:
            "Learn the secrets behind creating compelling trailers that drive audience engagement.",
        author: "Sarah Mitchell",
        date: "Sep 25, 2025",
        category: "Editing",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
    },
    {
        title: "Dubbing vs Subtitling: Which to Choose?",
        slug: "dubbing-vs-subtitling-which-to-choose",
        excerpt:
            "Understand the pros and cons of dubbing and subtitling for your content localization strategy.",
        author: "Maria Garcia",
        date: "Sep 22, 2025",
        category: "Localization",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    },
];

export const metadata: Metadata = {
    title: "Blog | Cocoma Studios – Insights on OTT, AI, Media Production & Digital Strategy",
    description:
        "Read expert articles from Cocoma Studios on OTT workflows, AI localization, content production, digital strategy, VFX, filmmaking, and creative technology. Stay updated with industry insights, tutorials, and guides.",

    keywords: [
        "Cocoma Studios blog",
        "OTT insights",
        "AI media tools",
        "filmmaking tips",
        "post-production guides",
        "digital strategy articles",
        "creative media blogs",
        "video production tutorials",
        "localization insights",
        "content creation trends",
        "VFX articles",
    ],

    openGraph: {
        title:
            "Blog | Cocoma Studios – OTT, AI, Filmmaking, Production & Media Insights",
        description:
            "Explore the Cocoma Studios blog for in-depth articles on media technology, AI-powered workflows, post-production, content strategy, and OTT ecosystem trends.",
        url: "https://www.cocomastudios.com/blog",
        siteName: "Cocoma Studios",
        images: [
            {
                url: "/og/blog-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Cocoma Studios Blog – Media & OTT Insights",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Cocoma Studios Blog | OTT, AI, Media Production & Creative Tech Insights",
        description:
            "Discover expert insights on AI workflows, OTT streaming, filmmaking, editing, and content strategy from Cocoma Studios.",
        images: ["/og/blog-banner.jpg"],
    },
};


const Blog = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title=""
                highlightedText="Blog"
                subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
            />

            {/* Categories */}
            <section className="section-container w-full flex flex-col justify-center items-center gap-10 md:gap-20">
                <CategorySection />
            </section>

            {/* Blog Posts */}
            <section className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Card
                            key={index}
                            className="glass-card hover-lift group cursor-pointer p-0 overflow-hidden animate-fade-in"
                            // style={{ animationDelay: `${index * 50}ms` }}
                            data-aos="zoom-in"
                        >
                            {/* Image Section */}
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* ✅ Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                                    <CustomLink href={`/blog/${post?.slug}`} title="Read More" className="btn-primary" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <CallToAction
                title="Stay Updated"
                description="Subscribe to our newsletter for the latest insights and tutorials"
                primaryLink={{ href: "/contact-us", title: "Get Started" }}
            />
        </div>
    );
};

export default Blog;
