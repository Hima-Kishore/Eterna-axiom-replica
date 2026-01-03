import React from 'react';
import { Search } from "lucide-react";

export const SearchBar = () => {
    return (
        <div className="hidden md:flex items-center bg-[#14151a] border border-white/5 rounded-full 2xl:px-3 py-1.5 w-full gap-1">
            <Search size={20} className="text-white mx-auto font-bold" />
            <input 
               type="text" 
               placeholder="Search by token or CA..." 
               className="hidden 2xl:block bg-transparent border-none outline-none text-xs text-white placeholder:text-text-tertiary"
            />
            <span className="hidden 2xl:block text-[14px] text-white border border-white/10 px-2 rounded-full">/</span>
         </div>
    );
};