"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";
import Button from "@/components/ui/Button";
// import heroBg from "@/assets/hero-bg.jpg";
// import HeroSection from "@/components/ui/HeroSection";

const Hiring = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Application Submitted!",
    //   description: "We'll review your application and get back to you soon.",
    // });
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      coverLetter: "",
    });
  };

  const positions = [
    "Senior Video Editor",
    "Color Grading Artist",
    "Sound Designer",
    "Localization Project Manager",
    "VFX Compositor",
    "Motion Graphics Designer",
    "General Application",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      {/* <HeroSection
        heroBg={heroBg}
        title="Apply to"
        highlightedText="Cocoma Studios"
        subtitle="Comprehensive post-production and localisation solutions powered by AI technology and human expertise"
      /> */}


      {/* Application Form */}
      <section className="section-container">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center my-5">Application Form</h2>
        <div className="max-w-5xl mx-auto">
          <Card className="glass-card">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Position Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Position Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select
                      value={formData.position}
                      onValueChange={(value) => setFormData({ ...formData, position: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 5 years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="portfolio">Portfolio / Website URL *</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://your-portfolio.com"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Cover Letter (Full Width) */}
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Tell us why you'd be a great fit for this position..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  rows={8}
                  required
                />
              </div>

              {/* Upload Sections (Side by Side on Desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / CV *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (max 10MB)</p>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      required
                    />
                  </div>
                </div>

                {/* Additional Files Upload */}
                <div className="space-y-2">
                  <Label htmlFor="additional">Additional Files (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Reel, samples, or other supporting documents
                    </p>
                    <Input id="additional" type="file" multiple className="hidden" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button title="Submit Application" className="btn-primary w-full" />
              </div>
            </form>
          </Card>

          {/* Info Box */}
          <div className="mt-8 glass-card">
            <h3 className="font-semibold mb-4">What Happens Next?</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Our team will review your application within 5-7 business days</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>If selected, we&apos;ll contact you for an initial interview</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>You may be asked to complete a skills assessment or test project</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Final candidates will meet with the team for a culture fit interview</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hiring;
