import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface TokenMetricsTopProps {
  marketCap: string;
  volume: string;
}

export const TokenMetricsTop = ({ marketCap, volume }: TokenMetricsTopProps) => {
  const mcColorClass = useMemo(() => {
    try {
      const cleanMc = marketCap.replace("$", "").replace(",", "");
      let value = parseFloat(cleanMc);
      if (marketCap.includes("K")) value *= 1_000;
      else if (marketCap.includes("M")) value *= 1_000_000;

      // Logic:
      // > $100k -> Green
      // > $20k  -> Yellow
      // < $20k  -> Blue (Cyan)
      if (value >= 100_000) return "text-status-increase";
      if (value >= 20_000) return "text-yellow-400";
      return "text-cyan-400"; 
    } catch {
      return "text-cyan-400";
    }
  }, [marketCap]);

    return (
        <div className="text-right flex flex-col gap-0.5">
          <div className="flex items-center justify-end gap-1">
            <span className="text-text-tertiary text-[12px] font-medium uppercase tracking-wide">MC<span className={cn("font-[500] text-[16px] ml-1", mcColorClass)}>{marketCap}</span></span>
            
          </div>
          <div className="flex items-center justify-end gap-1">
             <span className="text-text-tertiary text-[10px] font-medium">V</span>
             <span className="text-text-primary text-xs font-semibold">{volume}</span>
          </div>
        </div>
    );
}