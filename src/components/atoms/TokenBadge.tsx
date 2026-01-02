import React from "react";
import { cn } from "@/lib/utils";
import { User, ChefHat, Ghost } from "lucide-react";

interface TokenBadgeProps {
  label: string;
  variant?: "increase" | "decrease" | "neutral";
}

export const TokenBadge = ({ label, variant = "neutral" }: TokenBadgeProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-1 px-1.5 py-[1px] rounded-lg text-[12px] font-medium border border-white/5 whitespace-nowrap",
        variant === "increase" && "text-status-increase",
        variant === "decrease" && "text-status-decrease",
        variant === "neutral" && "text-gray-400"
      )}
    >
      {label === '0%' && <Ghost className="w-4 h-4" />}
      {label === '1%' && <ChefHat className="w-4 h-4" />}
      {label !== '0%' && label !== '1%' && <User className="w-4 h-4" />}
      <span>{label}</span>
    </div>
  );
};