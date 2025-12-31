import React from "react";
import { TokenLogo } from "./TokenLogo";
import { TokenInfo } from "./TokenInfo";
import { TokenMetrics } from "./TokenMetrics";


export interface TokenCardProps {
  name: string;
  symbol: string;
  imageUrl?: string;
  timeAgo: string;
  marketCap: string;
  volume: string;
  txns: number;
  buyAmount: string; 
  statusColor?: string;
  badges: {
    type: "increase" | "decrease" | "neutral";
    label: string;
    icon?: React.ReactNode;
  }[];
}

export const TokenCard = ({ 
  name, symbol, marketCap, volume, timeAgo, buyAmount, badges, statusColor 
}: TokenCardProps) => {
  return (
    <div className="flex gap-3 px-2 py-3 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full">
      
        {/* SECTION 1: Left (Image) */}
        <TokenLogo name={name} statusColor={statusColor}/>

        {/* SECTION 2: Center (Info) */}
        <TokenInfo name={name} symbol={symbol} timeAgo={timeAgo} badges={badges} />

        {/* SECTION 3: Right (Metrics) */}
        <TokenMetrics marketCap={marketCap} volume={volume} buyAmount={buyAmount}/>
    </div>
  );
};