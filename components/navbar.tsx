"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { wa } from "@/lib/whatsapp";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#precos", label: "Preços" },
  { href: "#sobre", label: "Sobre" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="group flex items-center gap-2 font-semibold tracking-tight text-slate-900"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm"
            aria-hidden
          >
            R
          </span>
          <span className="text-lg">Redobrai</span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-0.5 md:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={wa.entrar}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:inline"
          >
            Entrar
          </Link>
          <Link
            href={wa.comecar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Criar conta
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvel">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={wa.entrar}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600"
              onClick={() => setOpen(false)}
            >
              Entrar
            </Link>
            <Link
              href={wa.comecar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Criar conta
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
