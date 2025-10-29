"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Button from "@/components/ui/Button";
import MapComponent from "@/components/MapComponent";
import HeroSection from "@/components/ui/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";

// Define a type for form data
interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}

const Contact: React.FC = () => {
    const { toast } = useToast();

    // Typed state
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    // Typed event handler
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
        });
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
        });
    };

    const services: string[] = [
        "Visual Promotion",
        "Post-Production Services",
        "Localisation Services",
        "Music Video Production",
        "General Inquiry",
    ];

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heroBg={heroBg}
                title="Get in"
                highlightedText="Touch"
                subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
            />

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

            {/* Contact Form */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Form */}
                    <Card className="glass-card">
                        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (555) 123-4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        placeholder="Your company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service">Service Interested In *</Label>
                                <Select
                                    value={formData.service}
                                    onValueChange={(value: string) =>
                                        setFormData((prev) => ({ ...prev, service: value }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {services.map((service) => (
                                            <SelectItem key={service} value={service}>
                                                {service}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message *</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                />
                            </div>
                            <div className="mt-5">
                                <Button href="" title="Send Message" className="btn-primary w-full" />
                                {/* <Send className="mr-2 w-5 h-5" />
                                Send Message
                            </Button> */}
                            </div>
                        </form>
                    </Card>

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
                {/* <Card className="glass-card overflow-hidden"> */}
                <div className="aspect-video">
                    <MapComponent lat={21.1721808} lng={81.2957429} zoom={12} />
                </div>
                {/* </Card> */}
            </section>
        </div>
    );
};

export default Contact;
