import React from "react";
import { TokenImage } from "../atoms/TokenImage";

interface TokenLogoProps {
  name: string; 
  statusColor?: string;
}

export const TokenLogo = ({ name, statusColor }: TokenLogoProps) => {
  return (
    <div className="flex flex-col gap-1 items-center w-[78px]"> {/* Updated to 78px */}
        <div className="relative">
            <TokenImage alt={name} borderColor={statusColor || "border-card-border"} />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-card flex items-center justify-center">
                <span className="text-[8px] text-black font-bold">💊</span>
            </div>
        </div>
        <span className="text-xxs text-text-tertiary truncate max-w-[78px]">CjcT...hHFv</span>
    </div>
  );
};