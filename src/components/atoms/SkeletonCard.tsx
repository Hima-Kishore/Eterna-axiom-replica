import React from "react";

export const SkeletonCard = () => {
  return (
    <div className="flex gap-2 px-2 py-1.5 border-b border-white/5 w-full min-h-[52px] animate-pulse select-none">
      
      <div className="flex flex-col gap-2 items-center mr-2 pb-2 shrink-0">
        <div className="w-[74px] h-[74px] rounded-md bg-white/15" />
        <div className="h-3 w-14 bg-white/5 rounded-md animate-pulse" />
      </div>

      <div className="flex flex-col justify-between flex-1 gap-1.5 py-1">
         <div className="flex items-center gap-2">
            <div className="h-5 w-[86px] bg-white/10 rounded" />
            <div className="h-4 w-[142px] bg-white/5 rounded" />
         </div>
         <div className="flex gap-2 mb-auto">
            <div className="h-3 w-5 bg-white/5 rounded" />
            <div className="h-3 w-5 bg-white/5 rounded" />
            <div className="h-3 w-5 bg-white/5 rounded mr-2" />
            <div className="h-3 w-5 bg-white/5 rounded" />
            <div className="h-3 w-5 bg-white/5 rounded" />
            <div className="h-3 w-5 bg-white/5 rounded" />
         </div>
         <div className="flex gap-2 mb-2">
            <div className="h-5 w-12 bg-white/10 rounded-md" />
            <div className="h-5 w-12 bg-white/10 rounded-md" />
            <div className="h-5 w-12 bg-white/10 rounded-md" />
         </div>
      </div>

      <div className="flex flex-col items-end gap-2.5">
         <div className="h-5 w-16 bg-white/10 rounded mt-2" />
         <div className="h-3 w-10 bg-white/5 rounded" />
         <div className="flex gap-1">
            <div className="h-3 w-16 bg-white/5 rounded" />
            <div className="h-3 w-14 bg-white/5 rounded" />
         </div>
         <div className="h-6 w-16 bg-white/15 rounded-full" />
      </div>

    </div>
  );
};