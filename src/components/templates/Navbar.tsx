import React from "react";
import { UserCircle, ChevronDown, Menu, Search, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { NavbarList } from "@/components/molecules/NavbarList";
import { SearchBar } from "@/components/atoms/SearchBar";
import { WalletDetails } from "@/components/atoms/WalletDetails";
import { StarIcon } from "@/components/atoms/StarIcon";
import { BellIcon } from "@/components/atoms/BellIcon";

export const Navbar = () => {
  return (
    <nav className="sm:h-16 border-b-2 border-white/5 bg-background flex items-center justify-between pr-1 sm:px-4 py-1.5 sm:py-0 mb-2 sm:mb-0 shrink-0 z-50">
      <div className="flex items-center gap-6">
        <BrandLogo />

        <NavbarList />
      </div>

      <div className="flex items-center gap-1 sm:gap-3 absolute right-2">
         
         <SearchBar />

         <button className="hidden sm:flex items-center gap-2 bg-[#14151a] border border-white/5 rounded-full px-2 py-1.5 text-xs font-bold hover:bg-white/5 shrink-0 transition-colors">
            <img src="/images/solanaIcon.svg" alt="" className="text-brand-primary" />
            <span>SOL</span>
            <div>
              <ChevronDown size={18} className="text-[10px] text-white font-bold"/>
            </div>
         </button>

         <button className="hidden sm:flex bg-[#526FFF] hover:bg-[#425ADD] text-black text-[14px] font-bold px-4 py-1.5 rounded-full transition-colors items-center gap-2">
            Deposit
         </button>

         <div className="hidden sm:flex">
            <StarIcon />
         </div>

         <div className="hidden sm:flex">
          <BellIcon />
         </div>

         <WalletDetails />

         <div className="flex gap-2 sm:hidden bg-[#1A1D24] border border-white/5 rounded-full p-2">
            <Copy size={16} />
            <span className="text-xs">Paste CA</span>
         </div>

         <div className="block sm:hidden bg-[#1A1D24] border border-white/5 rounded-full p-2">
            <Search size={16} />
         </div>

         <button className="p-2 text-white bg-[#1A1D24] rounded-full transition-colors">
            <UserCircle size={20} />
         </button>

         <div className="p-2 block sm:hidden bg-[#1A1D24] rounded-full">
            <Menu size={20} />
         </div>
      </div>
    </nav>
  );
};