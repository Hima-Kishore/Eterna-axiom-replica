import React from "react";
import { Tab } from "@/types/index";
import { cn } from "@/lib/utils";

interface TabButtonProps {
    id: Tab;
    label: string;
    isActive: boolean;
    onClick: (id: Tab) => void;
}

export const TabButton = ({ id, label, isActive, onClick }: TabButtonProps) => {

    return (
        <button
            onClick={() => onClick(id)}
            className={cn(
            "py-1.5 rounded-full text-xs font-bold transition-all",
            isActive
                ? "bg-[#25282F] text-white px-4"
                : "text-text-tertiary hover:text-white px-2"
            )}
        >
            {label}
        </button>
    );
};