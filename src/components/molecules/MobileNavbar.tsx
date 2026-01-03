import React from "react";
import { TabButton } from "@/components/atoms/TabButton";
import { Tab } from "@/types/index";
import { Box, Settings } from "lucide-react";

interface MobileNavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const MobileNavbar = ({ activeTab, onTabChange }: MobileNavbarProps) => {

  return (
    <div className="flex lg:hidden flex items-center justify-start gap-4 pb-4 px-2 bg-background shrink-0">
      <div className="flex sm:hidden items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center">
          <img src="/images/solanaIcon.svg" alt="" className="w-6 h-6 text-cyan-400 fill-cyan-400" />
        </div>
        <div className="flex items-center justify-center">
          <Box className="w-4 h-4 text-yellow-400" />
        </div>
      </div>
      <div className="flex rounded-full shrink-0 p-1">
        <TabButton id="newPairs" label="New Pairs" isActive={activeTab === "newPairs"} onClick={onTabChange} />
        <TabButton id="finalStretch" label="Final Stretch" isActive={activeTab === "finalStretch"} onClick={onTabChange} />
        <TabButton id="migrated" label="Migrated" isActive={activeTab === "migrated"} onClick={onTabChange} />
      </div>
      <div className="flex items-center px-2 py-1 gap-2 border border-white/30 rounded-full absolute ml-1 right-4">
        <span className="text-sm text-white/80 font-[500]">P1</span>
        <Settings size={16}/>
      </div>
    </div>
  );
};