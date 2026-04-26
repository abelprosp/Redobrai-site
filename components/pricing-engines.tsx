import Link from "next/link";
import { Check } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";
import { Reveal } from "./reveal";

const plans = [
  {
    name: "AvaliaIMobe",
    blurb: "Avaliação e scoring imobiliário",
    price: "Sob consulta",
    features: [
      "API e relatórios de avaliação",
      "Governação e logs de versão de modelo",
      "Suporte a integração de dados",
    ],
    cta: "Pedir proposta",
    highlight: false,
  },
  {
    name: "Redobrai Chronus",
    blurb: "Inteligência para RH e talento",
    price: "Sob consulta",
    features: [
      "Modelos de retenção e priorização",
      "Fluxos ajustados a política interna",
      "Acompanhamento e revisão de métricas",
    ],
    cta: "Falar com vendas",
    highlight: true,
  },
  {
    name: "Redobrai Vision",
    blurb: "Visão e QC em produção",
    price: "Sob consulta",
    features: [
      "Pipelines de inferência de baixa latência",
      "Defeitos e rastreio de lote",
      "Acordo de nível de serviço em fábrica",
    ],
    cta: "Agendar demonstração",
    highlight: false,
  },
] as const;

export function PricingEngines() {
  return (
    <section className="border-b border-slate-200/80 py-20 sm:py-28" id="precos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Os três motores, em condições comerciais claras
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 sm:text-lg">
            Preço alinhado ao vosso volume, integrações e SLA. Sem preços
            publicados porque o deployment é feito com a vossa operação.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={0.05 * i}>
              <div
                className={`flex h-full flex-col rounded-3xl p-6 sm:p-8 ${
                  p.highlight
                    ? "bg-gradient-to-b from-emerald-600 to-emerald-700 text-white shadow-xl ring-1 ring-emerald-500/30 md:scale-[1.02] md:shadow-2xl"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    p.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    p.highlight ? "text-emerald-50" : "text-slate-500"
                  }`}
                >
                  {p.blurb}
                </p>
                <p
                  className={`mt-6 text-2xl font-bold ${
                    p.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {p.price}
                </p>
                <ul
                  className="mt-6 flex-1 space-y-2.5 text-sm"
                  role="list"
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check
                        className={`h-4 w-4 flex-shrink-0 ${
                          p.highlight
                            ? "text-emerald-200"
                            : "text-emerald-600"
                        }`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span
                        className={
                          p.highlight ? "text-emerald-50" : "text-slate-700"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={whatsappHref(
                    `Olá! ${p.cta} — tenho interesse em ${p.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-center text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-white text-emerald-800 hover:bg-emerald-50"
                      : "border border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
