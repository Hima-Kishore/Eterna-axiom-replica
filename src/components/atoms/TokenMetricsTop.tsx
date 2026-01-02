
interface TokenMetricsTopProps {
  marketCap: string;
  volume: string;
}

export const TokenMetricsTop = ({ marketCap, volume }: TokenMetricsTopProps) => {
    return (
        <div className="text-right flex flex-col gap-0.5">
          <div className="flex items-center justify-end gap-1">
            <span className="text-text-tertiary text-[10px] font-medium uppercase tracking-wide">MC</span>
            <span className="text-[#F2C366] text-sm font-bold tracking-tight">{marketCap}</span>
          </div>
          <div className="flex items-center justify-end gap-1">
             <span className="text-text-tertiary text-[10px] font-medium">V</span>
             <span className="text-text-primary text-xs font-semibold">{volume}</span>
          </div>
        </div>
    );
}