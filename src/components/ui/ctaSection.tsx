import React from "react";
import CustomLink from "./CustomLink";

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
        <section className="section-container pt-16 pb-0">
            <div className="glass-card text-center max-w-4xl mx-auto relative overflow-hidden rounded-2xl p-10">
                {/* Gradient Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-glow" />

                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {secondaryLink && <CustomLink
                            href={secondaryLink?.href}
                            title={secondaryLink?.title}
                            className="btn-secondary"
                        />}
                        {primaryLink && <CustomLink
                            href={primaryLink?.href}
                            title={primaryLink?.title}
                            className="btn-primary"
                        />}
                    </div>
                </div>
            </div>
        </section>
    );
};
