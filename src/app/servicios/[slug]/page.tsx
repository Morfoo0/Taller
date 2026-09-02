import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Check, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { services, getService } from "@/lib/services";
import { site, waLink } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.description,
      type: "website",
      url: `${site.url}/servicios/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const waMsg = `Hola ${site.name}, quiero un diagnóstico para: ${service.title}.`;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a servicios
          </Link>

          <div className="mt-6 flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {service.category}
              </span>
              <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2 max-w-2xl text-muted">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Lo que reparamos</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.items.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <Check className="h-5 w-5 shrink-0 text-success" />
                    {item.label}
                  </div>
                  <p className="mt-1.5 pl-7 text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <ShieldCheck className="h-5 w-5 text-success" />
                Garantía y confianza
              </h3>
              <p className="mt-3 text-sm text-muted">
                {service.warrantyNote ?? `Todos nuestros servicios incluyen garantía.`}{" "}
                Diagnosticamos sin costo* y te damos precio claro antes de reparar. Tu
                información siempre protegida.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-muted">Costo</span>
                <p className="mt-0.5 text-xl font-bold text-foreground/80">
                  Según diagnóstico
                </p>
              </div>
              <div className="text-right">
                <span className="flex items-center justify-end gap-1 text-xs text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {service.time}
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-border" />

            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar diagnóstico
            </a>
            <p className="mt-3 text-center text-xs text-muted">
              *Diagnóstico sin costo si aceptas la reparación.
            </p>

            <div className="mt-5 rounded-xl bg-surface-2 p-4">
              <p className="text-sm font-semibold">Marcas que atendemos</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {service.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-muted/70">
              Las marcas mencionadas pertenecen a sus respectivos propietarios. Se
              utilizan solo con fines informativos para indicar compatibilidad; no somos
              servicio autorizado de estas marcas.
            </p>

            <div className="mt-5 rounded-xl bg-surface-2 p-4">
              <p className="text-sm font-semibold">Otras líneas de servicio</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/servicios/${s.slug}`}
                        className="text-accent transition hover:underline"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
