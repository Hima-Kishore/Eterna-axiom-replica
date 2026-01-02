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

  if (!isInitialized) {
    return <div className="px-1 py-4 text-text-tertiary">Initializing Exchange...</div>;
  }



  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      
      {/* MOBILE HEADER (Visible only on small screens) */}
      <MobileNavbar activeTab={activeTab} onTabChange={setActiveTab}/>

      <div className="flex-1 overflow-hidden border-2 border-white/5 relative rounded-md">
        <div className="flex h-full rounded-md">
          
          {/* COLUMN 1: Final Stretch */}
          <PulseColumn 
            title="Final Stretch" 
            tokens={finalStretch} 
            className={cn(
                "hidden md:flex",
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
                activeTab !== "newPairs" && "hidden md:flex"
            )}
            onTokenBuy={handleBuy}
          />
          
          
          {/* COLUMN 3: Migrated */}
          <PulseColumn 
            title="Migrated" 
            tokens={migrated} 
            className={cn(
                "hidden md:flex", 
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