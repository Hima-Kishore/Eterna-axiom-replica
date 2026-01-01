import React from "react";
import { TokenCard } from "../molecules/TokenCard"; 
import { TokenData } from "@/types";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react"; 

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
      <div className="flex items-center justify-between px-4 py-3 border-b-2 border-white/5 mb-0 bg-surface-dark sticky top-0 z-10">
        <h2 className="text-sm font-bold text-text-primary">{title}</h2>
        <div className="flex gap-2">
            <div className="p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                <ArrowUpDown className="w-3 h-3 text-text-tertiary" />
            </div>
            <div className="p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                <SlidersHorizontal className="w-3 h-3 text-text-tertiary" />
            </div>
        </div>
      </div>

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