import React from "react";
import { 
  Link as LinkIcon, Search, Send
} from "lucide-react";

export const TokenSocialsLinks = () => {
    return (
        <div className="flex items-center gap-1.5 pl-1">
            <Send className="w-3 h-3 hover:text-text-primary cursor-pointer transition-colors" />
            <LinkIcon className="w-3 h-3 hover:text-text-primary cursor-pointer transition-colors" />
            <Search className="w-3 h-3 hover:text-text-primary cursor-pointer transition-colors" />
        </div>
    );
};