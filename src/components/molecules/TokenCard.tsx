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
    <div className="flex gap-2 p-2 bg-card hover:bg-card-hover border border-card-border rounded-lg transition-colors group cursor-pointer w-full max-w-[480px]">
      
        {/* SECTION 1: Left (Image) */}
        <TokenLogo name={name} statusColor={statusColor}/>

        {/* SECTION 2: Center (Info) */}
        <TokenInfo name={name} symbol={symbol} timeAgo={timeAgo} badges={badges} />

        {/* SECTION 3: Right (Metrics) */}
        <TokenMetrics marketCap={marketCap} volume={volume} buyAmount={buyAmount}/>
    </div>
  );
};