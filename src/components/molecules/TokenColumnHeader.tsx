import React from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';


export const TokenColumnHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-b-2 border-white/5 mb-0 bg-surface-dark sticky top-0 z-10">
            <h2 className="text-sm font-bold text-text-primary">{title}</h2>
            <div className="flex gap-2">
                <div className="p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                    <ArrowUpDown className="w-3 h-3 text-text-tertiary" />
                </div>
                <div className="p-1.5 hover:bg-white/5 rounded cursor-pointer transition-colors">
                    <SlidersHorizontal className="w-3 h-3 text-text-tertiary" />
                </div>
            </div>
        </div>
    );
};