import React from "react";
import { Copy } from "lucide-react";

export const TokenIdentity = ({ symbol, name }: { symbol: string; name: string }) => {
    return (
        <div className="flex items-center gap-1.5 pt-1">
            <span className="text-text-primary font-bold text-md truncate leading-none">{symbol}</span>
            <span className="text-text-tertiary text-md truncate leading-none">{name}</span>
            <div className="text-text-tertiary"><Copy size={14} /></div>
        </div>
    );
};