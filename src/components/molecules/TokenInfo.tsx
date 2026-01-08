import React from "react";
import { TokenBadgeList } from "./TokenBadgeList";
import { TokenIdentity } from "../atoms/TokenIdentity";
import { TokenSocials } from "./TokenSocials";

interface TokenInfoProps {
  name: string;
  symbol: string;
  timeAgo: string;
  badges: {
    type: "increase" | "decrease" | "neutral";
    label: string;
    icon?: React.ReactNode;
  }[];
}

export const TokenInfo = ({ name, symbol, timeAgo, badges }: TokenInfoProps) => {
    return (
        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
            <TokenIdentity symbol={symbol} name={name} />

            <TokenSocials timeAgo={timeAgo} />

            <div className="hidden sm:flex lg:hidden xl:flex mt-auto mb-2">
              <TokenBadgeList badges={badges} />
            </div>
        </div>
    );
};