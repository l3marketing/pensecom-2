import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { findMaterial } from "@/lib/materiais";
import { CrmEmbed } from "@/components/site/CrmEmbed";
import { CheckCircle2, FileText } from "lucide-react";

export const Route = createFileRoute("/materiais/$slug")({
  loader: ({ params }) => {
    const material = findMaterial(params.slug);
    if (!material) throw notFound();
    return { material };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.material;
    const title = m ? `${m.title} — PENSECOM` : "Material — PENSECOM";
    const desc = m?.description ?? "";
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
        <h1 className="text-3xl font-bold">Material não encontrado</h1>
        <Link to="/materiais" className="mt-6 inline-block text-primary hover:underline">
          Voltar para a biblioteca
        </Link>
      </div>
    </SiteLayout>
  ),
  component: MaterialDetalhe,
});

function MaterialDetalhe() {
  const { material } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link to="/materiais" className="text-sm font-semibold text-primary hover:underline">
              ← Voltar para a biblioteca
            </Link>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-primary">
              {material.category}
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {material.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{material.description}</p>

            <div className="mt-8 grid aspect-[16/9] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-muted ring-1 ring-border">
              {material.cover ? (
                <img
                  src={material.cover}
                  alt={material.title}
                  className="h-full w-full object-contain p-6"
                />
              ) : (
                <FileText className="h-16 w-16 text-primary" />
              )}
            </div>

            {material.highlights && material.highlights.length > 0 && (
              <>
                <h2 className="mt-10 text-xl font-bold">O que você vai encontrar</h2>
                <ul className="mt-5 grid gap-3">
                  {material.highlights.map((h: string) => (
                    <li key={h} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <CrmEmbed
              source={`material:${material.slug}`}
              title="Receba o material no seu e-mail"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}