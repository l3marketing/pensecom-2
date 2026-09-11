import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CrmEmbed } from "@/components/site/CrmEmbed";
import { Mail, Globe2, Clock, MapPin } from "lucide-react";
import bannerImg from "@/assets/contato-banner.jpg";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — PENSECOM" },
      { name: "description", content: "Fale com um consultor PENSECOM. Atendimento 100% remoto no Brasil e no exterior." },
      { property: "og:title", content: "Contato — PENSECOM" },
      { property: "og:description", content: "Fale com um consultor PENSECOM." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Profissionais se cumprimentando em um escritório moderno"
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Contato
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Vamos conversar sobre o seu RH?
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Conte um pouco sobre a sua empresa e o que você precisa. Nosso
              time retorna em até 1 dia útil.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Canais de atendimento
            </h2>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">E-mail</div>
                  <a href="mailto:contato@pensecom.com.br" className="text-sm text-muted-foreground hover:text-primary">
                    contato@pensecom.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Globe2 className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Atendimento</div>
                  <div className="text-sm text-muted-foreground">100% remoto · Brasil e exterior</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Horário</div>
                  <div className="text-sm text-muted-foreground">Seg a Sex · 9h às 18h</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Endereço</div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=R.+Armezinda+de+Ultramar,+146+-+Res.+Santa+Luiza+II,+Nova+Odessa+-+SP,+13387-696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    R. Armezinda de Ultramar, 146 – Res. Santa Luiza II,
                    Nova Odessa – SP, 13387-696
                  </a>
                </div>
              </li>
            </ul>

          </div>

          <div>
            <CrmEmbed source="contato" title="Fale com um consultor" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}