import {
    HelpCircle,
    LayoutTemplate,
    Bookmark,
    Keyboard,
    Volume2,
    Crosshair,
    Wallet,
    Box,
    ChevronDown,
    Zap
} from "lucide-react";

export const PulseHeader = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <h1 className="flex font-md text-xl text-text-primary tracking-tight">Pulse</h1>

                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center">
                        <img src="/images/solanaIcon.svg" alt="" className="w-6 h-6 text-cyan-400 fill-cyan-400" />
                    </div>
                    <div className="flex items-center justify-center">
                        <Box className="w-4 h-4 text-yellow-400" />
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex items-center gap-1">
                <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                    <HelpCircle size={18} />
                </button>

                <button className="flex items-center gap-2 bg-[#1A1D24] hover:bg-[#25282F] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/5 mx-2 transition-all">
                    <LayoutTemplate size={14} />
                    <span>Display</span>
                    <span className="text-[10px] ml-1">▼</span>
                </button>

                <div className="flex items-center gap-1">
                    <button className="p-2 text-white hover:text-white transition-colors">
                        <Bookmark size={18} />
                    </button>
                    <button className="p-2 text-white hover:text-white transition-colors">
                        <Keyboard size={18} />
                    </button>
                    <button className="p-2 text-white hover:text-white transition-colors">
                        <Volume2 size={18} />
                    </button>
                    <button className="p-2 text-white hover:text-white transition-colors">
                        <Crosshair size={18} />
                    </button>
                </div>

                <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                <button className="flex items-center gap-1 bg-[#1A1D24] text-white px-3 py-1.5 rounded-full border border-white/5">
                    <Wallet size={18} />
                    <div className="flex items-center gap-1 text-[18px]">
                        <span className="text-xs font-mono"> 1 </span>
                        <img src="/images/solanaIcon.svg" alt="" className="w-3.5 h-3.5" />
                        <span className="text-xs font-mono">0</span>
                        <ChevronDown size={16} />
                    </div>
                </button>
                <div className="md:hidden flex items-center bg-[#1A1D24] rounded-full border border-white/10 h-6 px-2 py-3.5 ml-2">

                    <div className="flex items-center justify-between gap-8 px-2">
                        <div className="flex items-center gap-2">
                            <Zap className="w-3 h-3 text-text-tertiary fill-current" />
                            <span className="text-[13px] font-mono text-white leading-none">0</span>
                        </div>

                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                            <img src="images/solanaIcon.svg" alt="sol" className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                    </div>

                    <div className="w-[1px] h-6 bg-white/10"></div>

                    <div className="flex items-center gap-2 px-2 text-[13px] ">
                        <button className="text-[#526FFF] hover:text-[#6683FF] transition-colors leading-none">P1</button>
                        <button className="text-text-tertiary hover:text-white transition-colors leading-none">P2</button>
                        <button className="text-text-tertiary hover:text-white transition-colors leading-none">P3</button>
                    </div>

                </div>
            </div>
        </>
    );
};