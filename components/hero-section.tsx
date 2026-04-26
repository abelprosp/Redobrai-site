import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { wa } from "@/lib/whatsapp";
import { Reveal } from "./reveal";
import { ImobeMockup, MockupFrame } from "./product-mockups";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 60% at 50% -30%, rgba(5, 150, 105, 0.12), transparent)",
        }}
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            id="recursos"
          >
            Motores de IA com domínio claro, prontos para a vossa operação
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
            A Redobrai desenvolve e opera modelos de inteligência artificial
            focados: imobiliário (AvaliaIMobe), recursos humanos (Chronus) e
            visão para controlo de qualidade industrial (Redobrai Vision).
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div
            id="comecar"
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href={wa.solucoes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full min-w-[200px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 sm:w-auto"
            >
              Conhecer soluções
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </Link>
            <Link
              href={wa.precos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full min-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 text-sm font-semibold text-slate-800 transition hover:border-slate-300 sm:w-auto"
            >
              <Play className="h-4 w-4" fill="currentColor" aria-hidden />
              Ver ofertas
            </Link>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl px-4 sm:mt-20 sm:px-6">
        <MockupFrame>
          <ImobeMockup className="shadow-none" />
        </MockupFrame>
      </Reveal>
    </section>
  );
}
