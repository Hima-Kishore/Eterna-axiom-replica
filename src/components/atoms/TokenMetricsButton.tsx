import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface TokenMetricsButtonProps {
  buyAmount: string;
  onBuy?: () => void;
}

export const TokenMetricsButton = ({ buyAmount, onBuy }: TokenMetricsButtonProps) => {
    return(
        <button 
            onClick={(e) => {
                e.stopPropagation();
                onBuy?.();
            }}
            className={cn(
                "flex items-center justify-center gap-1.5 w-16 rounded-full mt-auto transition-all",
                "bg-brand-primary hover:bg-brand-primaryHover", 
                
                "text-black text-[11px] font-extrabold tracking-wide",
                
                "py-1",

                "shadow-[0_2px_8px_rgba(82,111,255,0.25)] hover:shadow-[0_4px_12px_rgba(102,131,255,0.4)]",
                
                "active:scale-95 active:shadow-none"
            )}
        >

            <Zap className="w-3 h-4 fill-black text-black" />
            {buyAmount}
            
       </button>
    );
}