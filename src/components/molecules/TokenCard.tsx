import React from "react";
import { 
  Link as LinkIcon, Search, Shield, Trophy, Zap, 
  ChefHat, Target, Ghost, FlaskConical, Send, Users, Crown 
} from "lucide-react";
import { TokenImage } from "../atoms/TokenImage";
import { cn } from "@/lib/utils";

interface TokenCardProps {
  name: string;
  symbol: string;
  imageUrl?: string;
  timeAgo: string;
  marketCap: string;
  volume: string;
  txns: number;
  buyAmount: string; 
  statusColor?: string; // "border-status-increase" etc.
  badges: {
    type: "increase" | "decrease" | "neutral";
    label: string;
    icon: React.ReactNode;
  }[];
}

export const TokenCard = ({ 
  name, symbol, marketCap, volume, timeAgo, buyAmount, badges, statusColor 
}: TokenCardProps) => {
  return (
    <div className="flex gap-2 p-2 bg-card hover:bg-card-hover border border-card-border rounded-md transition-colors group cursor-pointer w-full max-w-[480px]">
      
      {/* SECTION 1: Left (Image) */}
      <div className="flex flex-col gap-1 items-center">
        <div className="relative">
            {/* Pass the dynamic border color here */}
            <TokenImage alt={name} borderColor={statusColor || "border-card-border"} />
            
            {/* The little badge - keeping it as you had it */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-card flex items-center justify-center">
                <span className="text-[8px] text-black font-bold">💊</span>
            </div>
        </div>
        <span className="text-xxs text-text-tertiary truncate max-w-[48px]">CjcT...hHFv</span>
      </div>

      {/* SECTION 2: Center (Info Core) */}
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        
        {/* Header Row: Symbol (Bold) & Name (Muted) */}
        <div className="flex items-center gap-1.5 pt-0.5">
          <span className="text-text-primary font-bold text-sm truncate leading-none">{symbol}</span>
          <span className="text-text-tertiary text-xs truncate leading-none">{name}</span>
          <div className="w-3 h-3 text-text-tertiary opacity-50"><LinkIcon size={10} /></div>
        </div>

        {/* Meta Row: Socials & Icons (REORDERED to match reference) */}
        <div className="flex items-center gap-2 text-xxs text-text-tertiary h-5">
          {/* Time */}
          <span className="text-status-increase font-medium">{timeAgo}</span>
          
          {/* Social Icons Group */}
          <div className="flex items-center gap-1.5 pl-1">
             <Send className="w-3 h-3 hover:text-text-primary cursor-pointer" /> {/* Telegram */}
             <LinkIcon className="w-3 h-3 hover:text-text-primary cursor-pointer" /> {/* Website */}
             <Search className="w-3 h-3 hover:text-text-primary cursor-pointer" />
          </div>

          <div className="w-[1px] h-2 bg-white/10 mx-1"></div> {/* Small Separator */}

          {/* Stats Group */}
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-0.5 hover:text-text-primary">
                 <Users className="w-3 h-3" /> <span className="text-[10px]">94</span>
             </div>
             <div className="flex items-center gap-0.5 hover:text-text-primary">
                 <Shield className="w-3 h-3" /> <span className="text-[10px]">0</span>
             </div>
             <div className="flex items-center gap-0.5 hover:text-text-primary">
                 <Trophy className="w-3 h-3" /> <span className="text-[10px]">0</span>
             </div>
             <div className="flex items-center gap-0.5 hover:text-text-primary">
                 <Crown className="w-3 h-3 text-yellow-500" /> <span className="text-[10px]">1/1</span>
             </div>
          </div>
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {badges.map((badge, i) => (
            <div 
              key={i} 
              className={cn(
                "flex items-center gap-1 px-1.5 py-[1px] rounded text-[10px] font-medium bg-opacity-10 border border-transparent",
                badge.type === "increase" ? "bg-status-increase/10 text-status-increase" : 
                badge.type === "decrease" ? "bg-status-decrease/10 text-status-decrease" :
                "bg-gray-500/10 text-gray-400"
              )}
            >
              {badge.icon}
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Right (Metrics & Action) */}
      <div className="flex flex-col items-end gap-0.5 min-w-[90px]">
        {/* MC & Vol */}
        <div className="text-right flex flex-col gap-0.5">
          <div className="flex items-center justify-end gap-1">
            <span className="text-text-tertiary text-[10px] font-medium uppercase tracking-wide">MC</span>
            {/* Adjusted color to be slightly more gold/yellow as seen in 'Migrated' column */}
            <span className="text-[#F2C366] text-sm font-bold tracking-tight">{marketCap}</span>
          </div>
          <div className="flex items-center justify-end gap-1">
             <span className="text-text-tertiary text-[10px] font-medium">V</span>
             <span className="text-text-primary text-xs font-semibold">{volume}</span>
          </div>
        </div>

        {/* NEW: TX Row with F (Floor/Fee) + Solana Icon */}
        <div className="flex items-center justify-end gap-1.5 w-full my-1">
           {/* The missing 'F' section */}
           <div className="flex items-center gap-0.5">
              <span className="text-[10px] text-text-tertiary font-bold">F</span>
              <img src="/solana-icon.png" alt="" className="w-2 h-2 opacity-70" /> {/* Placeholder for Sol Icon */}
              <span className="text-[10px] text-text-tertiary">0.036</span>
           </div>

           {/* TX Counter */}
           <div className="flex items-center gap-1">
               <span className="text-[10px] text-text-tertiary">TX 105</span>
               {/* Thinner progress bar */}
               <div className="w-8 h-0.5 bg-status-decrease/30 rounded-full flex">
                  <div className="bg-status-increase w-[60%] h-full rounded-full shadow-[0_0_4px_theme(colors.status.increase)]"></div>
               </div>
           </div>
        </div>

        {/* The Action Button */}
        <button className="flex items-center justify-center gap-1 bg-[#526FFF] hover:bg-[#6683FF] text-white text-[11px] font-bold px-4 py-1.5 rounded-full w-full mt-auto transition-all shadow-lg shadow-blue-900/20">
            <Zap className="w-3 h-3 fill-white" />
            {buyAmount}
        </button>
      </div>

    </div>
  );
};