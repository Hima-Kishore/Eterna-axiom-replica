import React, { useEffect, useState, useRef } from "react";
import { TokenLogo } from "./TokenLogo";
import { TokenInfo } from "./TokenInfo";
import { TokenMetrics } from "./TokenMetrics";
import { cn } from "@/lib/utils";

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

  const [flashClass, setFlashClass] = useState("");
  const prevPriceRef = useRef(marketCap);

  useEffect(() => {
    if (prevPriceRef.current !== marketCap) {
      const oldVal = parseFloat(prevPriceRef.current.replace(/[^0-9.]/g, ""));
      const newVal = parseFloat(marketCap.replace(/[^0-9.]/g, ""));

      if (newVal > oldVal) {
        setFlashClass("sweep-green"); 
      } else if (newVal < oldVal) {
        setFlashClass("sweep-red");
      }

      const timer = setTimeout(() => {
        setFlashClass("");
        prevPriceRef.current = marketCap;
      }, 2100);

      return () => clearTimeout(timer);
    }
  }, [marketCap]);

  return (
    <div className={cn(
      "flex gap-3 px-2 py-3 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full",
      "sweep-effect",
      flashClass
    )}>
      
        <div className="relative z-10 flex gap-3 w-full">
            {/* SECTION 1: Left (Image) */}
            <TokenLogo name={name} statusColor={statusColor}/>

            {/* SECTION 2: Center (Info) */}
            <TokenInfo name={name} symbol={symbol} timeAgo={timeAgo} badges={badges} />

            {/* SECTION 3: Right (Metrics) */}
            <TokenMetrics marketCap={marketCap} volume={volume} buyAmount={buyAmount}/>
        </div>
    </div>
  );
};