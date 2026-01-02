import { Zap } from "lucide-react";

export const TokenMetricsBottom = ({ txCount }: { txCount: number }) => {
    return (
        <div className="flex items-center justify-end gap-1.5 w-full my-1">
           <div className="flex items-center gap-0.5">
              <span className="text-[10px] text-text-tertiary font-bold">F</span>
              <img src="images/solanaIcon.png" alt="" className="w-2 h-2 opacity-70 hidden" />
              <Zap className="w-2 h-2 text-text-tertiary" /> 
              <span className="text-[10px] text-text-tertiary">0.036</span>
           </div>
           <div className="flex items-center gap-1">
               <span className="text-[10px] text-text-tertiary">TX {txCount}</span>
               <div className="w-8 h-0.5 bg-status-decrease/30 rounded-full flex">
                  <div className="bg-status-increase w-[60%] h-full rounded-full shadow-[0_0_4px_theme(colors.status.increase)]"></div>
               </div>
           </div>
        </div>
    );
}