export const site = {
  name: "PCLevelUp",
  tagline: "Diagnóstico, reparación y soporte para tus equipos",
  description:
    "Taller especializado en reparación de laptops, PC, celulares iOS y Android, consolas y software en México. Diagnóstico sin costo, garantía y seguimiento de tu equipo.",
  url: "https://pclevelup.mx",
  locale: "es_MX",
  phone: {
    display: "+52 55 0000 0000",
    intl: "525500000000",
    wa: "525500000000",
  },
  email: "hola@pclevelup.mx",
  address: {
    street: "Av. de los Equipos 123, Col. Centro",
    city: "Ciudad de México",
    state: "CDMX",
    postal: "06000",
    country: "MX",
  },
  hours: [
    { days: "Lunes a Viernes", time: "9:00 – 19:00" },
    { days: "Sábado", time: "10:00 – 15:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  warranty: 90,
  currency: "MXN",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.phone.wa}?text=${encodeURIComponent(message)}`;
}

export const basePath = process.env.NEXT_PUBLIC_BASE_URL ?? site.url;
