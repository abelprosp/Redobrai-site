import type { ReactNode } from "react";

/** Mockups alinhados a cada motor — layout tipo dashboard, só CSS/SVG. */
export function ImobeMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-emerald-50/80 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="ml-1 font-mono text-[9px] text-slate-500">AvaliaIMobe</span>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[0.4fr_0.6fr]">
        <div className="space-y-2 rounded-xl bg-slate-50/90 p-2 ring-1 ring-slate-100">
          <p className="text-[9px] font-semibold uppercase text-slate-500">Avaliação</p>
          <div className="flex items-center justify-center py-1">
            <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden>
              <circle
                cx="40"
                cy="40"
                r="32"
                fill="none"
                stroke="currentColor"
                className="text-slate-200"
                strokeWidth="8"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                fill="none"
                stroke="url(#gim)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="201"
                strokeDashoffset="42"
                transform="rotate(-90 40 40)"
              />
              <text
                x="40"
                y="45"
                textAnchor="middle"
                className="fill-slate-900 text-sm font-bold"
                fontSize="16"
              >
                8.2
              </text>
              <defs>
                <linearGradient id="gim" x1="0" y1="0" x2="80" y2="80">
                  <stop stopColor="#059669" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-center text-[10px] text-slate-600">Nota ajustada ao mercado</p>
        </div>
        <div className="space-y-1.5 text-[10px] text-slate-700">
          {[
            { l: "T3, Lisboa", v: "€ 6.1k / m²" },
            { l: "Confiança", v: "alta" },
            { l: "Comparáveis", v: "24" },
          ].map((r) => (
            <div
              key={r.l}
              className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-2 py-1.5"
            >
              <span className="text-slate-500">{r.l}</span>
              <span className="font-mono text-slate-900">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ChronusMockup({ className = "" }: { className?: string }) {
  const days = ["S", "T", "Q", "Q", "S", "S", "D"];
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-emerald-50/80 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="ml-1 font-mono text-[9px] text-slate-500">Chronus — RH</span>
      </div>
      <div className="p-3">
        <div className="mb-2 flex gap-1">
          {days.map((d, i) => (
            <div
              key={d + i}
              className="flex-1 rounded-md border border-slate-100 bg-slate-50 py-1.5 text-center text-[9px] font-medium text-slate-500"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {["Entrevistas", "Onboarding", "Aval. performance"].map((t, i) => (
            <div
              key={t}
              className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-2 py-1.5 text-[10px]"
            >
              <span className="text-slate-800">{t}</span>
              <span
                className={`rounded px-1.5 font-mono text-[9px] ${
                  i === 0
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {i === 0 ? "12" : "—"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-10 rounded-lg bg-gradient-to-r from-emerald-200/30 via-white to-emerald-200/20 ring-1 ring-emerald-200/50" />
      </div>
    </div>
  );
}

export function VisionMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-emerald-50/80 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="ml-1 font-mono text-[9px] text-slate-500">Vision — QC</span>
      </div>
      <div className="p-3">
        <div className="mb-2 grid grid-cols-3 gap-1.5" aria-hidden>
          {["OK", "OK", "NOK", "OK", "OK", "OK"].map((s, i) => (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-lg text-[9px] font-bold ${
                s === "OK" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/80 px-2 py-2 text-[10px]">
          <span className="text-slate-600">Lote #4482</span>
          <span className="font-mono text-emerald-700">rejeição: 0,4%</span>
        </div>
        <div className="mt-1.5 h-8 rounded-md bg-slate-200/80" />
        <p className="mt-1 text-center text-[9px] text-slate-500">Inspeção visual em tempo quase real</p>
      </div>
    </div>
  );
}

export function MockupFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative rounded-2xl border border-slate-200/80 bg-slate-100/90 p-2 shadow-lg">
        {children}
      </div>
    </div>
  );
}
