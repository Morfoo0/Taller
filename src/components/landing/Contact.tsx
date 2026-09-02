"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { site } from "@/config/site";
import { Container, SectionHeading } from "@/components/ui/Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Ven a visitarnos o escríbenos"
          description="Estamos listos para atender tu equipo. Contáctanos por el medio que prefieras."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="mt-1 text-sm text-muted">
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.postal}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">Horario</h3>
                <ul className="mt-1 space-y-1 text-sm text-muted">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span className="text-foreground/80">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a
                  href={`https://wa.me/${site.phone.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-accent hover:underline"
                >
                  {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <iframe
                title="Ubicación del taller"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${site.address.street}, ${site.address.city}, ${site.address.state}`
                )}&output=embed`}
                className="h-56 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="text-lg font-bold">Envíanos un mensaje</h3>
            <p className="mt-1 text-sm text-muted">
              Cuéntanos qué le pasa a tu equipo y te responderemos a la brevedad.
            </p>

            {sent ? (
              <div className="mt-6 rounded-xl border border-success/30 bg-success/10 p-6 text-center">
                <p className="font-semibold text-success">¡Mensaje enviado!</p>
                <p className="mt-1 text-sm text-muted">
                  Te contactaremos muy pronto. También puedes escribirnos por WhatsApp para una respuesta inmediata.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Tu teléfono"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Tu correo (opcional)"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                />
                <select
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    ¿Qué servicio necesitas?
                  </option>
                  <option>Laptop / PC</option>
                  <option>Celular</option>
                  <option>Consola</option>
                  <option>Software / Office / Windows</option>
                  <option>Otro</option>
                </select>
                <textarea
                  required
                  placeholder="Describe el problema de tu equipo"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
                >
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
