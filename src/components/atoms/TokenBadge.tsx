import React from "react";
import { cn } from "@/lib/utils";

interface TokenBadgeProps {
  label: string;
  variant?: "increase" | "decrease" | "neutral";
  icon?: React.ReactNode;
}

export const TokenBadge = ({ label, variant = "neutral", icon }: TokenBadgeProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-1 px-1.5 py-[1px] rounded text-[10px] font-medium bg-opacity-10 border border-transparent whitespace-nowrap",
        variant === "increase" && "bg-status-increase/10 text-status-increase",
        variant === "decrease" && "bg-status-decrease/10 text-status-decrease",
        variant === "neutral" && "bg-gray-500/10 text-gray-400"
      )}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};