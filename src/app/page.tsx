import { PulseDashboard } from "@/components/templates/PulseDashboard";
import { PulseHeader } from "@/components/templates/PulseHeader";

export default function Home() {
  return (
    <main className="h-screen bg-background text-white flex flex-col overflow-hidden font-sans selection:bg-brand-primary/30 fixed inset-0">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-1 shrink-0 bg-background z-20">
        <PulseHeader />
      </header>

      {/* Dashboard */}
      <PulseDashboard />
    </main>
  );
}