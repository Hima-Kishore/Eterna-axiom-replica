import React from "react";
import { cn } from "@/lib/utils";
import { TokenImage } from "../atoms/TokenImage";

interface TokenLogoProps {
  name: string; 
  statusColor?: string;
}

export const TokenLogo = ({ name, statusColor }: TokenLogoProps) => {
  return (
      <div className="flex flex-col gap-1 items-center w-[78px] shrink-0"> 
        <div className="relative">
            <TokenImage alt={name} borderColor={statusColor} />
            <div className={cn(
                  "absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full border border-background flex items-center justify-center",
                  statusColor
                )}>
                <span className="text-[8px] font-bold">💊</span>
            </div>
        </div>
        <span className="text-xxs text-text-tertiary truncate max-w-[78px] text-center">CjcT...hHFv</span>
      </div>
  );
};