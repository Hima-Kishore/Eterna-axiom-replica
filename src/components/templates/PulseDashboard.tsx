"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { PulseColumn } from "@/components/organisms/PulseColumn";
import { MobileNavbar } from "@/components/molecules/MobileNavbar";
import { BuyModal } from "@/components/molecules/BuyModal";
import { useTokenSocket } from "@/hooks/useTokenSocket";
import { initializeMockData } from "@/lib/features/pulseSlice";
import { cn } from "@/lib/utils";
import { TokenData, Tab } from "@/types";
import { SkeletonCard } from "../atoms/SkeletonCard";

export const PulseDashboard = () => {
  const dispatch = useDispatch();
  
  const [activeTab, setActiveTab] = useState<Tab>("newPairs");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenData | null>(null);

  const handleBuy = (token: TokenData) => {
    setSelectedToken(token);
    setIsModalOpen(true);
  };
  
  useTokenSocket();

  const { newPairs, finalStretch, migrated, isInitialized } = useSelector(
    (state: RootState) => state.pulse
  );

  useEffect(() => {
    dispatch(initializeMockData());
  }, [dispatch]);

  // if (!isInitialized) {
  //   return <div className="px-1 py-4 text-text-tertiary">Initializing Exchange...</div>;
  // }

  if (!isInitialized) {
    return (
      <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-surface-dark mx-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col h-full min-w-[320px] lg:min-w-[400px] flex-1 border-r border-white/5 last:border-r-0">
            
            <div className="flex items-center justify-between gap-6 px-3 py-6 border-b border-white/5 h-10">
               <div className="h-6 w-24 bg-white/20 rounded-md animate-pulse" />
               <div className="h-5 w-[152px] bg-white/15 rounded-full animate-pulse ml-auto" />
               <div className="h-4 w-4 bg-white/10 rounded animate-pulse" />
            </div>

            <div className="flex-1 overflow-hidden">
               {Array.from({ length: 12 }).map((_, idx) => (
                  <SkeletonCard key={idx} />
               ))}
            </div>
          </div>
        ))}
      </div>
    );
  }



  return (
    <div className="flex-1 flex flex-col overflow-hidden relative px-1.5 sm:px-6">
      
      {/* MOBILE HEADER (Visible only on small screens) */}
      <MobileNavbar activeTab={activeTab} onTabChange={setActiveTab}/>

      <div className="flex-1 overflow-hidden border-2 border-white/5 relative rounded-md">
        <div className="flex h-full rounded-md">
          
          {/* COLUMN 1: Final Stretch */}
          <PulseColumn 
            title="Final Stretch" 
            tokens={finalStretch} 
            className={cn(
                "hidden lg:flex shrink-1",
                activeTab === "finalStretch" && "flex"
            )}
            onTokenBuy={handleBuy}
          />

          {/* COLUMN 2: New Pairs */}
          <PulseColumn 
            title="New Pairs" 
            tokens={newPairs} 
            className={cn(
                "flex",
                activeTab !== "newPairs" && "hidden lg:flex shrink-1"
            )}
            onTokenBuy={handleBuy}
          />
          
          
          {/* COLUMN 3: Migrated */}
          <PulseColumn 
            title="Migrated" 
            tokens={migrated} 
            className={cn(
                "hidden lg:flex shrink-1", 
                activeTab === "migrated" && "flex"
            )}
            onTokenBuy={handleBuy}
          />

        </div>
      </div>
      <BuyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tokenSymbol={selectedToken?.symbol || "TOKEN"} 
      />
    </div>
  );
};