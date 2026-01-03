import { Navbar } from "@/components/templates/Navbar";
import { NavbarExtension } from "@/components/templates/NavbarExtension";
import { PulseHeader } from "@/components/templates/PulseHeader";
import { PulseDashboard } from "@/components/templates/PulseDashboard";
import { Footer } from '@/components/templates/Footer';

export default function Home() {
  return (
    <main className="h-screen bg-background text-white flex flex-col overflow-hidden font-sans selection:bg-brand-primary/30 fixed inset-0">
      
      {/* Navbar */}
      <Navbar />
      <NavbarExtension />

      {/* Header */}
      <header className="h-14 hidden sm:flex items-center justify-between px-1 shrink-0 bg-background z-20 px-6">
        <PulseHeader />
      </header>

      {/* Dashboard */}
      <div className="flex-1 min-h-0 flex flex-col relative"> 
        <PulseDashboard />
      </div>

      {/* Footer */}
      <Footer />

    </main>
  );
}