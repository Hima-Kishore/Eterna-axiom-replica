import React from "react";
import { Zap } from "lucide-react";

interface TokenMetricsProps {
  marketCap: string;
  volume: string;
  buyAmount: string;
}

export const TokenMetrics = ({ marketCap, volume, buyAmount }: TokenMetricsProps) => {
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

            <button className="flex items-center justify-center gap-1 bg-[#526FFF] hover:bg-[#6683FF] text-white text-[11px] font-bold px-4 py-1.5 rounded-full w-full mt-auto transition-all shadow-lg shadow-blue-900/20">
                <Zap className="w-3 h-3 fill-white" />
                {buyAmount}
            </button>
        </div>
    );
};