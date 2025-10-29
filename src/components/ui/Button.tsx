"use client";

import React from "react";
// import { ArrowRight } from "lucide-react";

interface ButtonProps {
    title: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    title,
    className = "",
    onClick,
    type = "button",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group flex justify-center items-center  ${className}`}
        >
            {title}
        </button>
    );
};

export default Button;
