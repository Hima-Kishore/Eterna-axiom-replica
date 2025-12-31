import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenData } from "@/types";
import { generateBatch } from "@/lib/mock-data";

interface PulseState {
  newPairs: TokenData[];
  finalStretch: TokenData[];
  migrated: TokenData[];
}

const initialState: PulseState = {
  newPairs: generateBatch(12),
  finalStretch: generateBatch(12),
  migrated: generateBatch(12),
};

const pulseSlice = createSlice({
  name: "pulse",
  initialState,
  reducers: {
    updateRandomToken: (state) => {
      const categories: (keyof PulseState)[] = ["newPairs", "finalStretch", "migrated"];
      const category = categories[Math.floor(Math.random() * categories.length)];
      
      const list = state[category];
      const index = Math.floor(Math.random() * list.length);
      const token = list[index];

      const currentVal = parseFloat(token.marketCap.replace("$", "").replace("K", ""));
      const change = (Math.random() - 0.5) * 2; // Random move between -1 and +1
      const newVal = Math.max(0.1, currentVal + change);
      
      state[category][index] = {
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

export const { updateRandomToken } = pulseSlice.actions;
export default pulseSlice.reducer;