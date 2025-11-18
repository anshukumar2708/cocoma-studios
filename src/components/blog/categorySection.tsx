"use client"
import React from 'react'
import ScrollableTabs from '../ui/scrollableTabs'
import {
    Grid2X2,
    Cpu,
    GraduationCap,
    Languages,
    Mic,
    Music,
    Sparkles,
    Scissors,
} from "lucide-react";

interface TabItem {
    icon: React.ElementType;
    label: string;
}

const CategorySection = () => {
    const categories: TabItem[] = [
        { icon: Grid2X2, label: "All" },
        { icon: Cpu, label: "Technology" },
        { icon: GraduationCap, label: "Tutorial" },
        { icon: Languages, label: "Localization" },
        { icon: Mic, label: "Audio" },
        { icon: Music, label: "Music Video" },
        { icon: Sparkles, label: "VFX" },
        { icon: Scissors, label: "Editing" },
    ];
    return (
        <div className='w-full'>
            <ScrollableTabs tabs={categories} />
        </div>
    )
}

export default CategorySection