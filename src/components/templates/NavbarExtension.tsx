import React from 'react';
import { Settings, Star, LineChart as Graph} from 'lucide-react';

export const NavbarExtension = () => {
    return (
        <div className="flex items-center gap-2 border-b border-white/10 mb-4 px-4">
            <button className="p-1.5 text-text-tertiary rounded-full transition-colors">
                <Settings size={13} />
            </button>
            <div className="h-3 w-[1px] bg-white/10"></div>
            <button className="p-1.5 text-white rounded-full transition-colors">
                <Star size={13} />
            </button>
            <button className="p-1.5 text-text-tertiary rounded-full transition-colors">
                <Graph size={13} />
            </button>
            <div className="h-3 w-[1px] bg-white/10 mx-1"></div>
        </div>
    );
};