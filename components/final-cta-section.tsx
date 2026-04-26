import Link from "next/link";
import { wa } from "@/lib/whatsapp";
import { Reveal } from "./reveal";

export function FinalCtaSection() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #ecfdf5 50%, #f0fdf4 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Vamos mapear o vosso caso num destes motores
          </h2>
          <p className="mt-3 text-slate-600 sm:text-lg">
            Resposta com contexto, sem ruído: que dados têm, que decisão
            suportar e em que prazo.
          </p>
        </Reveal>
        <Reveal className="mt-8" delay={0.06}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={wa.contacto}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              Falar com a equipa
            </Link>
            <Link
              href={wa.precos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-sm font-semibold text-slate-800 transition hover:border-slate-300"
            >
              Ver ofertas
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
