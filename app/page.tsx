import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Projetos } from "@/components/sections/Projetos";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero (esquerda) + Sobre (direita) — layout horizontal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-start px-6 lg:px-10 xl:px-16 py-10 lg:py-12">
        <Hero />
        <Sobre />
      </div>
      <Projetos />
    </main>
  );
}
