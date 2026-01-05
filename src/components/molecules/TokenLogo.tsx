import React from "react";
import { cn } from "@/lib/utils";
import { TokenImage } from "../atoms/TokenImage";
import { TokenBadgeList } from "./TokenBadgeList";

interface TokenLogoProps {
  name: string;
  statusColor?: string;
  badges: {
      type: "increase" | "decrease" | "neutral";
      label: string;
      icon?: React.ReactNode;
    }[];
}

export const TokenLogo = ({ name, statusColor, badges }: TokenLogoProps) => {
  return (
      <div className="flex flex-col gap-1 items-center w-[78px] shrink-0"> 
        <div className="relative">
            <TokenImage alt={name} borderColor={statusColor} />
            <div className={cn(
                  "absolute -bottom-1 -right-1 w-4 h-4 bg-black {statusColor} rounded-full border border-background flex items-center justify-center",
                  statusColor
                )}>
                <span className="text-[8px] font-bold">💊</span>
            </div>
        </div>
        <span className="text-xxs text-text-tertiary truncate max-w-[78px] text-center">CjcT...hHFv</span>
        <div className="hidden lg:block xl:hidden left-1 ml-auto">
          <TokenBadgeList badges={badges}/>
        </div>
      </div>
  );
};