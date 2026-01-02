import React from "react";
import { LinkIcon } from "lucide-react";

export const TokenIdentity = ({ symbol, name }: { symbol: string; name: string }) => {
    return (
        <div className="flex items-center gap-1.5 pt-0.5">
            <span className="text-text-primary font-bold text-sm truncate leading-none">{symbol}</span>
            <span className="text-text-tertiary text-xs truncate leading-none">{name}</span>
            <div className="w-3 h-3 text-text-tertiary opacity-50"><LinkIcon size={10} /></div>
        </div>
    );
};