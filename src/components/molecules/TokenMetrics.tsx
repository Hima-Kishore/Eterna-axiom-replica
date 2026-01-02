import React from "react";
import { TokenMetricsTop } from "../atoms/TokenMetricsTop";
import { TokenMetricsBottom } from "../atoms/TokenMetricsBottom";
import { TokenMetricsButton } from "../atoms/TokenMetricsButton";

interface TokenMetricsProps {
  marketCap: string;
  volume: string;
  buyAmount: string;
  onBuy?: () => void;
}

export const TokenMetrics = ({ marketCap, volume, buyAmount, onBuy }: TokenMetricsProps) => {
  return (
    <div className="flex flex-col items-end gap-0.5 min-w-[90px]">
      
      <TokenMetricsTop marketCap={marketCap} volume={volume} />

      <TokenMetricsBottom />

      <TokenMetricsButton buyAmount={buyAmount} onBuy={onBuy} />

    </div>
  );
};