import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Experiencia } from "@/components/sections/Experiencia";
import { Projetos } from "@/components/sections/Projetos";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Card Hero: fixo à esquerda no desktop; alinhado à direita da coluna (mais próximo do centro/outros cards) */}
      <aside className="lg:fixed left-0 top-0 lg:h-screen w-full lg:w-88 flex flex-col items-center lg:items-end justify-center p-6 lg:pl-24 lg:pr-2 box-border z-10 shrink-0">
        <div className="lg:translate-x-40">
          <Hero />
        </div>
      </aside>

      {/* Conteúdo rolável: Sobre em cima, Projetos embaixo — centralizado */}
      <div className="flex-1 min-h-screen flex flex-col lg:pl-88">
        <div className="flex-1 flex flex-col items-center px-6 lg:px-10 xl:px-16 py-10 lg:py-12">
          <div className="w-full max-w-3xl mx-auto space-y-12">
            <Sobre />
            <Experiencia />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center px-6 lg:px-10 xl:px-16">
          <div className="w-full max-w-3xl mx-auto">
            <Projetos />
          </div>
        </div>
      </div>
    </main>
  );
}
