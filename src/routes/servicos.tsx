import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/lib/services";
import bannerAsset from "@/assets/servicos-banner.jpg.asset.json";
import ctaAsset from "@/assets/servicos-cta-foto.jpg.asset.json";
import {
  ArrowRight,
  ArrowDown,
  Check,
  Compass,
  Layers,
  Handshake,
  Clock,
  Sparkles,
  GraduationCap,
  Search,
  Briefcase,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — PENSECOM" },
      {
        name: "description",
        content:
          "Conheça os serviços da PENSECOM: Conselho de RH, BPO 360º, BP, RH Flex, Mentoria de Cultura, Treinamento de Liderança, R&S e Consultorias Avulsas.",
      },
      { property: "og:title", content: "Serviços — PENSECOM" },
      {
        property: "og:description",
        content: "Soluções de RH estratégico 100% remotas para o seu momento.",
      },
    ],
  }),
  component: ServicosPage,
});

const iconMap = {
  compass: Compass,
  layers: Layers,
  handshake: Handshake,
  clock: Clock,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  search: Search,
  briefcase: Briefcase,
  activity: Activity,
} as const;

function ServicosPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={bannerAsset.url}
            alt="Equipe de profissionais reunida em um escritório moderno"
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Serviços
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Soluções de RH pensadas para o seu momento
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Combinamos diferentes serviços para montar um pacote sob medida
              para a sua empresa — do operacional ao estratégico.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Briefcase;
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Ver detalhes
                  <ArrowDown className="h-3.5 w-3.5 transition group-hover:translate-y-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <div className="border-t border-border bg-muted/30">
        {services.map((s, idx) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Briefcase;
          const reverse = idx % 2 === 1;
          const num = String(idx + 1).padStart(2, "0");
          const headingId = `${s.slug}-title`;
          return (
            <section
              key={s.slug}
              id={s.slug}
              aria-labelledby={headingId}
              className="scroll-mt-24 border-b border-border last:border-b-0"
            >
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
                <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    <span>{num}</span>
                    <span className="h-px w-8 bg-primary/40" />
                    <span>Serviço</span>
                  </div>
                  <h2
                    id={headingId}
                    className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
                  >
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-foreground/80">{s.tagline}</p>
                  <div className="mt-6 space-y-4 text-base text-muted-foreground">
                    {s.details.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.highlights.map((h) => (
                      <li
                        key={h.label}
                        className="flex gap-3 rounded-xl border border-border bg-card p-4"
                      >
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-snug">
                            {h.label}
                          </p>
                          {h.description && (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {h.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contato"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:shadow-md"
                    >
                      Quero falar sobre {s.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/servicos/$slug"
                      params={{ slug: s.slug }}
                      className="text-sm font-semibold text-foreground/70 underline-offset-4 hover:text-primary hover:underline"
                    >
                      Ver página dedicada
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="relative h-full rounded-3xl border border-border bg-gradient-to-br from-accent/60 via-background to-background p-8">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
                      Benefícios
                    </p>
                    <ul className="mt-3 space-y-3 text-sm">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-2 text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="absolute inset-y-0 right-0 w-full sm:w-[75%] lg:w-[62%]">
            <img
              src={ctaAsset.url}
              alt="Consultora de RH da PENSECOM sorrindo com um tablet nas mãos"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/55 to-transparent" />
          </div>
          <div className="relative max-w-xl p-8 sm:p-10 lg:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Não sabe por onde começar?
            </h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/90">
              Agende um diagnóstico gratuito com o nosso time. Entendemos o seu
              momento e indicamos a melhor combinação de serviços.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-background/90"
            >
              Agendar diagnóstico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        </div>
      </section>
    </SiteLayout>
  );
}