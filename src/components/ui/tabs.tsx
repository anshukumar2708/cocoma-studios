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
    { icon: PlayCircle, label: "Film" },
    { icon: Tv, label: "Web Series" },
    { icon: Tv, label: "TV Shows" },
    { icon: Mic, label: "Podcast" },
    { icon: Trophy, label: "Live Matches" },
    { icon: Music, label: "Songs" },
    { icon: Car, label: "Automobile" },
    { icon: Tv, label: "TV Shows" },
    { icon: Mic, label: "Podcast" },
    { icon: Trophy, label: "Live Matches" },
    { icon: Music, label: "Songs" },
    { icon: Car, label: "Automobile" },
];

export default function ScrollableTabs(): JSX.Element {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [hasScroll, setHasScroll] = useState(false);

    const scroll = (direction: "left" | "right"): void => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };

    // Check for overflow on mount and resize
    useEffect(() => {
        const handleResize = () => {
            if (scrollRef.current) {
                const { scrollWidth, clientWidth } = scrollRef.current;
                setHasScroll(scrollWidth > clientWidth);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative w-full bg-card text-gray-100 rounded-xl flex items-center shadow-lg scrollbar-none py-6">
            {/* Left Scroll Button */}
            {hasScroll && (
                <div className="absolute left-0 bg-card">
                    <button
                        onClick={() => scroll("left")}
                        className="ml-2 flex justify-center items-center z-10 bg-primary  hover:bg-white text-black p-2 aspect-square rounded-full transition-all duration-200 border-2 border-primary"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" strokeWidth={3} />
                    </button>
                </div>
            )}

            {/* Scrollable Tabs */}
            <div
                ref={scrollRef}
                className={`w-full flex ${hasScroll ? "justify-start" : "justify-center"
                    } items-center gap-8 overflow-x-auto scroll-smooth scrollbar-none px-16`}
            >
                {tabs.map((tab: TabItem, index: number) => {
                    const Icon = tab.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-primary whitespace-nowrap transition-colors duration-200"
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium text-sm md:text-base">{tab.label}</span>
                        </div>
                    );
                })}
            </div>

            {/* Right Scroll Button */}
            {hasScroll && (
                <div className="absolute right-0 bg-card">
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
