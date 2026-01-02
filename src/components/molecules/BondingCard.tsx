import React, { useMemo, useRef, useEffect, useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

interface BondingCardProps {
  children: React.ReactNode;
  marketCap: string;
}

export const BondingCard = ({ children, marketCap }: BondingCardProps) => {
  const [trendColor, setTrendColor] = useState("text-brand-primary");
  const prevPercentRef = useRef<number>(0);

  const currentPercent = useMemo(() => {
    try {
      const cleanMc = marketCap.replace("$", "");
      let value = parseFloat(cleanMc);
      if (cleanMc.includes("K")) value *= 1_000;
      else if (cleanMc.includes("M")) value *= 1_000_000;

      const target = 69_000;
      return Math.min((value / target) * 100, 100);
    } catch {
      return 0;
    }
  }, [marketCap]);

  useEffect(() => {
    if (prevPercentRef.current !== 0) { 
      if (currentPercent > prevPercentRef.current) {
        setTrendColor("text-status-increase");
      } else if (currentPercent < prevPercentRef.current) {
        setTrendColor("text-status-decrease");
      }
    }
    prevPercentRef.current = currentPercent;
  }, [currentPercent]);

  return (
    <HoverCard.Root openDelay={100} closeDelay={100}>
      <HoverCard.Trigger asChild>
        {children}
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content 
          className="z-50 rounded-md border border-white/10 bg-[#14151a] px-1 pb-1 shadow-xl data-[side=top]:slide-in-from-bottom-2"
          side="top" 
          sideOffset={10}
        >
          {/* Render with the dynamic Trend Color */}
          <span className={cn("text-xs font-{500} transition-colors duration-300", trendColor)}>
            Bonding: {currentPercent.toFixed(2)}%
          </span>
          
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};