"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { AssistantChat } from "./AssistantChat";

export function AssistantLauncher() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition ${
          open
            ? "bg-surface-2 text-foreground"
            : "animate-pulse-glow bg-accent text-zinc-950 hover:bg-cyan-300"
        }`}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[min(560px,calc(100vh-8rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:right-6">
          <AssistantChat onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
