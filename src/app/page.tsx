import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10 pointer-events-none" />
      
      <Hero />
      <Features />
      <Stats />
      <CTA />
      
      {/* Final fade to black */}
      <div className="h-32 bg-gradient-to-b from-transparent to-black" />
    </main>
  );
}
