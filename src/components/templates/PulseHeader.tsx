import { 
  HelpCircle, 
  LayoutTemplate, 
  Bookmark, 
  Keyboard, 
  Volume2, 
  Settings, 
  PanelRightOpen,
  Box,
  Zap 
} from "lucide-react";

export const PulseHeader = () => {
    return (
        <>
            <div className="flex items-center gap-4">
            <h1 className="font-bold text-xl text-text-primary tracking-tight">Pulse</h1>
            
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                </div>
                <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Box className="w-3.5 h-3.5 text-yellow-400" />
                </div>
            </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
            <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                <HelpCircle size={18} />
            </button>

            <button className="flex items-center gap-2 bg-[#1A1D24] hover:bg-[#25282F] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/5 mx-2 transition-all">
                <LayoutTemplate size={14} />
                <span>Display</span>
                <span className="text-[10px] ml-1">▼</span>
            </button>

            <div className="flex items-center gap-1">
                <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                    <Bookmark size={18} />
                </button>
                <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                    <Keyboard size={18} />
                </button>
                <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                    <Volume2 size={18} />
                </button>
                <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                    <Settings size={18} />
                </button>
            </div>

            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <button className="flex items-center gap-1 bg-[#1A1D24] text-text-tertiary px-2 py-1.5 rounded-md border border-white/5">
                <PanelRightOpen size={16} />
                <span className="text-xs font-mono">1 = 0</span>
            </button>
            </div>
        </>
    );
};