import { steps } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui/Section";

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-20 border-y border-border bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Reparación clara y sin sorpresas"
          description="Un proceso simple para que siempre sepas en qué punto está tu equipo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-lg font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          *Diagnóstico sin costo cuando aceptas la reparación.
        </p>
      </Container>
    </section>
  );
}
