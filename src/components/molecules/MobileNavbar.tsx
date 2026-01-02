import React from "react";
import { TabButton } from "@/components/atoms/TabButton";
import { Tab } from "@/types/index";

interface MobileNavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const MobileNavbar = ({ activeTab, onTabChange }: MobileNavbarProps) => {

    return(
        <div className="md:hidden flex items-center justify-between pb-4 bg-background shrink-0">
         <div className="flex rounded-full p-1">
            <TabButton id="newPairs" label="New Pairs" isActive={activeTab === "newPairs"} onClick={onTabChange}/>
            <TabButton id="finalStretch" label="Final Stretch" isActive={activeTab === "finalStretch"} onClick={onTabChange} />
            <TabButton id="migrated" label="Migrated" isActive={activeTab === "migrated"} onClick={onTabChange} />
         </div>
      </div>
    );
};