import React from "react";
import CustomLink from "./CustomLink";
import Image from "next/image";

interface LinkProps {
    href: string;
    title: string;
}

interface CallToActionProps {
    title?: string;
    description?: string;
    primaryLink?: LinkProps;
    secondaryLink?: LinkProps;
}

export const CallToAction: React.FC<CallToActionProps> = ({
    title,
    description,
    primaryLink,
    secondaryLink,
}) => {
    return (
        <section className="section-container pb-0 mt-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Create Campaigns That Stand Out</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From concepts to final edits, we help you build compelling visual stories that capture attention and deliver real results for your brand.
                </p>
            </div>
            <div className="glass-card text-center w-full mx-auto relative overflow-hidden rounded-2xl p-0">

                {/* Content */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">

                    {/* LEFT: Image */}

                    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/free/camera2.jpg"
                            alt="image"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>


                    {/* RIGHT: Content */}
                    <div className="w-full flex flex-col justify-start items-start p-8">
                        <h2 className="text-4xl font-bold mb-4">{title}</h2>

                        <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {secondaryLink && (
                                <CustomLink
                                    href={secondaryLink?.href}
                                    title={secondaryLink?.title}
                                    className="btn-secondary"
                                />
                            )}
                            {primaryLink && (
                                <CustomLink
                                    href={primaryLink?.href}
                                    title={primaryLink?.title}
                                    className="btn-primary"
                                />
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
