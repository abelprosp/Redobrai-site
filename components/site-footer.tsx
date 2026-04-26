import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";
import { SiteLogo } from "@/components/site-logo";
import { wa } from "@/lib/whatsapp";
import { Reveal } from "./reveal";

type ColLink = { href: string; label: string; external?: boolean };

const linkClass =
  "text-sm text-slate-600 transition hover:text-slate-900";

const columns: { title: string; links: ColLink[] }[] = [
  {
    title: "Soluções",
    links: [
      { href: "#avaliaimobe", label: "AvaliaIMobe" },
      { href: "#chronus", label: "Redobrai Chronus" },
      { href: "#vision", label: "Redobrai Vision" },
      { href: "#precos", label: "Preços" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#sobre", label: "Sobre" },
      { href: wa.contacto, label: "Contacto (WhatsApp)", external: true },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "#", label: "Documentação" },
      { href: "#", label: "Estudos de caso" },
      { href: "#", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacidade" },
      { href: "#", label: "Termos" },
      { href: "#", label: "Segurança" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-slate-50/80 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-slate-200/90 pb-10 md:flex-row md:items-center">
            <div>
              <SiteLogo size="sm" className="max-w-[200px]" />
              <p className="mt-3 max-w-sm text-sm text-slate-600">
                Motores de IA de domínio: imobiliário, RH e visão para controlo
                de qualidade industrial.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://twitter.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                aria-label="X (Twitter)"
                rel="noreferrer"
                target="_blank"
              >
                <SiX className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://linkedin.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                aria-label="LinkedIn"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://github.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                aria-label="GitHub"
                rel="noreferrer"
                target="_blank"
              >
                <SiGithub className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2" role="list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200/90 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Redobrai, Lda. Todos os direitos reservados.</p>
          <a
            id="contacto"
            href={wa.contacto}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 underline-offset-2 transition hover:text-slate-800 hover:underline"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
