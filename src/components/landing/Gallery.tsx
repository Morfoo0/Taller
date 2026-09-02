import Image from "next/image";
import { gallery } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui/Section";

export function Gallery() {
  return (
    <section id="trabajos" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="Nuestros trabajos"
          title="Equipos que hemos revivido"
          description="Mira algunos de los trabajos que hacemos a diario en el taller."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-xs text-accent">{item.service}</span>
                <span className="block text-sm font-semibold">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          *Imágenes de ejemplo. Compartiremos aquí fotos reales de tus reparaciones.
        </p>
      </Container>
    </section>
  );
}
