import React from "react";
import { TokenSocialsLinks } from "../atoms/TokenSocialsLinks";
import { TokenSocialsStats } from "../atoms/TokenSocialsStats";

interface TokenSocialsProps {
  timeAgo: string;
  holders?: number;
}

export const TokenSocials = ({ timeAgo, holders = 94 }: TokenSocialsProps) => {
  return (
    <div className="flex items-center gap-2 text-xs text-text-tertiary h-5">
      {/* Time */}
      <span className="text-status-increase font-medium whitespace-nowrap">{timeAgo}</span>
      
      {/* Links Group */}
      <TokenSocialsLinks />

      <div className="w-[1px] h-2 bg-white/10 mx-1"></div>

      {/* Stats Group */}
      <TokenSocialsStats holders={holders} />
    </div>
  );
};