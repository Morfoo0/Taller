"use client";

import { useState, useRef, useEffect } from "react";
import { Cpu, Send, Check, CalendarDays, MessageCircle } from "lucide-react";
import { getNode } from "@/lib/chat";
import { site, waLink } from "@/config/site";
import type { ChatOption } from "@/lib/types";

type Msg = {
  id: number;
  from: "bot" | "user";
  text: string;
  options?: ChatOption[];
  action?: "whatsapp" | "book";
  tags?: string[];
};

const START_ID = "start";

function buildIntro(): Msg {
  const node = getNode(START_ID)!;
  return { id: 0, from: "bot", text: node.message, options: node.options };
}

export function AssistantChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([buildIntro()]);
  const [input, setInput] = useState("");
  const [bookOpen, setBookOpen] = useState(false);
  const [bookSent, setBookSent] = useState(false);
  const [bookForm, setBookForm] = useState({ name: "", phone: "", date: "" });
  const tagsRef = useRef<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, bookOpen, bookSent]);

  function handleOption(option: ChatOption) {
    if (option.tags) tagsRef.current.push(...option.tags);

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: option.label },
    ]);

    if (option.action === "whatsapp") {
      const summary = tagsRef.current.length
        ? `Problema: ${tagsRef.current.join(", ")}. `
        : "";
      const link = waLink(
        `Hola ${site.name}, vengo de su página web. ${summary}¿Me podrían dar un diagnóstico?`
      );
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    if (option.action === "book") {
      setBookOpen(true);
      return;
    }

    if (option.next) {
      const node = getNode(option.next);
      if (node) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, from: "bot", text: node.message, options: node.options },
        ]);
      }
    }
  }

  function submitBook(e: React.FormEvent) {
    e.preventDefault();
    const summary = tagsRef.current.length
      ? `Problema: ${tagsRef.current.join(", ")}. `
      : "";
    const detail = `${bookForm.name} quiere una cita el ${bookForm.date}. Tel: ${bookForm.phone}. ${summary}`;
    // TODO Fase 2: guardar lead en Supabase y notificar por email
    console.log("Nueva reserva:", detail);
    setBookSent(true);
  }

  function handleFreeText(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text }]);
    setInput("");
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        from: "bot",
        text: "Entiendo. Para darte el mejor diagnóstico, ¿me ayudas eligiendo una opción?",
        options: getNode(START_ID)!.options,
      },
    ]);
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Cpu className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">Asistente {site.name}</p>
            <p className="flex items-center gap-1 text-xs text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> En línea
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-surface-2 hover:text-foreground"
        >
          ✕
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                m.from === "user"
                  ? "rounded-br-sm bg-accent text-zinc-950"
                  : "rounded-bl-sm bg-surface text-foreground"
              }`}
            >
              <p>{m.text}</p>
              {m.options && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOption(opt)}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground transition hover:border-accent hover:text-accent"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {bookOpen && !bookSent && (
          <form onSubmit={submitBook} className="rounded-2xl border border-accent/30 bg-surface p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-accent">
              <CalendarDays className="h-4 w-4" /> Agenda tu cita
            </p>
            <div className="mt-3 space-y-2">
              <input
                required
                value={bookForm.name}
                onChange={(e) => setBookForm({ ...bookForm, name: e.target.value })}
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <input
                required
                value={bookForm.phone}
                onChange={(e) => setBookForm({ ...bookForm, phone: e.target.value })}
                placeholder="Tu teléfono"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <input
                required
                type="date"
                value={bookForm.date}
                onChange={(e) => setBookForm({ ...bookForm, date: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-cyan-300"
              >
                <Check className="h-4 w-4" /> Confirmar cita
              </button>
            </div>
          </form>
        )}

        {bookSent && (
          <div className="rounded-2xl border border-success/30 bg-success/10 p-4 text-sm">
            <p className="font-semibold text-success">¡Cita solicitada!</p>
            <p className="mt-1 text-muted">
              Te confirmaremos por WhatsApp. Mientras tanto, puedes escribirnos directo:
            </p>
            <a
              href={waLink("Hola, acabo de agendar una cita en su web.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold text-accent hover:bg-surface-2"
            >
              <MessageCircle className="h-4 w-4" /> Ir a WhatsApp
            </a>
          </div>
        )}
      </div>

      <form onSubmit={handleFreeText} className="flex items-center gap-2 border-t border-border bg-surface px-3 py-2.5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          aria-label="Enviar"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-zinc-950 hover:bg-cyan-300"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </>
  );
}
