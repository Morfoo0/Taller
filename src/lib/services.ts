import {
  Laptop,
  Smartphone,
  Gamepad2,
  Wrench,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "laptops-pc",
    icon: Laptop,
    category: "Laptops y PC",
    title: "Limpieza y Mantenimiento de Laptops y PC",
    short:
      "Limpieza interna profunda, cambio de pasta térmica y optimización para laptops y PC de escritorio.",
    description:
      "Diagnosticamos, desarmamos y limpiamos a fondo tu laptop o PC de escritorio. Aplicamos pasta térmica de alto rendimiento, optimizamos el sistema y hacemos pruebas de estrés para comprobar que tu equipo queda estable. Resultado: mejor temperatura, sin ruido y una vida útil extendida.",
    brands: ["Lenovo", "HP", "Dell", "Acer", "Asus", "MSI"],
    time: "Desde 1 hora",
    featured: true,
    warrantyNote: "Garantía en el trabajo realizado.",
    items: [
      {
        label: "Limpieza interna profunda",
        detail: "Desarmado completo y limpieza de polvo y suciedad acumulada.",
      },
      {
        label: "Revisión de componentes",
        detail: "Verificación de ventiladores, disipadores y piezas internas.",
      },
      {
        label: "Pasta térmica de alto rendimiento",
        detail: "Aplicación de pasta térmica para mejorar la disipación.",
      },
      {
        label: "Optimización general y peinado de cables",
        detail: "Mejor flujo de aire y sistema optimizado para mejor rendimiento.",
      },
      {
        label: "Pruebas de estrés y estabilidad",
        detail: "Comprobación de temperaturas y estabilidad del sistema.",
      },
    ],
  },
  {
    slug: "celulares",
    icon: Smartphone,
    category: "Celulares",
    title: "Reparación de Celulares",
    short:
      "Cambio de pantalla OLED, diagnóstico, prueba de funcionamiento y entrega funcional.",
    description:
      "Servicio especializado en iPhone y Android. Diagnosticamos el equipo, realizamos el cambio de pantalla OLED y lo probamos a fondo antes de entregártelo completamente funcional. El precio depende del tipo de pantalla que requiera tu equipo.",
    brands: ["Apple", "Samsung", "Xiaomi", "Motorola"],
    time: "Desde 30 min",
    featured: true,
    warrantyNote: "Garantía en la refacción instalada.",
    items: [
      {
        label: "Diagnóstico del equipo",
        detail: "Revisión inicial para identificar la falla y el tipo de pantalla.",
      },
      {
        label: "Cambio de pantalla OLED",
        detail: "Sustitución de pantalla compatible u original según el caso.",
      },
      {
        label: "Prueba de funcionamiento",
        detail: "Comprobación de pantalla, táctil y componentes del equipo.",
      },
      {
        label: "Entrega funcional",
        detail: "Entrega del equipo completamente funcional y probado.",
      },
    ],
  },
  {
    slug: "consolas",
    icon: Gamepad2,
    category: "Consolas",
    title: "Mantenimiento y Reparación de Consolas",
    short:
      "Desarmado completo, limpieza profunda y cambio de pasta térmica para consolas.",
    description:
      "Servicio de mantenimiento para consolas de sobremesa. Desarmamos el equipo por completo, limpiamos el polvo y la suciedad, cambiamos la pasta térmica del procesador y dejamos el sistema de ventilación y disipador en óptimas condiciones.",
    brands: ["PlayStation", "Xbox", "Nintendo"],
    time: "Desde 1 hora",
    items: [
      {
        label: "Desarmado completo del equipo",
        detail: "Apertura total para acceder a todos los componentes.",
      },
      {
        label: "Limpieza profunda de polvo y suciedad",
        detail: "Limpieza exhaustiva de carcasa, ventiladores y disipador.",
      },
      {
        label: "Cambio de pasta térmica del procesador",
        detail: "Sustitución de pasta térmica para prevenir sobrecalentamiento.",
      },
      {
        label: "Limpieza del sistema de ventilación",
        detail: "Ventiladores y disipador limpios para mejor flujo de aire.",
      },
    ],
  },
  {
    slug: "software",
    icon: Wrench,
    category: "Software",
    title: "Office y Activación de Windows",
    short:
      "Instalación de Microsoft Office y activación de Windows, rápido y en el momento.",
    description:
      "Servicio de software directo y sencillo: instalamos Microsoft Office y activamos Windows en tu equipo, con el sistema listo para usar de inmediato.",
    brands: ["Microsoft"],
    time: "Desde 30 min",
    items: [
      {
        label: "Instalación de Microsoft Office",
        detail: "Instalación de Office en sus versiones disponibles.",
      },
      {
        label: "Activación de Windows",
        detail: "Activación de Windows en tu equipo.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}