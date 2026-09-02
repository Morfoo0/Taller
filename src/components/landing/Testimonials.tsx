import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="La confianza de quienes ya nos confiaron su equipo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/20" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-foreground/90">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4">
                <span className="font-semibold">{t.name}</span>
                <span className="ml-2 text-sm text-muted">· {t.service}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
