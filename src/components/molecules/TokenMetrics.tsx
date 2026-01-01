import React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface TokenMetricsProps {
  marketCap: string;
  volume: string;
  buyAmount: string;
  onBuy?: () => void;
}

export const TokenMetrics = ({ marketCap, volume, buyAmount, onBuy }: TokenMetricsProps) => {
  return (
    <div className="flex flex-col items-end gap-0.5 min-w-[90px]">
       <div className="text-right flex flex-col gap-0.5">
          <div className="flex items-center justify-end gap-1">
            <span className="text-text-tertiary text-[10px] font-medium uppercase tracking-wide">MC</span>
            <span className="text-[#F2C366] text-sm font-bold tracking-tight">{marketCap}</span>
          </div>
          <div className="flex items-center justify-end gap-1">
             <span className="text-text-tertiary text-[10px] font-medium">V</span>
             <span className="text-text-primary text-xs font-semibold">{volume}</span>
          </div>
        </div>

       <div className="flex items-center justify-end gap-1.5 w-full my-1">
           <div className="flex items-center gap-0.5">
              <span className="text-[10px] text-text-tertiary font-bold">F</span>
              <img src="images/solanaIcon.png" alt="" className="w-2 h-2 opacity-70 hidden" />
              <Zap className="w-2 h-2 text-text-tertiary" /> 
              <span className="text-[10px] text-text-tertiary">0.036</span>
           </div>
           <div className="flex items-center gap-1">
               <span className="text-[10px] text-text-tertiary">TX 105</span>
               <div className="w-8 h-0.5 bg-status-decrease/30 rounded-full flex">
                  <div className="bg-status-increase w-[60%] h-full rounded-full shadow-[0_0_4px_theme(colors.status.increase)]"></div>
               </div>
           </div>
        </div>

       <button 
         onClick={(e) => {
           e.stopPropagation();
           onBuy?.();
         }}
         className={cn(
            "flex items-center justify-center gap-1.5 w-16 rounded-full mt-auto transition-all",
            "bg-brand-primary hover:bg-brand-primaryHover", 
            
            "text-black text-[11px] font-extrabold tracking-wide",
            
            "py-1.5",

            "shadow-[0_2px_8px_rgba(82,111,255,0.25)] hover:shadow-[0_4px_12px_rgba(102,131,255,0.4)]",
            
            "active:scale-95 active:shadow-none"
         )}
       >
          <Zap className="w-3 h-3 fill-black text-black" />
          {buyAmount}
       </button>
    </div>
  );
};