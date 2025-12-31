import { PulseDashboard } from "@/components/templates/PulseDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b-2 border-white/5 flex items-center px-6 shrink-0 bg-background z-20">
        <h1 className="font-bold text-xl text-text-primary mr-8">Pulse</h1>
      </header>
      
      {/* Dashboard */}
      <PulseDashboard />
    </main>
  );
}