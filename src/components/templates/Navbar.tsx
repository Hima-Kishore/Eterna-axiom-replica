import React from "react";
import { UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { NavbarList } from "@/components/molecules/NavbarList";
import { SearchBar } from "@/components/atoms/SearchBar";
import { WalletDetails } from "@/components/atoms/WalletDetails";
import { StarIcon } from "@/components/atoms/StarIcon";
import { BellIcon } from "@/components/atoms/BellIcon";

export const Navbar = () => {
  return (
    <nav className="h-16 border-b-2 border-white/5 bg-background flex items-center justify-between px-4 shrink-0 z-50">
      <div className="flex items-center gap-6">
        <BrandLogo />

        <NavbarList />
      </div>

      <div className="flex items-center gap-3">
         
         <SearchBar />

         <button className="hidden md:flex items-center gap-2 bg-[#14151a] border border-white/5 rounded-full px-2 py-1.5 text-xs w-full font-bold hover:bg-white/5 transition-colors">
            <img src="/images/solanaIcon.svg" alt="" className="text-brand-primary" />
            <span>SOL</span>
            <span className="text-[10px] text-white">▼</span>
         </button>

         <button className="bg-[#526FFF] hover:bg-[#425ADD] text-black text-[14px] font-bold px-4 py-1.5 rounded-full transition-colors flex items-center gap-2">
            Deposit
         </button>

         <StarIcon />

         <BellIcon />

         <WalletDetails />

         <button className="p-2 text-white bg-[#1A1D24] rounded-full transition-colors">
            <UserCircle size={20} />
         </button>
      </div>
    </nav>
  );
};