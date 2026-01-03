import React from 'react';

export const BrandLogo = () => {
    return (
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white"></div>
           </div>
           <span className="hidden font-[400] text-[24px] 2xl:flex items-end gap-2 tracking-tight text-white">AXIOM <span className="text-white font-[200] text-sm pb-1">Pro</span></span>
        </div>
    );
};