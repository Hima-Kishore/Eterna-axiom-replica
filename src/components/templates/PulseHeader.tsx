import { 
  HelpCircle, 
  LayoutTemplate, 
  Bookmark, 
  Keyboard, 
  Volume2, 
  Settings, 
  Wallet,
  Box
} from "lucide-react";

export const PulseHeader = () => {
    return (
        <>
            <div className="flex items-center gap-4">
            <h1 className="font-bold text-xl text-text-primary tracking-tight">Pulse</h1>
            
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <img src="/images/solanaIcon.svg" alt="" className="w-6 h-6 text-cyan-400 fill-cyan-400" />
                </div>
                <div className="flex items-center justify-center">
                    <Box className="w-4 h-4 text-yellow-400" />
                </div>
            </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
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
                    <Settings size={18} />
                </button>
            </div>

            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <button className="flex items-center gap-1 bg-[#1A1D24] text-white px-3 py-1.5 rounded-full border border-white/5">
                <Wallet size={18} />
                <div className="flex items-center gap-1 text-[18px]">
                    <span className="text-xs font-mono"> 1 </span>
                    <img src="/images/solanaIcon.svg" alt="" className="w-3.5 h-3.5"/>
                    <span className="text-xs font-mono">0</span>
                </div>
            </button>
            </div>
        </>
    );
};