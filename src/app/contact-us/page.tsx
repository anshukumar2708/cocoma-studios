import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import MapComponent from "@/components/MapComponent";
import ContactForm from "@/components/contact-us/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Cocoma Studios – Connect With Our Creative & OTT Solutions Team",
    description:
        "Get in touch with Cocoma Studios for AI localization, OTT workflow solutions, video production, content strategy, and post-production services. Our team is here to help you bring your creative vision to life.",
    keywords: [
        "Cocoma Studios contact",
        "contact Cocoma",
        "media production support",
        "OTT workflow assistance",
        "AI localization inquiry",
        "video production contact",
        "creative services support",
        "post-production help",
        "Cocoma customer support",
        "Cocoma Studios team",
    ],
    openGraph: {
        title:
            "Contact Us | Cocoma Studios – Media Production, Localization & OTT Experts",
        description:
            "Reach out to our creative, technical, and production specialists for inquiries about OTT-ready workflows, AI localization, editing, VFX, and video production services.",
        url: "https://www.cocomastudios.com/contact-us",
        siteName: "Cocoma Studios",
        images: [
            {
                url: "/og/contact-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Cocoma Studios – Contact Us",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Contact Cocoma Studios | Speak With Our OTT, Creative & AI Solutions Team",
        description:
            "We're here to help with AI-powered workflows, localization, creative production, editing, and OTT content delivery. Contact our team for collaboration and support.",
        images: ["/og/contact-banner.jpg"],
    },
};


const Contact: React.FC = () => {

    return (
        <div className="mt-8">
            {/* Contact Form */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* contact form */}
                    <ContactForm />
                    {/* Info */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                            <div className="space-y-4">
                                {[
                                    "AI-powered workflows for faster delivery",
                                    "International team with 50+ languages",
                                    "24/7 support for global clients",
                                    "Award-winning professionals",
                                    "Competitive pricing with no hidden fees",
                                    "Quick turnaround without quality compromise",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex gap-3"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <p className="text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Card className="glass-card">
                            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4">
                                * Times are in Pacific Standard Time (PST)
                            </p>
                        </Card>

                        <Card className="glass-card">
                            <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                            <p className="text-sm text-muted-foreground">
                                We typically respond to all inquiries within 24 hours during
                                business days. For urgent matters, please call us directly.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="section-container">
                <div className="aspect-video">
                    <MapComponent lat={19.1299012} lng={72.84676} zoom={15} />
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-container">
                <div className="grid sm:grid-cols-3 gap-6 mb-16">
                    <Card className="glass-card hover-lift text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <p className="text-sm text-muted-foreground">
                            info@cocomastudios.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                            support@cocomastudios.com
                        </p>
                    </Card>

                    <Card className="glass-card hover-lift text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm PST</p>
                    </Card>

                    <Card className="glass-card hover-lift text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">Visit Us</h3>
                        <p className="text-sm text-muted-foreground">123 Studio Lane</p>
                        <p className="text-sm text-muted-foreground">Los Angeles, CA 90028</p>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Contact;
