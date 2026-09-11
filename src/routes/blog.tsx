import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — PENSECOM" },
      { name: "description", content: "Conteúdos sobre RH estratégico, cultura, liderança e gestão de pessoas." },
      { property: "og:title", content: "Blog — PENSECOM" },
      { property: "og:description", content: "Conteúdos sobre RH estratégico, cultura e liderança." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Blog</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Insights sobre gente, cultura e liderança
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Conteúdo prático para sócios, líderes e profissionais de RH que
            querem fazer mais com gente.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.slug}
              href="https://pensecom.com.br/site/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {p.category}
              </span>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}