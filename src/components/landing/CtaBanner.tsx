import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/config/site";
import { Container } from "@/components/ui/Section";

export function CtaBanner() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-surface to-surface px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="relative text-2xl font-bold sm:text-3xl">
            ¿Tu equipo presenta fallas?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted">
            Agenda tu diagnóstico sin costo y deja que nuestro equipo técnico lo reviva.
            Precio claro antes de reparar.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Hola, quiero agendar una cita en PCLevelUp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Agenda por WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold transition hover:bg-surface-2 sm:w-auto"
            >
              Ver contacto
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
