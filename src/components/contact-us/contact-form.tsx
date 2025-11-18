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
import CustomLink from "@/components/ui/CustomLink";
import { Card } from "../ui/card";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}


const ContactForm = () => {
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
                    <CustomLink href="" title="Send Message" className="btn-primary w-full" />
                    {/* <Send className="mr-2 w-5 h-5" />
                                Send Message
                            </Button> */}
                </div>
            </form>
        </Card>
    )
}

export default ContactForm