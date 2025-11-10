"use client";
import { useRef, useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Tv,
    Mic,
    PlayCircle,
    Car,
    Grid2X2,
    Music,
    Trophy,
} from "lucide-react";

interface TabItem {
    icon: React.ElementType;
    label: string;
}

const tabs: TabItem[] = [
    { icon: Grid2X2, label: "All" },
    { icon: PlayCircle, label: "Films" },
    { icon: Tv, label: "Web Series" },
    { icon: Mic, label: "Podcasts" },
    { icon: Trophy, label: "Live Matches" },
    { icon: Music, label: "Music Videos" },
    { icon: Car, label: "Automobile" },
    { icon: Tv, label: "Documentaries" },
    { icon: PlayCircle, label: "Short Films" },
    { icon: Mic, label: "Talk Shows" },
    { icon: Trophy, label: "Sports Highlights" },
    { icon: Grid2X2, label: "Entertainment" },
];

export default function ScrollableTabs(): JSX.Element {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    const scroll = (direction: "left" | "right"): void => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleResize = () => updateScrollButtons();

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            updateScrollButtons();
            scrollElement.addEventListener("scroll", updateScrollButtons);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            if (scrollElement) scrollElement.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative w-full bg-card text-gray-100 rounded-md flex items-center shadow-lg scrollbar-none pt-6 pb-3">
            {/* Left Scroll Button */}
            {canScrollLeft && (
                <div className="absolute left-0 bg-card pb-3">
                    <button
                        onClick={() => scroll("left")}
                        className="ml-2 flex justify-center items-center z-10 bg-primary hover:bg-white text-black p-2 aspect-square rounded-full transition-all duration-200 border-2 border-primary"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" strokeWidth={3} />
                    </button>
                </div>
            )}

            {/* Scrollable Tabs */}
            <div
                ref={scrollRef}
                className={`w-full flex ${canScrollRight || canScrollLeft ? "justify-start" : "justify-center"
                    } items-center gap-8 overflow-x-auto scroll-smooth scrollbar-none px-5`}
            >
                {tabs.map((tab: TabItem, index: number) => {
                    const Icon = tab.icon;
                    const isActive = activeCategory === tab.label;
                    return (
                        <div
                            key={index}
                            onClick={() => setActiveCategory(tab.label)}
                            className={`flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors duration-200 px-2 pb-3 border-b-4 ${isActive
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-300 hover:text-primary"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium text-sm md:text-base">{tab.label}</span>
                        </div>
                    );
                })}
            </div>

            {/* Right Scroll Button */}
            {canScrollRight && (
                <div className="absolute right-0 bg-card pb-3">
                    <button
                        onClick={() => scroll("right")}
                        className="mr-2 flex justify-center items-center z-10 bg-primary text-black p-2 aspect-square rounded-full transition-all duration-200 border-2 border-primary"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" strokeWidth={3} />
                    </button>
                </div>
            )}
        </div>
    );
}
