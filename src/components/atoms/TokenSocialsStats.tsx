import React from "react";
import { 
  Shield, Users, Crown
} from "lucide-react";

export const TokenSocialsStats = ({holders}: { holders: number }) => {
    return (
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
    );
};