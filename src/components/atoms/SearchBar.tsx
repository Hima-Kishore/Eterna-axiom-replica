import React from 'react';
import { Search } from "lucide-react";

export const SearchBar = () => {
    return (
        <div className="hidden md:flex items-center bg-[#14151a] border border-white/5 rounded-full px-3 py-1.5 w-full gap-1">
            <Search size={24} className="text-white font-bold" />
            <input 
               type="text" 
               placeholder="Search by token or CA..." 
               className="bg-transparent border-none outline-none text-xs text-white placeholder:text-text-tertiary"
            />
            <span className="text-[14px] text-white border border-white/10 px-2 rounded-full">/</span>
         </div>
    );
};