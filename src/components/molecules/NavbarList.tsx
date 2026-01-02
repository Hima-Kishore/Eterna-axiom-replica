import React from 'react';

export const NavbarList = () => {
    return (
        <div className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-white">
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Discover</button>
           <button className="px-3 py-2 text-brand-primary hover:bg-brand-primary/10 rounded-md">Pulse</button>
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Trackers</button>
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Perpetuals</button>
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Yield</button>
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Vision</button>
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Portfolio</button>
           <button className="px-3 py-2 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors">Rewards</button>
        </div>
    );
};