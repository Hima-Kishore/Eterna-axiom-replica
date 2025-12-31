import { createSlice } from "@reduxjs/toolkit";
import { TokenData } from "@/types";
import { generateBatch } from "@/lib/mock-data";

interface PulseState {
  newPairs: TokenData[];
  finalStretch: TokenData[];
  migrated: TokenData[];
  isInitialized: boolean;
}

const initialState: PulseState = {
  newPairs: [],
  finalStretch: [],
  migrated: [],
  isInitialized: false,
};

const pulseSlice = createSlice({
  name: "pulse",
  initialState,
  reducers: {
    initializeMockData: (state) => {
      state.newPairs = generateBatch(12);
      state.finalStretch = generateBatch(12);
      state.migrated = generateBatch(12);
      state.isInitialized = true;
    },
    updateRandomToken: (state) => {
      if (!state.isInitialized) return;

      const categories: (keyof PulseState)[] = ["newPairs", "finalStretch", "migrated"];
      const category = categories[Math.floor(Math.random() * 3)];
      
      if (category === "isInitialized") return;
      
      const list = state[category] as TokenData[];
      if (list.length === 0) return;

      const index = Math.floor(Math.random() * list.length);
      const token = list[index];

      const currentVal = parseFloat(token.marketCap.replace("$", "").replace("K", ""));
      const change = (Math.random() - 0.5) * 5; 
      const newVal = Math.max(0.1, currentVal + change);
      
      list[index] = {
        ...token,
        marketCap: `$${newVal.toFixed(1)}K`,
        statusColor: change > 0 ? "border-status-increase" : "border-status-decrease",
        badges: token.badges.map(b => 
          b.type !== "neutral" && b.label.includes("%") 
            ? { ...b, type: change > 0 ? "increase" : "decrease" } 
            : b
        )
      };
    },
  },
});

export const { updateRandomToken, initializeMockData } = pulseSlice.actions;
export default pulseSlice.reducer;