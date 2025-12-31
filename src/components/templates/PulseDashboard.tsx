"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { PulseColumn } from "@/components/organisms/PulseColumn";
import { useTokenSocket } from "@/hooks/useTokenSocket";
import { initializeMockData } from "@/lib/features/pulseSlice";

export const PulseDashboard = () => {
  const dispatch = useDispatch();
  
  useTokenSocket();

  const { newPairs, finalStretch, migrated, isInitialized } = useSelector(
    (state: RootState) => state.pulse
  );

  useEffect(() => {
    dispatch(initializeMockData());
  }, [dispatch]);

  if (!isInitialized) {
    return <div className="p-4 text-text-tertiary">Initializing Exchange...</div>;
  }

  return (
    <div className="flex-1 overflow-hidden relative p-0.5">
      <div className="flex h-full border-2 border-white/5 rounded-sm">
        
        <PulseColumn title="New Pairs" tokens={newPairs} />
        
        <PulseColumn 
            title="Final Stretch" 
            tokens={finalStretch} 
            className="hidden md:flex" 
        />
        
        <PulseColumn 
            title="Migrated" 
            tokens={migrated} 
            className="hidden md:flex" 
        />

      </div>
    </div>
  );
};