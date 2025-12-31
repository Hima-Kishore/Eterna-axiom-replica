import React from "react";
import { LinkIcon } from "lucide-react";
import { TokenBadge } from "../atoms/TokenBadge";
import { TokenSocials } from "./TokenSocials";

interface TokenInfoProps {
  name: string;
  symbol: string;
  timeAgo: string;
  badges: {
    type: "increase" | "decrease" | "neutral";
    label: string;
    icon?: React.ReactNode;
  }[];
}

export const TokenInfo = ({ name, symbol, timeAgo, badges }: TokenInfoProps) => {
    return (
        <div className="flex-1 min-w-0 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 pt-0.5">
                <span className="text-text-primary font-bold text-sm truncate leading-none">{symbol}</span>
                <span className="text-text-tertiary text-xs truncate leading-none">{name}</span>
                <div className="w-3 h-3 text-text-tertiary opacity-50"><LinkIcon size={10} /></div>
            </div>

            <TokenSocials timeAgo={timeAgo} />

            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {badges.map((badge, i) => (
                    <TokenBadge 
                    key={i} 
                    label={badge.label} 
                    variant={badge.type} 
                    icon={badge.icon} 
                    />
                ))}
            </div>
        </div>
    );
};