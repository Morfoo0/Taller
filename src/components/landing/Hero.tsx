import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  Clock,
  MessageCircle,
  Star,
} from "lucide-react";
import { waLink } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1">Clientes satisfechos en México</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Tu equipo,{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-accent bg-clip-text text-transparent">
              reparado y al nivel
            </span>
            <span className="text-accent">↑</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Reparamos laptops, PC, celulares iOS y Android, consolas y software.
            Diagnóstico sin costo, precios claros y garantía en cada trabajo.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              <Wrench className="h-5 w-5" />
              Ver servicios
            </Link>
            <a
              href={waLink("Hola, quiero agendar una cita en PCLevelUp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground transition hover:bg-surface-2 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Agenda tu diagnóstico
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
              <ShieldCheck className="h-5 w-5 text-success" />
              Garantía en cada trabajo
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
              <Wrench className="h-5 w-5 text-accent" />
              Diagnóstico sin costo*
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
              <Clock className="h-5 w-5 text-warning" />
              Reparaciones rápidas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
