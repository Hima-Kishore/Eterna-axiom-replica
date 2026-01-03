import React from "react";
import {
    X,
    Wallet,
    Activity,
    Sliders,
    Flame,
    ChevronDown,
    Settings,
    Compass,
    ChartNoAxesColumn,
    CreditCard,
    Bell,
    Palette,
    FileText,
    Satellite,
    FileUser,
    ArrowRightLeft
} from "lucide-react";

export const Footer = () => {
    return (
        <div className="">

            <div className="hidden h-9 bg-[#09090b] border-t border-white/5 md:flex items-center justify-between px-6 mt-6 text-[10px] font-medium text-text-tertiary shrink-0 z-50 select-none">

                <div className="flex items-center gap-3 shrink-0">
                    <button className="flex items-center gap-1.5 bg-brand-primary/20 text-brand-primary px-2 py-1 rounded hover:bg-brand-primary/20 shrink-0 transition-colors">
                        <Sliders size={16} />
                        <span className="text-xs">PRESET 1</span>
                    </button>

                    <button className="flex items-center gap-1 text-white px-1.5 py-0.5 rounded-full border border-white/10 shrink-0 transition-colors">
                        <Wallet size={14} />
                        <div className="flex items-center gap-1 text-[16px]">
                            <span className="text-xs font-mono"> 1 </span>
                            <img src="/images/solanaIcon.svg" alt="" className="w-3 h-3" />
                            <span className="text-xs font-mono">0</span>
                            <ChevronDown size={14} />
                        </div>
                    </button>

                    <div className="flex items-center gap-1.5 pl-3 border-l border-white/20 hover:text-white cursor-pointer transition-colors">
                        <Settings size={14} />
                    </div>

                    <div className="flex items-center gap-3 pl-2">
                        <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                            <Wallet size={16} />
                            <span className="text-xs text-white/80">Wallet</span>
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                            <X size={16} />
                            <span className="text-xs text-white/80">Twitter</span>
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                            <Compass size={16} />
                            <span className="text-xs text-white/80">Discover</span>
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                            <Activity size={16} />
                            <span className="text-xs text-white/80">Pulse</span>
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                            <ChartNoAxesColumn size={16} />
                            <span className="text-xs text-white/80">PnL</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex border-l border-white/20 pl-3 items-center gap-6">
                        <div className="hidden xl:flex items-center gap-1.5 text-orange-400 text-xs">
                            <span className="font-bold">₿</span>
                            <span>$98.4K</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs">
                            <span className="hidden xl:flex font-bold">◎</span>
                            <span className="hidden text-blue text-xs mr-1 xl:flex">$205.50</span>
                            <img src="/images/solanaIcon.svg" alt="" />
                            <span className="text-xs text-green-400">$128.43</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">

                    <div className="hidden 2xl:flex items-center gap-3 border-r border-white/5 pr-4">
                        <div className="flex items-center gap-1 text-text-tertiary">
                            <Flame size={12} />
                            <span>$0.002</span>
                        </div>
                        <div className="flex items-center gap-1 text-text-tertiary">
                            <Activity size={12} />
                            <span>0.003</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-1.5 py-1 rounded text-xs text-status-increase/70 xl:bg-status-increase/20 shrink-0 ">
                        <div className="w-2 h-2 rounded-full bg-status-increase/70 animate-pulse"></div>
                        <span className="hidden xl:flex">Connection is stable</span>
                    </div>

                    <div className="flex items-center gap-1 text-white/80 text-xs cursor-pointer pr-2">
                        <span>GLOBAL</span>
                        <ChevronDown size={14} />
                    </div>

                    <div className="flex items-center gap-4 px-2 text-white/80 border-l border-white/20">
                        <div className="flex items-center gap-4 pr-2 border-r border-white/20">
                            <CreditCard size={16} />
                            <Bell size={16} />
                            <Palette size={16} />
                        </div>

                        <div className="flex items-center gap-1">
                            <FileText size={16} />
                            <span>Docs</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-14 flex justify-around items-center px-3 mt-1 md:hidden">
                <div className="flex flex-col items-center gap-1 text-white/50">
                    <Flame size={18}/>
                    <span className="text-xs font-small">Trending</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-white/50">
                    <Satellite size={18}/>
                    <span className="text-xs font-small">Track</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-white">
                    <Activity size={18}/>
                    <span className="text-xs font-small">Pulse</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-white/50">
                    <ArrowRightLeft size={16} className="border border-white/50 px-1 py-1 rounded-full"/>
                    <span className="text-xs font-small">Perpetuals</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-white/50">
                    <FileUser size={18}/>
                    <span className="text-xs font-small">Account</span>
                </div>
            </div>

        </div>
    );
};