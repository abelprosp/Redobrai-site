import { Reveal } from "./reveal";

export function AboutStrip() {
  return (
    <section
      className="border-b border-slate-200/80 bg-white py-12 sm:py-14"
      id="sobre"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-slate-600 sm:text-lg">
            A <strong className="text-slate-800">Redobrai</strong> desenha e
            entrega modelos de IA de domínio, com explicabilidade, integração
            com os vossos sistemas e acompanhamento da performance em produção.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
