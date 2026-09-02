import Link from "next/link";
import { Cpu, MapPin, Clock, Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/Social";
import { site, waLink } from "@/config/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Cpu className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted">
            {site.tagline}. Reparación y soporte técnico con garantía.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-muted transition hover:text-accent"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-muted transition hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="text-foreground/80 transition hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Información
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2 text-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {site.address.street}, {site.address.city}, {site.address.state}
              </span>
            </li>
            <li className="flex items-start gap-2 text-foreground/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={waLink("Hola, necesito ayuda técnica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 transition hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-foreground/80 transition hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 rounded-lg bg-surface-2 p-3 text-sm">
            <span className="font-semibold text-success">✓ Diagnóstico sin costo</span>
            <span className="mt-1 block text-muted">si aceptas la reparación</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con ❤️ en México</p>
        </div>
      </div>
    </footer>
  );
}
