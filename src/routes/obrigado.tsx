import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado! Seu material está a caminho — PENSECOM" },
      {
        name: "description",
        content:
          "Recebemos sua solicitação. Em instantes você recebe o e-book da PENSECOM no seu e-mail.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Obrigado! Seu material está a caminho — PENSECOM" },
      {
        property: "og:description",
        content: "Recebemos sua solicitação de acesso ao e-book da PENSECOM.",
      },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <SiteLayout>
      <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </span>

        <span className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
          Solicitação recebida
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Obrigado! Seu material está a caminho.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Enviamos o acesso ao e-book para o e-mail informado. Se não encontrar
          nos próximos minutos, confira a caixa de spam ou promoções.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-sm">
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          <span>
            Dúvidas? Fale com a gente em{" "}
            <a
              href="mailto:contato@pensecom.com.br"
              className="font-medium text-foreground hover:text-primary"
            >
              contato@pensecom.com.br
            </a>
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </Link>
          <Link
            to="/materiais"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Ver outros materiais
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}