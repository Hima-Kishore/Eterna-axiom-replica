import { ReactNode } from "react";

export type BadgeVariant = "increase" | "decrease" | "neutral";

export type Tab = "newPairs" | "finalStretch" | "migrated";

export interface TokenBadgeData {
  type: BadgeVariant;
  label: string;
  icon?: ReactNode;
}

export interface TokenData {
  id: string;
  name: string;
  symbol: string;
  imageUrl?: string;
  timeAgo: string;
  marketCap: string;
  volume: string;
  txns: number;
  buyAmount: string;
  holders: number;
  statusColor?: string;
  badges: TokenBadgeData[];
}