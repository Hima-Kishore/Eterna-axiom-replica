import { TokenImage } from "@/components/atoms/TokenImage";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <h1 className="text-xl font-bold mb-8 text-text-primary">Color & Atom Test</h1>
      
      <div className="flex gap-4 p-4 bg-card rounded-lg border border-card-border w-fit">
        <TokenImage alt="Test Token" />
        <div>
          <h2 className="text-brand-blue font-bold">Blue Brand Color</h2>
          <p className="text-status-increase text-sm">+12.5% (Green)</p>
          <p className="text-status-decrease text-sm">-5.4% (Red)</p>
          <p className="text-text-tertiary text-xs">Muted Text Description</p>
        </div>
      </div>
    </main>
  );
}