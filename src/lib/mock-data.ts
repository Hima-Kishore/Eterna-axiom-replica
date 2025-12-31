import { TokenData } from "@/types";

const NAMES = ["PEPE", "DOGE", "SHIB", "FLOKI", "BONK", "WIF", "TRUMP", "MAGA", "BODEN"];
const SUFFIXES = ["AI", "INU", "MOON", "ELON", "BETS", "CLONE", "COIN", "SWAP"];

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const formatMoney = (num: number) => `$${(num / 1000).toFixed(1)}K`;

export const generateToken = (id: string): TokenData => {
  const symbol = `${getRandom(NAMES)}${getRandom(SUFFIXES)}`;
  const isGain = Math.random() > 0.5;
  
  return {
    id,
    name: `${symbol} Protocol`,
    symbol: symbol,
    imageUrl: `https://placehold.co/78x78/101114/FFF?text=${symbol[0]}`,
    timeAgo: `${getRandomInt(1, 59)}m`,
    marketCap: formatMoney(getRandomInt(4000, 50000)),
    volume: formatMoney(getRandomInt(1000, 20000)),
    txns: getRandomInt(50, 500),
    buyAmount: "0 SOL",
    holders: getRandomInt(10, 200),
    statusColor: isGain ? "border-status-increase" : "border-status-decrease",
    badges: [
      { type: isGain ? "increase" : "decrease", label: `${getRandomInt(10, 90)}%` },
      { type: "neutral", label: "Audit" },
      { type: isGain ? "increase" : "decrease", label: "Vol" },
    ]
  };
};

export const generateBatch = (count: number) => {
  return Array.from({ length: count }).map((_, i) => generateToken(`token-${i}`));
};