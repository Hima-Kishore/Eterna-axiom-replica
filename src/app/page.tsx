import { TokenCard } from "@/components/molecules/TokenCard";
import { ChefHat, Target, Ghost, FlaskConical, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 flex justify-center">
      {/* Simulating the column width (approx 400px based on desktop view) */}
      <div className="w-[450px]">
        <h1 className="text-white mb-4">Component Test</h1>
        
        <TokenCard 
          name="PORNHUB OFFICIAL"
          symbol="PORNHUB"
          marketCap="$46.1K"
          volume="$11K"
          timeAgo="0s"
          txns={105}
          buyAmount="0 SOL"
          badges={[
            { type: "decrease", label: "67%", icon: <User className="w-3 h-3" /> },
            { type: "decrease", label: "66% 1m", icon: <ChefHat className="w-3 h-3" /> },
            { type: "decrease", label: "66%", icon: <Target className="w-3 h-3" /> },
            { type: "increase", label: "0%", icon: <Ghost className="w-3 h-3" /> },
            { type: "increase", label: "0%", icon: <FlaskConical className="w-3 h-3" /> },
          ]}
          statusColor="border-yellow-500" // Try 'border-status-increase' (Green) or 'border-status-decrease' (Red) too!
        />
      </div>
    </main>
  );
}