"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ExplorePage() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            offset: 120,
        });
    }, []);

    const workflowSteps = [
        {
            title: "Ingest & Upload",
            desc: "Seamlessly upload large media files with real-time progress tracking and automatic metadata tagging.",
            img: "https://images.pexels.com/photos/5553059/pexels-photo-5553059.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            title: "AI Localization",
            desc: "Use our AI-powered localization suite to generate accurate subtitles, dubbing, and translations for 20+ languages.",
            img: "https://images.pexels.com/photos/8437004/pexels-photo-8437004.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            title: "Quality Assurance",
            desc: "Automated frame-by-frame validation ensures your content meets the highest broadcast standards before going live.",
            img: "https://images.pexels.com/photos/4792736/pexels-photo-4792736.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
            title: "Global Distribution",
            desc: "Deliver OTT-ready content worldwide through cloud-based distribution networks optimized for latency-free streaming.",
            img: "https://images.pexels.com/photos/3944406/pexels-photo-3944406.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
    ];


    const testimonials = [
        {
            name: "Samantha Lee",
            role: "Head of Production, CineWave Studios",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            quote:
                "Cocoma Studios’ AI automation helped us reduce turnaround times by over 50%. A must-have for any streaming workflow.",
            rating: 5,
        },
        {
            name: "David Chen",
            role: "Content Director, StreamVerse",
            img: "https://randomuser.me/api/portraits/men/46.jpg",
            quote:
                "Their localization system is unmatched. Our multi-language content reached audiences we never thought possible.",
            rating: 5,
        },
        {
            name: "Maria Gomez",
            role: "Executive Producer, Nova Entertainment",
            img: "https://randomuser.me/api/portraits/women/47.jpg",
            quote:
                "Incredible automation and support. Their real-time QA saved us hours per project, maintaining premium quality output.",
            rating: 5,
        },
        {
            name: "James Patel",
            role: "Streaming Tech Lead, VisionPlay",
            img: "https://randomuser.me/api/portraits/men/49.jpg",
            quote:
                "Cocoma’s streaming delivery network is lightning fast. Our global audience engagement has skyrocketed.",
            rating: 5,
        },
        {
            name: "Olivia Brooks",
            role: "Digital Media Manager, AuroraTV",
            img: "https://randomuser.me/api/portraits/women/60.jpg",
            quote:
                "Their analytics dashboard gave us deep insights into viewer behavior, helping us refine our content strategy.",
            rating: 5,
        },
    ];

    const exploreSections = [
        {
            title: "Content Delivery Optimization",
            desc: "Deliver seamless playback across devices using adaptive bitrate streaming (ABR) and intelligent content routing. Our infrastructure minimizes buffering and ensures high-quality delivery for every bandwidth condition.",
            img: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1200",
            points: [
                "🚀 Adaptive streaming for any network condition",
                "🌍 Global CDN integration with low latency",
                "📦 Real-time bandwidth optimization",
                "🔁 Redundant routing for uptime reliability",
            ],
        },
        {
            title: "Security & Compliance",
            desc: "Protect your content with studio-grade security. Our platform is compliant with major DRM standards and encryption protocols, safeguarding your IP from unauthorized access.",
            img: "https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&w=1200",
            points: [
                "🔒 AES-256 encryption for all assets",
                "🧩 DRM integration (Widevine, FairPlay, PlayReady)",
                "👁️ Real-time watermarking for anti-piracy",
                "⚖️ GDPR & ISO 27001 compliance certified",
            ],
        },
        {
            title: "Monetization & Analytics",
            desc: "Boost revenue with flexible monetization models and deep audience insights. Our analytics dashboard helps you understand viewer behavior, engagement, and ROI in real time.",
            img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
            points: [
                "💰 Support for AVOD, SVOD, and TVOD",
                "📊 Real-time viewer analytics and retention tracking",
                "🎯 Predictive insights powered by machine learning",
                "🧠 Content performance heatmaps",
            ],
        },
        {
            title: "AI-Powered Recommendations",
            desc: "Personalize user experiences with AI-driven recommendation engines that analyze viewing behavior, genre preferences, and trending content across demographics.",
            img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
            points: [
                "🤖 Smart recommendation algorithms",
                "📈 Continuous learning with real-time user data",
                "🎬 Personalized watchlists for every viewer",
                "💡 Boost engagement and retention rates",
            ],
        },
        {
            title: "Seamless Multi-Device Streaming",
            desc: "Deliver smooth, synchronized viewing experiences across TV, mobile, and desktop platforms with automatic resolution scaling and device-aware optimization.",
            img: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1200",
            points: [
                "📱 Cross-device playback optimization",
                "💻 Automatic resolution scaling",
                "🖥️ Smart adaptive encoding per device type",
                "🌐 Consistent UI across all screen sizes",
            ],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* WORKFLOW SECTION */}
            <section className="section-container mt-8">
                <div className="max-w-6xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Streamlined Workflow</h2>
                    <p className="text-gray-400">
                        Experience automation at every stage — from ingestion to global delivery.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                    {workflowSteps.map((step, i) => (
                        <div
                            key={step.title}
                            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src={step.img}
                                alt={step.title}
                                width={600}
                                height={400}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* exploreSections */}
            <div className="min-h-screen">
                {exploreSections.map((section, i) => (
                    <section
                        key={section.title}
                        className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center border-t border-neutral-800"
                    >
                        {/* Image Block */}
                        <div
                            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                            className={`rounded-2xl overflow-hidden shadow-2xl ${i % 2 === 0 ? "md:order-2" : "md:order-1"
                                }`}
                        >
                            <Image
                                src={section.img}
                                alt={section.title}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Text Block */}
                        <div
                            data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                            className={`${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                        >
                            <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">{section.desc}</p>
                            <ul className="space-y-3 text-gray-300">
                                {section.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </div>

            {/* VIDEO SHOWCASE */}
            <section className="py-20 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
                    Watch How It Works
                </h2>
                <div
                    data-aos="zoom-in"
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                >
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-neutral-950 border-t border-neutral-800">
                <div className="max-w-6xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-gray-400">
                        Trusted by OTT leaders, filmmakers, and streaming giants worldwide.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                            className="bg-neutral-900/70 rounded-2xl p-8 border border-neutral-800 shadow-lg hover:shadow-yellow-500/10 transition"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={t.img}
                                    alt={t.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div className="text-left">
                                    <h4 className="font-semibold">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                            <p className="italic text-gray-300 mb-4">“{t.quote}”</p>
                            <div className="flex gap-1">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 text-center border-t border-neutral-800">
                <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
                    Ready to Power Your Streaming Workflow?
                </h2>
                <p
                    className="text-gray-400 max-w-3xl mx-auto mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Launch and scale your OTT operations with AI-driven workflows that ensure
                    speed, quality, and creativity — all in one place.
                </p>
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition">
                    Contact Us
                </button>
            </section>
        </div>
    );
}
