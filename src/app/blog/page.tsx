"use client";
import { Calendar, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import HeroSection from "@/components/ui/HeroSection";
import CustomLink from "@/components/ui/CustomLink";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Image from "next/image";

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const posts = [
        {
            title: "The Future of AI in Post-Production",
            excerpt:
                "Explore how artificial intelligence is revolutionizing the post-production industry and what it means for creators.",
            author: "Sarah Mitchell",
            date: "Oct 15, 2025",
            category: "Technology",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        },
        {
            title: "Mastering Color Grading: A Complete Guide",
            excerpt:
                "Learn the essential techniques and tools for cinematic color grading from our expert colorists.",
            author: "David Chen",
            date: "Oct 12, 2025",
            category: "Tutorial",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80",
        },
        {
            title: "Localization Best Practices for Global Content",
            excerpt:
                "Discover the key strategies for effectively localizing your content to reach international audiences.",
            author: "Maria Garcia",
            date: "Oct 8, 2025",
            category: "Localization",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
        },
        {
            title: "Sound Design: Creating Immersive Audio Experiences",
            excerpt:
                "Dive into the art and science of sound design and learn how to create compelling audio landscapes.",
            author: "James Wilson",
            date: "Oct 5, 2025",
            category: "Audio",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
        },
        {
            title: "Music Video Trends in 2025",
            excerpt:
                "Stay ahead of the curve with the latest trends shaping music video production this year.",
            author: "Emily Rodriguez",
            date: "Oct 1, 2025",
            category: "Music Video",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800&q=80",
        },
        {
            title: "VFX Workflow Optimization Tips",
            excerpt:
                "Streamline your visual effects pipeline with these expert tips from our VFX team.",
            author: "Michael Lee",
            date: "Sep 28, 2025",
            category: "VFX",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
        },
        {
            title: "The Art of Trailer Editing",
            excerpt:
                "Learn the secrets behind creating compelling trailers that drive audience engagement.",
            author: "Sarah Mitchell",
            date: "Sep 25, 2025",
            category: "Editing",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
        },
        {
            title: "Dubbing vs Subtitling: Which to Choose?",
            excerpt:
                "Understand the pros and cons of dubbing and subtitling for your content localization strategy.",
            author: "Maria Garcia",
            date: "Sep 22, 2025",
            category: "Localization",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
        },
    ];


    const categories = ["All", "Technology", "Tutorial", "Localization", "Audio", "Music Video", "VFX", "Editing"];

    const CategoryChangeHandler = (category: string) => {
        setActiveCategory(category);
    }

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
            <section className="section-container">
                <div className="flex flex-wrap justify-center gap-5">
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            title={category}
                            onClick={() => CategoryChangeHandler(category)}
                            className={category === activeCategory ? "btn-primary" : ""}
                        />
                    ))}
                </div>
            </section>

            {/* Blog Posts */}
            <section className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Card
                            key={post.title}
                            className="glass-card hover-lift group cursor-pointer p-0 overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms` }}
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
                                    <CustomLink href="#" title="Read More" className="btn-primary" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-container">
                <div className="glass-card text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-muted-foreground mb-6">
                        Subscribe to our newsletter for the latest insights and tutorials
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button
                            title="Get Started"
                            className="btn-primary"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
