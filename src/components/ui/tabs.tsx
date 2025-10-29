"use client";
import React, { useState } from "react";

type TabItem = {
    label: string;
    slug: string;
};

interface TabsProps {
    tabs: TabItem[];
    defaultValue?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.slug);

    return (
        <div className="w-full">
            {/* Tabs Header */}
            <div
                className="flex flex-wrap justify-center gap-4 rounded-xl p-2"
                style={{ backgroundColor: "hsl(var(--muted))" }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.slug}
                        onClick={() => setActiveTab(tab.slug)}
                        className={`relative px-6 py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-300
                         ${activeTab === tab.slug
                                ? "text-white shadow-md"
                                : "text-gray-300 hover:text-white hover:bg-[hsl(265_75%_60%_/_.2)]"
                            }`}
                        style={{
                            backgroundColor:
                                activeTab === tab.slug ? "hsl(265 75% 60%)" : "transparent",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
