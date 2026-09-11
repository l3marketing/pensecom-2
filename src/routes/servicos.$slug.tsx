import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { findService, services } from "@/lib/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — PENSECOM` : "Serviço — PENSECOM";
    const desc = s?.short ?? "Serviço PENSECOM";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Serviço não encontrado</h1>
        <Link to="/servicos" className="mt-6 inline-block text-primary hover:underline">
          Voltar para serviços
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ServicoDetalhe,
});

function ServicoDetalhe() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            <Link to="/servicos" className="hover:underline">Serviços</Link>
          </div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {service.short}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">Como atuamos</h2>
            <p className="mt-4 text-muted-foreground">{service.description}</p>

            <h3 className="mt-10 text-xl font-bold">Benefícios</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b: string) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold">Como funciona</h3>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Diagnóstico inicial 100% remoto",
                "Reuniões periódicas com consultores",
                "Frameworks, templates e materiais prontos",
                "Suporte ágil pelos canais oficiais",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 shadow-sm h-fit">
            <h3 className="text-lg font-bold">Quer saber se faz sentido para você?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fale com um consultor PENSECOM. Em uma conversa rápida
              entendemos o seu cenário e indicamos o melhor caminho.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Fale com um consultor <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Outros serviços</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-primary/40"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}