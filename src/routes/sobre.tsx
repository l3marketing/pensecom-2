import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Heart, Target, Eye, Globe2, Instagram, Linkedin } from "lucide-react";
import founderImg from "@/assets/micheli.png.asset.json";
import bannerImg from "@/assets/sobre-banner.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — PENSECOM" },
      {
        name: "description",
        content:
          "Conheça a PENSECOM: consultoria de RH estratégico fundada por Michele Maffi, com atuação 100% remota no Brasil e no exterior.",
      },
      { property: "og:title", content: "Sobre — PENSECOM" },
      {
        property: "og:description",
        content:
          "Consultoria de RH estratégico 100% remota. Mais de 600 empresas atendidas.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Equipe de RH conversando e sorrindo durante uma reunião em escritório"
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Sobre a PENSECOM
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Empresas são feitas de Pessoas.
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Há mais de 7 anos apoiamos empresas a crescerem com gente, com
              atendimento híbrido ou 100% remoto, senioridade e método.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Target, t: "Propósito", d: "Transformar positivamente as pessoas através das empresas" },
            { icon: Eye, t: "Visão de Futuro", d: "Ser reconhecida pela excelência em serviços de Recursos Humanos e Estratégia de Desenvolvimento de talentos." },
            { icon: Heart, t: "Valores", d: "Comunicação ativa, Aprendizagem Contínua, Atitude Positiva, Iniciativa para Conquista, Comprometimento com Resultado e Reconhecimento." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(0 0% 99%) 0%, hsl(220 14% 96%) 45%, hsl(220 13% 91%) 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Nossa filosofia
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Conheça a PENSECOM em essência
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Como pensamos gente e gestão, e o que nos move em cada projeto.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl shadow-xl">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/WO0V9rRoRI4"
                title="Nossa filosofia — PENSECOM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background:
            "radial-gradient(120% 140% at 20% 20%, #302c9b 0%, #2f2c79 32%, #2d2c55 62%, #252440 100%)",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1.2fr] lg:items-center lg:px-8">
          <img
            src={founderImg.url}
            alt="Michele Maffi, fundadora da PENSECOM"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full max-w-xl object-cover lg:scale-105"
          />
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Fundadora
            </span>
            <h2 className="mt-2 text-3xl font-bold text-primary-foreground sm:text-4xl">
              Michele Maffi
            </h2>
            <p className="mt-5 text-primary-foreground/80">
              Mais de duas décadas de experiência em RH, conselheira de
              empresas e mentora de líderes. Fundou a PENSECOM com o propósito
              de levar RH estratégico de alto nível a empresas de todos os
              tamanhos.
            </p>
            <p className="mt-4 text-primary-foreground/80">
              "Eu acredito que o melhor negócio do mundo é cuidar de pessoas
              que cuidam de negócios."
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/_michelemaffi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Michele Maffi"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/michelemaffi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Michele Maffi"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Globe2 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Atuação nacional e internacional</h2>
          </div>
          <p className="mt-4 max-w-2xl text-background/70">
            Atendemos empresas em todo o Brasil e em mais de 10 países. Nosso
            modelo 100% remoto permite levar metodologia, senioridade e
            agilidade a qualquer operação.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Fale com a gente <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}