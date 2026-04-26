import type { ReactNode } from "react";
import Link from "next/link";
import { wa } from "@/lib/whatsapp";
import { Reveal } from "./reveal";
import {
  ChronusMockup,
  ImobeMockup,
  MockupFrame,
  VisionMockup,
} from "./product-mockups";

const blocks: {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  list: string[];
  mock: ReactNode;
  reverse?: boolean;
}[] = [
  {
    id: "avaliaimobe",
    title: "AvaliaIMobe",
    subtitle: "Avaliação de imóveis, fundamentada e auditável",
    body:
      "O motor liga dados de mercado, características do ativo e histórico de transações. Obtêm intervalos de preço, sensibilidade a fatores e relatórios que suportam comité de crédito e negociação comercial.",
    list: [
      "Score e bandas de preço ajustáveis",
      "Comparáveis explicáveis, não listas opacas",
      "Integração com os vossos sistemas de colaterais",
    ],
    mock: <ImobeMockup />,
  },
  {
    id: "chronus",
    title: "Redobrai Chronus",
    subtitle: "RH com prioridades claras e menos ruído",
    body:
      "Chronus foca sinais de rotatividade, suporte a pipeline de recrutamento e calendário de ações, sempre com contexto da vossa política e equipa.",
    list: [
      "Alertas de retenção e risco, com horizonte definido",
      "Agrupamento de tarefas para equipas e gestores",
      "Trilhos de aprovação e privacidade por perfil",
    ],
    mock: <ChronusMockup />,
    reverse: true,
  },
  {
    id: "vision",
    title: "Redobrai Vision",
    subtitle: "Qualidade na indústria, inspeção contínua",
    body:
      "Deteção e classificação de defeitos em linha, com ligação a lotes, causas e indicadores. Ideal para fábricas que precisam de rastreio e de menos retrabalho.",
    list: [
      "Grelhas de inspeção alinhadas ao vosso desenho de produto",
      "Estatísticos de defeito e tendência por célula",
      "Sinais de alerta quando a taxa de rejeição desvia",
    ],
    mock: <VisionMockup />,
  },
];

export function EngineShowcases() {
  return (
    <div className="border-b border-slate-200/80">
      {blocks.map((b, i) => (
        <section
          key={b.id}
          id={b.id}
          className="scroll-mt-24 py-20 sm:py-24 [&:nth-child(odd)]:bg-white [&:nth-child(even)]:bg-slate-50/30"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <Reveal className={b.reverse ? "lg:order-2" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {b.subtitle}
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {b.title}
                </h2>
                <p className="mt-3 max-w-lg text-pretty text-slate-600 sm:text-lg">
                  {b.body}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-800">
                  {b.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                {i === 0 ? (
                  <div className="mt-8">
                    <Link
                      href={wa.precos}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                    >
                      Ver ofertas por motor
                    </Link>
                  </div>
                ) : null}
              </Reveal>
              <Reveal className={b.reverse ? "lg:order-1" : undefined}>
                <MockupFrame>{b.mock}</MockupFrame>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
