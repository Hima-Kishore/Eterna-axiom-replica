import React from 'react';
import { SlidersHorizontal, Zap, Layers } from 'lucide-react';


export const TokenColumnHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 shrink-0 bg-surface-dark z-10 h-14">

            <h2 className="text-[16px] font-[500] text-white">{title}</h2>

            <div className="flex items-center gap-4">

                <div className="flex items-center bg-[#0b0c12] rounded-full border border-white/10 h-6 py-1">

                    <div className="flex items-center justify-between gap-6 px-2">
                        <div className="flex items-center gap-1">
                            <Zap className="w-3 h-3 text-text-tertiary fill-current" />
                            <span className="text-[13px] font-mono text-white leading-none">0</span>
                        </div>

                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                            <img src="images/solanaIcon.svg" alt="sol" className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                    </div>

                    <div className="w-[1px] h-3 bg-white/10 mx-0.5"></div>

                    <div className="flex items-center gap-2 px-2 text-[13px] ">
                        <button className="text-[#526FFF] hover:text-[#6683FF] transition-colors leading-none">P1</button>
                        <button className="text-text-tertiary hover:text-white transition-colors leading-none">P2</button>
                        <button className="text-text-tertiary hover:text-white transition-colors leading-none">P3</button>
                    </div>

                </div>

                <button className="text-text-tertiary hover:text-white transition-colors ml-1">
                    <SlidersHorizontal size={14} />
                </button>

            </div>
        </div>
    );
};