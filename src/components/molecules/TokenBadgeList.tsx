import React from "react";
import { TokenBadge } from "../atoms/TokenBadge";

interface TokenInfoProps {
  badges: {
    type: "increase" | "decrease" | "neutral";
    label: string;
  }[];
}

export const TokenBadgeList = ({ badges }: TokenInfoProps) => {
    return (
        <div className="flex flex-wrap gap-1.5 mt-auto mb-2 pt-1">
            {badges.map((badge, i) => (
                <TokenBadge 
                    key={i} 
                    label={badge.label} 
                    variant={badge.type} 
                />
            ))}
        </div>
    );
};