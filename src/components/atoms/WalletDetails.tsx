import React from 'react';
import { Globe, Wallet } from "lucide-react";

export const WalletDetails = () => {
    return (
        <button className="flex items-center gap-2 bg-[#1A1D24] text-white px-3 rounded-full border border-white/5">
            <Wallet size={24} />
            <img src="/images/solanaIcon.svg" alt="" className="w-3.5 h-3.5"/>
            <span className="text-md font-mono text-[18px]">0</span>
            <div className="h-3 w-[1px] bg-white/10 mx-2"></div>
            <Globe size={20} />
            <span className="text-md font-mono text-[18px]"> 1 </span>
         </button>
    );
};