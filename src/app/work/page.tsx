import WorkCard from "@/components/WorkCard";
import postProductionImg from "@/assets/post-production.jpg";
import localizationImg from "@/assets/localization.jpg";
import musicVideoImg from "@/assets/music-video.jpg";
import Tabs from "@/components/ui/tabs";
import HeroSection from "@/components/ui/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";

const Work = () => {

    const tabsData = [
        { slug: "visual", label: "Visual Promotion" },
        { slug: "post", label: "Post-Production" },
        { slug: "localisation", label: "Localisation" },
        { slug: "music", label: "Music Videos" },
    ];



    const visualPromotionWorks = [
        { title: "Epic Fantasy Series Key Art", category: "Key Art", imageUrl: postProductionImg, description: "Stunning promotional artwork for major streaming series" },
        { title: "Action Thriller Trailer", category: "Trailer Editing", imageUrl: postProductionImg, description: "High-octane trailer that generated 5M+ views" },
        { title: "Documentary Sizzle Reel", category: "Promo Editing", imageUrl: postProductionImg, description: "Compelling promotional content for award-winning documentary" },
        { title: "Social Media Campaign", category: "Social Creatives", imageUrl: postProductionImg, description: "Viral social media content for film launch" },
    ];

    const postProductionWorks = [
        { title: "Award-Winning Feature Film", category: "Film Editing", imageUrl: postProductionImg, description: "Complete post-production for festival favorite" },
        { title: "Mystery Web Series", category: "Color Grading", imageUrl: postProductionImg, description: "Cinematic color grading for streaming hit" },
        { title: "Sci-Fi Thriller Sound Design", category: "Sound Design", imageUrl: postProductionImg, description: "Immersive 5.1 surround sound experience" },
        { title: "Fantasy Epic VFX", category: "VFX", imageUrl: postProductionImg, description: "200+ VFX shots for major production" },
    ];

    const localisationWorks = [
        { title: "Global Series Localisation", category: "Multi-language", imageUrl: localizationImg, description: "Subtitling and dubbing in 15+ languages" },
        { title: "Documentary Translation", category: "Translation", imageUrl: localizationImg, description: "Professional translation for international release" },
        { title: "Feature Film Dubbing", category: "Dubbing", imageUrl: localizationImg, description: "Native voice actors for authentic localization" },
        { title: "Streaming Platform Subtitles", category: "Subtitling", imageUrl: localizationImg, description: "SDH and closed captions for accessibility" },
    ];

    const musicVideoWorks = [
        { title: "Pop Artist Music Video", category: "Music Video", imageUrl: musicVideoImg, description: "Vibrant editing for chart-topping single" },
        { title: "Rock Band Album Art", category: "Key Art", imageUrl: musicVideoImg, description: "Bold visual identity for album release" },
        { title: "Hip-Hop Release Teaser", category: "Promo", imageUrl: musicVideoImg, description: "Hype-building teaser for major release" },
        { title: "Indie Artist Social Content", category: "Social Media", imageUrl: musicVideoImg, description: "Engaging content for artist's social channels" },
    ];

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            {/* <section className="section-container pt-32">
                <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                        Our <span className="gradient-text">Work</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Explore our portfolio of successful projects across visual promotion, post-production, localisation, and music videos
                    </p>
                </div>
            </section> */}
            <HeroSection
                heroBg={heroBg}
                title="Our"
                highlightedText="Work"
                subtitle="Explore our portfolio of successful projects across visual promotion, post-production, localisation, and music videos"
            />

            {/* Portfolio Tabs */}
            <section className="section-container">
                <Tabs tabs={tabsData} />
                {/* <Tabs defaultValue="visual" className="w-full">
                    <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
                        <TabsTrigger value="visual" className="text-sm sm:text-base py-3">Visual Promotion</TabsTrigger>
                        <TabsTrigger value="post" className="text-sm sm:text-base py-3">Post-Production</TabsTrigger>
                        <TabsTrigger value="localisation" className="text-sm sm:text-base py-3">Localisation</TabsTrigger>
                        <TabsTrigger value="music" className="text-sm sm:text-base py-3">Music Videos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="visual" className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visualPromotionWorks.map((work, index) => (
                                <div key={work.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                    <WorkCard {...work} />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="post" className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {postProductionWorks.map((work, index) => (
                                <div key={work.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                    <WorkCard {...work} />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="localisation" className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {localisationWorks.map((work, index) => (
                                <div key={work.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                    <WorkCard {...work} />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="music" className="animate-fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {musicVideoWorks.map((work, index) => (
                                <div key={work.title} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                    <WorkCard {...work} />
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs> */}
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
                    {[
                        { name: "Sarah Mitchell", role: "Film Director", quote: "Cocoma Studios brought our vision to life with incredible attention to detail. Their post-production work is simply outstanding." },
                        { name: "David Chen", role: "OTT Platform Manager", quote: "Their localization services helped us reach global audiences. Professional, efficient, and always on time." },
                        { name: "Maria Garcia", role: "Music Producer", quote: "The music video team at Cocoma is phenomenal. They understand the creative vision and deliver beyond expectations." },
                    ].map((testimonial, index) => (
                        <div key={testimonial.name} className="glass-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                            <div className="border-t border-border pt-4">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Work;
