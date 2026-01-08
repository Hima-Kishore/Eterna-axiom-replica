import React from "react";
import { TokenSocialsLinks } from "../atoms/TokenSocialsLinks";
import { TokenSocialsStats } from "../atoms/TokenSocialsStats";

interface TokenSocialsProps {
  timeAgo: string;
  holders?: number;
}

export const TokenSocials = ({ timeAgo, holders = 94 }: TokenSocialsProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 text-xs text-text-tertiary h-5">
      {/* Time */}
      <div className="flex items-center gap-2">
        <span className="text-status-increase font-medium whitespace-nowrap">{timeAgo}</span>
        
        {/* Links Group */}
        <TokenSocialsLinks />
      </div>
      

      <div className="w-[1px] h-2 bg-white/10 mx-1"></div>

      {/* Stats Group */}
      <TokenSocialsStats holders={holders} />
    </div>
  );
};