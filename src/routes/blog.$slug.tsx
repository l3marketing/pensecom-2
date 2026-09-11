import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { findPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} — Blog PENSECOM` : "Post — PENSECOM";
    const desc = p?.excerpt ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Post não encontrado</h1>
        <a
          href="https://pensecom.com.br/site/blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-primary hover:underline"
        >
          Voltar para o blog
        </a>
      </div>
    </SiteLayout>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <a
          href="https://pensecom.com.br/site/blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← Voltar para o blog
        </a>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-primary">
          {post.category}
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 text-sm text-muted-foreground">
          {post.author} ·{" "}
          {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </div>

        <div className="prose prose-neutral mt-10 max-w-none text-foreground">
          {post.content.split("\n\n").map((para: string, i: number) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">
              {para}
            </p>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}