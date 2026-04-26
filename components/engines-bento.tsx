import { Building2, ScanLine, Users } from "lucide-react";
import { wa } from "@/lib/whatsapp";
import { Reveal } from "./reveal";

const engines = [
  {
    id: "avaliaimobe" as const,
    name: "AvaliaIMobe",
    description:
      "Modelo de IA treinado para avaliação de imóveis: comparáveis, ajuste ao mercado e risco, com explicabilidade para decisões de crédito e venda.",
    icon: Building2,
  },
  {
    id: "chronus" as const,
    name: "Redobrai Chronus",
    description:
      "Especialista em RH: previsão de retenção, suporte a recrutamento e priorização de ações de talento com contexto do vosso quadro e políticas.",
    icon: Users,
  },
  {
    id: "vision" as const,
    name: "Redobrai Vision",
    description:
      "Controlo de qualidade industrial por visão: deteção de defeitos, pistas de causa e rastreio de lotes, integrado com a linha de produção.",
    icon: ScanLine,
  },
];

export function EnginesBento() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-24"
      id="solucoes"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Porquê estes motores
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 sm:text-lg">
            Três famílias de modelos, cada uma desenhada para um domínio. Sem
            promessas genéricas: métricas, limites e integrações definidas
            com a vossa equipa.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {engines.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.id} delay={0.04 * i}>
                <a
                  href={wa.motor(e.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-200/80 hover:shadow-md"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-inner"
                    style={{
                      background:
                        "linear-gradient(145deg, #059669 0%, #10b981 100%)",
                    }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{e.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {e.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-emerald-700 group-hover:underline">
                    Ver detalhes
                  </span>
                </a>
              </Reveal>
            );
          })}
          <Reveal delay={0.12}>
            <div className="flex h-full min-h-[180px] flex-col justify-center rounded-3xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50/90 to-white p-6 ring-1 ring-emerald-100/80 sm:min-h-0">
              <h3 className="text-lg font-bold text-slate-900">
                Precisam de outro domínio?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Descrevem o vosso caso e avaliamos extensão dos motores ou
                modelo dedicado, com o mesmo padrão de entrega.
              </p>
              <a
                href={wa.contacto}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
              >
                Falar com a Redobrai
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
