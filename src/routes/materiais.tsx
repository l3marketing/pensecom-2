import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MaterialFormDialog } from "@/components/site/MaterialFormDialog";
import { materiais, temas } from "@/lib/materiais";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FileText, ArrowRight } from "lucide-react";
import bannerImg from "@/assets/materiais-banner.jpg";

export const Route = createFileRoute("/materiais")({
  head: () => ({
    meta: [
      { title: "Biblioteca de Materiais — PENSECOM" },
      { name: "description", content: "E-books, checklists e guias gratuitos sobre RH estratégico, cultura e liderança." },
      { property: "og:title", content: "Biblioteca de Materiais — PENSECOM" },
      { property: "og:description", content: "E-books, checklists e guias gratuitos para gente e gestão." },
    ],
  }),
  component: MateriaisPage,
});

function MateriaisPage() {
  const [tema, setTema] = useState<string>("Todos");
  const lista = tema === "Todos" ? materiais : materiais.filter((m) => m.theme === tema);
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Profissionais de RH sorrindo enquanto colaboram em um escritório"
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Biblioteca gratuita
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Conteúdos para uma gestão de pessoas mais estratégica
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              E-books, checklists e guias para apoiar a sua jornada com RH
              estratégico, cultura e liderança.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-2">
          {["Todos", ...temas].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTema(t)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                tema === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-muted/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((m) => (
            <MaterialFormDialog
              key={m.slug}
              title={m.title}
              trigger={
                <button
                  type="button"
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
              <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent to-muted">
                {m.cover ? (
                  <img
                    src={m.cover}
                    alt={m.title}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition group-hover:scale-[1.03]"
                  />
                ) : (
                  <FileText className="h-10 w-10 text-primary" />
                )}
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                {m.theme}
              </span>
              <h2 className="mt-2 text-lg font-semibold leading-snug">{m.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Solicitar Material
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
                </button>
              }
            />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}