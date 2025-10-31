"use client";
import React, { useState } from "react";
import Button from "./Button";
import { LucideIcon } from "lucide-react";

type TabItem = {
    label: string;
    slug: string;
    icon: LucideIcon;
};

interface TabsProps {
    tabs: TabItem[];
    defaultValue?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.slug);

    return (
        <div className="w-full">
            <div
                className="flex flex-wrap justify-center gap-8 rounded-xl p-1.5"
                style={{ backgroundColor: "hsl(var(--muted))" }}
            >
                {tabs.map((tab) => (
                    <Button
                        key={tab.slug}
                        icon={tab.icon}
                        title={tab.label}
                        onClick={() => setActiveTab(tab.slug)}
                        className={`${activeTab === tab.slug ? "btn-click" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tabs;
