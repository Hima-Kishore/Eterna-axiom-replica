import React from "react"; 
import { TokenData } from "@/types";
import { TokenCard } from "../molecules/TokenCard";
import { TokenColumnHeader } from "../molecules/TokenColumnHeader";

interface PulseColumnProps {
  title: string;
  tokens: TokenData[];
  className?: string;
  onTokenBuy?: (token: TokenData) => void;
}

export const PulseColumn = ({ title, tokens, className = "", onTokenBuy }: PulseColumnProps) => {
  return (
    <div className={`flex flex-col h-full min-w-[320px] lg:min-w-[400px] flex-1 border-r-2 border-white/5 last:border-r-0 bg-surface-dark ${className}`}>
      {/* Column Header */}
      <TokenColumnHeader title={title} />

      {/* The Scrollable List */}
      <div className="flex flex-col overflow-y-auto pb-20 scrollbar-thin">
        {tokens.map((token) => (
          <TokenCard
            key={token.id}
            {...token} 
            badges={token.badges.map(b => ({ ...b, icon: null }))}
            onBuyClick={() => onTokenBuy?.(token)}
          />
        ))}
      </div>
    </div>
  );
};