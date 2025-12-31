import React from "react";
import { 
  Link as LinkIcon, Search, Shield, Trophy, 
  Send, Users, Crown 
} from "lucide-react";

interface TokenSocialsProps {
  timeAgo: string;
  holders?: number;
}

export const TokenSocials = ({ timeAgo, holders = 94 }: TokenSocialsProps) => {
  return (
    <div className="flex items-center gap-2 text-xxs text-text-tertiary h-5">
      {/* Time */}
      <span className="text-status-increase font-medium whitespace-nowrap">{timeAgo}</span>
      
      {/* Links Group */}
      <div className="flex items-center gap-1.5 pl-1">
         <Send className="w-3 h-3 hover:text-text-primary cursor-pointer transition-colors" />
         <LinkIcon className="w-3 h-3 hover:text-text-primary cursor-pointer transition-colors" />
         <Search className="w-3 h-3 hover:text-text-primary cursor-pointer transition-colors" />
      </div>

      <div className="w-[1px] h-2 bg-white/10 mx-1"></div>

      {/* Stats Group */}
      <div className="flex items-center gap-2">
         <div className="flex items-center gap-0.5 hover:text-text-primary transition-colors">
             <Users className="w-3 h-3" /> <span className="text-[10px]">{holders}</span>
         </div>
         <div className="flex items-center gap-0.5 hover:text-text-primary transition-colors">
             <Shield className="w-3 h-3" /> <span className="text-[10px]">0</span>
         </div>
         <div className="flex items-center gap-0.5 hover:text-text-primary transition-colors">
             <Crown className="w-3 h-3 text-yellow-500" /> <span className="text-[10px]">1/1</span>
         </div>
      </div>
    </div>
  );
};