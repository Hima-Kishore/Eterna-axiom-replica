import React from 'react';
import { BadgeDollarSign, Wallet, ChevronDown } from "lucide-react";

export const WalletDetails = () => {
    return (
        <button className="flex items-center sm:gap-2 bg-[#1A1D24] text-white px-3 py-1.5 rounded-full border border-white/5 shrink-0">
            <Wallet size={18} />
            <div className="flex sm:hidden xl:flex items-center sm:gap-1">
                <img src="/images/solanaIcon.svg" alt="" className="w-4 h-4"/>
                <span className="text-sm font-mono text-[18px]">0</span>
                <div className="h-3 w-[1px] bg-white/10 mx-1"></div>
                <BadgeDollarSign size={14} />
            <span className="text-sm font-mono text-[18px]"> 1 </span>
            </div>
            <ChevronDown size={18} />
        </button>
    );
};