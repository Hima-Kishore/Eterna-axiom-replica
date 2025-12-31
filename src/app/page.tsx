import { PulseColumn } from "@/components/organisms/PulseColumn";
import { generateBatch } from "@/lib/mock-data";

export default function Home() {
  const newPairs = generateBatch(12);
  const finalStretch = generateBatch(12);
  const migrated = generateBatch(12);

  return (
    <main className="min-h-screen bg-background text-white flex flex-col overflow-hidden">
      {/* Header Placeholder */}
      <header className="h-14 flex items-center px-6 shrink-0 bg-background z-20">
        <h1 className="font-bold text-xl text-text-primary mr-8">Pulse</h1>
        {/* add the Mobile Tab Switcher */}
      </header>

      {/* The Main 3-Column Grid */}
      <div className="flex-1 overflow-hidden border-2 border-white/5 relative rounded-md">
        <div className="flex h-full border-1 border-white/5 rounded-md overflow-hidden">
          
          {/* Column 1: Visible on Mobile, Tablet, Desktop */}
          <PulseColumn title="New Pairs" tokens={newPairs} />

          {/* Column 2: Hidden on Mobile, Visible on Tablet+ */}
          <PulseColumn title="Final Stretch" tokens={finalStretch} className="hidden md:flex" />

          {/* Column 3: Hidden on Tablet, Visible on Desktop+ */}
          <PulseColumn title="Migrated" tokens={migrated} className="hidden lg:flex" />

        </div>
      </div>
    </main>
  );
}