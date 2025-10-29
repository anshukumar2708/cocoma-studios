"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as React from "react";

interface CustomLinkProps {
    href: string;
    title: React.ReactNode;
    className?: string;
}

export default function CustomLink({ href, title, className = "" }: CustomLinkProps) {
    return (
        <Link href={href}>
            <button
                className={`group flex justify-center items-center ${className}`}
                type="button"
            >
                {title}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </Link>
    );
}
