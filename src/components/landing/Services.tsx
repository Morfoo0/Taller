import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { Container, SectionHeading } from "@/components/ui/Section";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="¿Qué necesita tu equipo?"
          description="Elegí la línea de servicio y te decimos qué podemos reparar, con precios desde."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40 hover:bg-surface-2"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  {service.featured && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                      Más solicitado
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.short}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {service.items.slice(0, 4).map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      {item.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <span className="text-xs text-muted">Costo</span>
                    <span className="ml-1 font-semibold text-foreground/80">
                      según diagnóstico
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
                    Ver más
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
