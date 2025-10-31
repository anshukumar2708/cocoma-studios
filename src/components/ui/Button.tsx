"use client";

import React from "react";

interface ButtonProps {
    title: React.ReactNode;
    icon?: React.ElementType;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    title,
    icon: Icon,
    className = "",
    onClick,
    type = "button",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group flex items-center gap-2 justify-center ${className}`}
        >
            {Icon && <Icon className="w-6 h-6" />}
            <span>{title}</span>
        </button>
    );
};

export default Button;
