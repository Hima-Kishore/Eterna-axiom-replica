"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { PulseColumn } from "@/components/organisms/PulseColumn";
import { useTokenSocket } from "@/hooks/useTokenSocket";
import { initializeMockData } from "@/lib/features/pulseSlice";
import { cn } from "@/lib/utils";

type Tab = "newPairs" | "finalStretch" | "migrated";

export const PulseDashboard = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<Tab>("newPairs");
  
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

  const TabButton = ({ id, label }: { id: Tab; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={cn(
        "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
        activeTab === id
          ? "bg-[#25282F] text-white"
          : "text-text-tertiary hover:text-white"
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      
      {/* MOBILE HEADER (Visible only on small screens) */}
      <div className="md:hidden flex items-center justify-between pb-4 bg-background shrink-0">
         <div className="flex rounded-full p-1">
            <TabButton id="newPairs" label="New Pairs" />
            <TabButton id="finalStretch" label="Final Stretch" />
            <TabButton id="migrated" label="Migrated" />
         </div>
      </div>

      <div className="flex-1 overflow-hidden border-4 border-white/5 relative rounded-lg">
        <div className="flex h-full rounded-md">
          
          {/* COLUMN 1: New Pairs */}
          <PulseColumn 
            title="New Pairs" 
            tokens={newPairs} 
            className={cn(
                "flex",
                activeTab !== "newPairs" && "hidden md:flex"
            )}
          />
          
          {/* COLUMN 2: Final Stretch */}
          <PulseColumn 
            title="Final Stretch" 
            tokens={finalStretch} 
            className={cn(
                "hidden md:flex",
                activeTab === "finalStretch" && "flex"
            )}
          />
          
          {/* COLUMN 3: Migrated */}
          <PulseColumn 
            title="Migrated" 
            tokens={migrated} 
            className={cn(
                "hidden md:flex", 
                activeTab === "migrated" && "flex"
            )}
          />

        </div>
      </div>
    </div>
  );
};