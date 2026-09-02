"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui/Section";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Antes de visitarnos, tal vez ya tengas respuesta aquí."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold transition hover:bg-surface-2"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4 text-sm text-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
