import { Calendar, User, Clock, Share2, Bookmark, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogDetail = () => {
    // const { id } = useParams();

    const blogPost = {
        id: 1,
        title: "The Future of Post-Production: AI and Machine Learning in Film Editing",
        author: "Sarah Johnson",
        date: "March 15, 2024",
        readTime: "8 min read",
        category: "Post-Production",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop",
        content: [
            {
                type: "text",
                content: "The landscape of post-production is evolving at an unprecedented pace. With the integration of artificial intelligence and machine learning, we're witnessing a revolution that's transforming how films are edited, graded, and finalized. This technological leap isn't just about speed—it's about unlocking creative possibilities that were previously unimaginable."
            },
            {
                type: "heading",
                content: "AI-Powered Color Grading"
            },
            {
                type: "text",
                content: "Color grading has always been an art form that requires a keen eye and years of experience. Today, AI algorithms can analyze thousands of frames in seconds, suggesting color palettes that match the mood and tone of each scene. These tools don't replace colorists—they empower them to work faster and explore more creative options."
            },
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop",
                caption: "AI-powered color grading tools in action"
            },
            {
                type: "heading",
                content: "Automated Audio Cleanup"
            },
            {
                type: "text",
                content: "Sound design has also benefited tremendously from machine learning. Modern AI can identify and remove background noise, balance audio levels, and even enhance dialogue clarity—all with minimal human intervention. This allows sound designers to focus on the creative aspects of their work rather than tedious technical tasks."
            },
            {
                type: "video",
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                caption: "Watch: AI in Modern Film Production"
            },
            {
                type: "heading",
                content: "Smart Scene Detection and Organization"
            },
            {
                type: "text",
                content: "One of the most time-consuming aspects of post-production is organizing footage. AI-powered scene detection can automatically categorize clips by content, lighting conditions, camera angles, and even emotional tone. This dramatically reduces the time editors spend searching for specific shots."
            },
            {
                type: "quote",
                content: "AI doesn't replace creativity—it amplifies it. The future of post-production is about humans and machines working in harmony.",
                author: "James Cameron, Filmmaker"
            },
            {
                type: "text",
                content: "As we look to the future, it's clear that AI and machine learning will continue to reshape post-production workflows. However, the human touch—the creative vision, emotional intelligence, and artistic sensibility—will always remain irreplaceable. The key is finding the right balance between technological efficiency and creative expression."
            },
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=600&fit=crop",
                caption: "The future of post-production is collaborative"
            },
        ],
        tags: ["AI", "Post-Production", "Film Editing", "Technology", "Future"]
    };

    const relatedPosts = [
        {
            id: 2,
            title: "5 Essential Tips for Music Video Production",
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
            category: "Music Video",
            date: "March 10, 2024"
        },
        {
            id: 3,
            title: "Localization Best Practices for OTT Platforms",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
            category: "Localization",
            date: "March 5, 2024"
        },
        {
            id: 4,
            title: "The Art of Trailer Editing: Creating Impact",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop",
            category: "Visual Promotion",
            date: "March 1, 2024"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={blogPost.image}
                        alt={blogPost.title}
                        fill
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>
                <div className="relative section-container h-full flex flex-col justify-end pb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors mb-6"
                        data-aos="fade-right"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Blog</span>
                    </Link>
                    <div className="mb-4" data-aos="fade-up">
                        <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                            {blogPost.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-8" data-aos="fade-up" data-aos-delay="100">
                        {blogPost.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-white/80" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center gap-2">
                            <User size={18} />
                            <span>{blogPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{blogPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span>{blogPost.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto">
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between border-y border-border py-6 mb-12" data-aos="fade-up">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:-translate-y-1">
                                <Bookmark size={20} />
                                <span className="hidden sm:inline">Save</span>
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 hover:-translate-y-1">
                                <Share2 size={20} />
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="#" className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Article Content */}
                    <article className="prose prose-invert prose-lg max-w-none">
                        {blogPost.content.map((block, index) => {
                            switch (block.type) {
                                case 'text':
                                    return (
                                        <p key={index} className="text-foreground/90 leading-relaxed mb-6 text-lg" data-aos="fade-up">
                                            {block.content}
                                        </p>
                                    );
                                case 'heading':
                                    return (
                                        <h2 key={index} className="text-3xl font-bold text-foreground mt-12 mb-6" data-aos="fade-up">
                                            {block.content}
                                        </h2>
                                    );
                                case 'image':
                                    return (
                                        <figure key={index} className="my-12" data-aos="zoom-in">

                                            {block.url && (
                                                <Image
                                                    src={block.url}
                                                    alt={block.caption || "blog image"}
                                                    width={1200}
                                                    height={600}
                                                    className="w-full h-auto rounded-xl shadow-2xl object-cover"
                                                />
                                            )}
                                            {block.caption && (
                                                <figcaption className="text-center text-muted-foreground mt-4 text-sm">
                                                    {block.caption}
                                                </figcaption>
                                            )}
                                        </figure>
                                    );
                                case 'video':
                                    return (
                                        <figure key={index} className="my-12" data-aos="zoom-in">
                                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                                <iframe
                                                    src={block.url}
                                                    className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            {block.caption && (
                                                <figcaption className="text-center text-muted-foreground mt-4 text-sm">
                                                    {block.caption}
                                                </figcaption>
                                            )}
                                        </figure>
                                    );
                                case 'quote':
                                    return (
                                        <blockquote key={index} className="border-l-4 border-primary pl-6 py-4 my-12 bg-card/50 rounded-r-lg" data-aos="fade-left">
                                            <p className="text-2xl font-semibold text-foreground mb-2 italic">
                                                &quot;{block.content}&quot;
                                            </p>
                                            {block.author && (
                                                <cite className="text-muted-foreground not-italic">— {block.author}</cite>
                                            )}
                                        </blockquote>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </article>

                    {/* Tags */}
                    <div className="mt-16 pt-8 border-t border-border" data-aos="fade-up">
                        <h3 className="text-xl font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-3">
                            {blogPost.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 p-8 bg-card rounded-xl border border-border" data-aos="fade-up">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-primary-foreground shrink-0">
                                SJ
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">{blogPost.author}</h3>
                                <p className="text-muted-foreground mb-4">
                                    Senior Film Editor & Post-Production Specialist with over 10 years of experience in the industry.
                                    Passionate about exploring the intersection of technology and creativity.
                                </p>
                                <div className="flex gap-3">
                                    <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                                        <Twitter size={20} />
                                    </Link>
                                    <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                                        <Linkedin size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="section-container bg-card/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
                        Related <span className="gradient-text">Articles</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((post, index) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;