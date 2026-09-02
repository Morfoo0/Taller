import type { Step, Faq, Testimonial, GalleryItem } from "@/lib/types";

export const steps: Step[] = [
  {
    title: "Recibimos tu equipo",
    description:
      "Cuéntanos qué le pasa a tu equipo por WhatsApp, por el chat o en mostrador.",
  },
  {
    title: "Diagnóstico",
    description:
      "Revisamos tu equipo y te decimos exactamente qué tiene y cuánto costaría.",
  },
  {
    title: "Presupuesto sin costo",
    description: "Te presentamos el presupuesto. Solo reparas si estás de acuerdo.",
  },
  {
    title: "Reparación con garantía",
    description: "Reparamos y te entregamos tu equipo funcionando, con garantía.",
  },
];

export const faqs: Faq[] = [
  {
    question: "¿El diagnóstico tiene costo?",
    answer:
      "El diagnóstico es sin costo cuando aceptas la reparación. Si decides no reparar, puede aplicar una pequeña tarifa de revisión.",
  },
  {
    question: "¿Cuánto tarda una reparación?",
    answer:
      "Depende del servicio: muchas reparaciones de software se resuelven el mismo día, mientras que cambios de pantalla o partes toman de 1 a 3 días hábiles.",
  },
  {
    question: "¿Mi información está segura?",
    answer:
      "Sí. Manejamos tu equipo con confidencialidad y respaldamos tu información antes de cualquier reparación. Puedes pedir que no se acceda a tus archivos.",
  },
  {
    question: "¿Qué garantía ofrecen?",
    answer:
      "Nuestras reparaciones incluyen garantía en la mano de obra y las refacciones instaladas. La garantía exacta se especifica en tu orden de servicio.",
  },
  {
    question: "¿Hacen reparaciones a domicilio?",
    answer:
      "Ofrecemos soporte remoto para muchos temas de software. Para reparación física, el equipo se recibe en el taller o puedes agendar una visita según disponibilidad.",
  },
  {
    question: "¿Qué marcas atienden?",
    answer:
      "Trabajamos con las marcas principales: Apple, Samsung, Lenovo, HP, Dell, Acer, Asus, MSI, PlayStation, Xbox, Nintendo y Microsoft.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Laura G.",
    service: "Cambio de pantalla iPhone",
    rating: 5,
    text: "Me cambiaron la pantalla de mi iPhone el mismo día. Excelente trato y quedó perfecta. 100% recomendados.",
  },
  {
    name: "Carlos M.",
    service: "Limpieza y pasta térmica laptop",
    rating: 5,
    text: "Mi laptop ya no se apagaba por temperatura. Rápido, honesto y con precio claro antes de reparar.",
  },
  {
    name: "Fernanda R.",
    service: "Activación de Windows y Office",
    rating: 5,
    text: "Me resolvieron todo por soporte remoto sin salir de casa. Muy pacientes explicándome todo.",
  },
  {
    name: "Jorge T.",
    service: "Reparación de consola",
    rating: 5,
    text: "Repararon el HDMI de mi PlayStation. Quedó como nueva y me explicaron el problema claramente.",
  },
];

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/laptop-motherboard.svg",
    alt: "Limpieza y pasta térmica de laptop Lenovo IdeaPad",
    label: "Limpieza y pasta térmica",
    service: "Laptop · Lenovo IdeaPad",
  },
  {
    src: "/gallery/iphone-screen.svg",
    alt: "Cambio de pantalla OLED de iPhone 11 Pro",
    label: "Pantalla OLED",
    service: "Celular · iPhone 11 Pro",
  },
  {
    src: "/gallery/console-repair.svg",
    alt: "Mantenimiento y limpieza profunda de PlayStation 4",
    label: "Mantenimiento de consola",
    service: "Consola · PlayStation 4",
  },
  {
    src: "/gallery/pc-upgrade.svg",
    alt: "Pasta térmica y peinado de cables en PC de escritorio",
    label: "Pasta térmica y peinado de cables",
    service: "PC de escritorio",
  },
  {
    src: "/gallery/software-setup.svg",
    alt: "Instalación de Office y activación de Windows",
    label: "Office y Windows",
    service: "Software",
  },
];