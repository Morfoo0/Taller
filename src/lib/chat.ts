import type { ChatNode } from "@/lib/types";

export const chatTree: ChatNode[] = [
  {
    id: "start",
    message:
      "¡Hola! 👋 Soy el asistente de PCLevelUp. ¿Qué equipo tiene el problema?",
    options: [
      { label: "💻 Laptop / PC", next: "device-laptop" },
      { label: "📱 Celular", next: "device-phone" },
      { label: "🎮 Consola", next: "device-console" },
      { label: "⚙️ Software / Office / Windows", next: "device-software" },
    ],
  },
  {
    id: "device-laptop",
    message: "¿Qué le pasa a tu laptop o PC?",
    options: [
      { label: "No enciende", next: "laptop-power", tags: ["no enciende", "laptop"] },
      { label: "Pantalla dañada / sin imagen", next: "laptop-screen", tags: ["pantalla", "laptop"] },
      { label: "Muy lenta o se traba", next: "laptop-slow", tags: ["lenta", "laptop"] },
      { label: "Se calienta o hace ruido", next: "laptop-heat", tags: ["sobrecalentamiento", "laptop"] },
      { label: "Batería / carga", next: "laptop-battery", tags: ["batería", "laptop"] },
      { label: "No sé, necesito diagnóstico", next: "summary", tags: ["diagnóstico", "laptop"] },
    ],
  },
  {
    id: "laptop-power",
    message: "Entiendo, tu laptop no enciende. ¿Recuerdas algo más?",
    options: [
      { label: "Se apagó de repente", next: "summary", tags: ["no enciende, se apagó de repente", "laptop"] },
      { label: "Tras una actualización", next: "summary", tags: ["no enciende tras actualización", "laptop"] },
      { label: "No estoy seguro", next: "summary", tags: ["no enciende", "laptop"] },
    ],
  },
  {
    id: "laptop-screen",
    message: "¿Cómo es el problema de pantalla?",
    options: [
      { label: "Rota / quebrada", next: "summary", tags: ["pantalla rota", "laptop"] },
      { label: "Se ve pero no da imagen", next: "summary", tags: ["sin imagen en pantalla", "laptop"] },
      { label: "Rayas o parpadea", next: "summary", tags: ["pantalla con rayas", "laptop"] },
    ],
  },
  {
    id: "laptop-slow",
    message: "¿La lentitud es en todo o al encender?",
    options: [
      { label: "En todo", next: "summary", tags: ["lenta en general", "laptop"] },
      { label: "Solo al arrancar", next: "summary", tags: ["lenta al encender", "laptop"] },
      { label: "Desde que la actualicé", next: "summary", tags: ["lenta tras actualización", "laptop"] },
    ],
  },
  {
    id: "laptop-heat",
    message: "El sobrecalentamiento suele ser por polvo o pasta térmica seca. ¿Desde cuándo?",
    options: [
      { label: "Recientemente", next: "summary", tags: ["sobrecalentamiento reciente", "laptop"] },
      { label: "Hace varios meses", next: "summary", tags: ["sobrecalentamiento constante", "laptop"] },
    ],
  },
  {
    id: "laptop-battery",
    message: "¿Qué pasa con la batería?",
    options: [
      { label: "No carga nada", next: "summary", tags: ["no carga", "laptop"] },
      { label: "Se descarga muy rápido", next: "summary", tags: ["batería se agota rápido", "laptop"] },
      { label: "Solo funciona enchufada", next: "summary", tags: ["batería no dura", "laptop"] },
    ],
  },

  {
    id: "device-phone",
    message: "¿Qué le pasa a tu celular?",
    options: [
      { label: "Pantalla rota", next: "phone-screen", tags: ["pantalla rota", "celular"] },
      { label: "No carga / puerto dañado", next: "summary", tags: ["no carga", "celular"] },
      { label: "Batería se agota rápido", next: "summary", tags: ["batería", "celular"] },
      { label: "Se mojó / daño por agua", next: "summary", tags: ["daño por agua", "celular"] },
      { label: "Problema de software / se reinicia", next: "summary", tags: ["software / reinicios", "celular"] },
      { label: "Cámara o audio falla", next: "summary", tags: ["cámara / audio", "celular"] },
      { label: "No sé, necesito diagnóstico", next: "summary", tags: ["diagnóstico", "celular"] },
    ],
  },
  {
    id: "phone-screen",
    message: "¿Qué modelo es tu celular y qué tipo de pantalla tiene?",
    options: [
      { label: "iPhone", next: "summary", tags: ["pantalla rota", "iPhone", "celular"] },
      { label: "Android", next: "summary", tags: ["pantalla rota", "Android", "celular"] },
      { label: "No sé el modelo", next: "summary", tags: ["pantalla rota", "celular"] },
    ],
  },

  {
    id: "device-console",
    message: "¿Qué consola tienes y qué le pasa?",
    options: [
      { label: "No da imagen / HDMI", next: "summary", tags: ["sin imagen / HDMI", "consola"] },
      { label: "Se apaga o se calienta", next: "summary", tags: ["se apaga / se calienta", "consola"] },
      { label: "No enciende", next: "summary", tags: ["no enciende", "consola"] },
      { label: "Lector de discos", next: "summary", tags: ["lector de discos", "consola"] },
      { label: "Mandos / stick drift", next: "summary", tags: ["mandos", "consola"] },
    ],
  },

  {
    id: "device-software",
    message: "¿Qué necesitas con software?",
    options: [
      { label: "Instalar / activar Office", next: "summary", tags: ["Office", "software"] },
      { label: "Activar Windows", next: "summary", tags: ["activación Windows", "software"] },
      { label: "Limpieza de virus / lento", next: "summary", tags: ["virus", "software"] },
      { label: "Respaldo de información", next: "summary", tags: ["respaldo", "software"] },
      { label: "Soporte remoto", next: "summary", tags: ["soporte remoto", "software"] },
    ],
  },

  {
    id: "summary",
    message:
      "¡Perfecto! Ya tengo una idea de lo que necesita tu equipo. Te ofrezco dos opciones para continuar:",
    options: [
      { label: "📲 Continuar por WhatsApp", action: "whatsapp" },
      { label: "📅 Agendar una cita", action: "book" },
    ],
  },
];

export function getNode(id: string): ChatNode | undefined {
  return chatTree.find((n) => n.id === id);
}
