"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Cpu, MessageCircle } from "lucide-react";
import { site, waLink } from "@/config/site";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#trabajos", label: "Trabajos" },
  { href: "/#faq", label: "Preguntas" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink("Hola, quiero agendar una cita en PCLevelUp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
          >
            <MessageCircle className="h-4 w-4" />
            Agenda tu diagnóstico
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink("Hola, quiero agendar una cita en PCLevelUp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-zinc-950"
            >
              <MessageCircle className="h-4 w-4" />
              Agenda tu diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
