import "./hero.css";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Compass,
  Layers,
  Handshake,
  Clock,
  Sparkles,
  GraduationCap,
  Search,
  Briefcase,
  Star,
  CheckCircle2,
  HeartHandshake,
  Activity,
  Laptop,
  MapPin,
  Users,
  Instagram,
  Linkedin,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CountUp } from "@/components/site/CountUp";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";
import heroImg from "@/assets/hero-team.jpg.asset.json";
import logoIcon from "@/assets/pensecom-icon-branco.png.asset.json";
import founderImg from "@/assets/micheli.png.asset.json";
import mapaBrasil from "@/assets/mapa-brasil.png.asset.json";
import trustWoman from "@/assets/trust-woman.jpg";
import atendimentoHibrido from "@/assets/atendimento-hibrido.png";
import client2 from "@/assets/clients/client-2.png.asset.json";
import client3 from "@/assets/clients/client-3.png.asset.json";
import client4 from "@/assets/clients/client-4.png.asset.json";
import client5 from "@/assets/clients/client-5.png.asset.json";
import client6 from "@/assets/clients/client-6.png.asset.json";
import client7 from "@/assets/clients/client-7.png.asset.json";

const clientLogos = [
  { src: client2.url, alt: "Istobal" },
  { src: client3.url, alt: "Ubian Fitness" },
  { src: client4.url, alt: "Inntag" },
  { src: client5.url, alt: "Tamtex" },
  { src: client6.url, alt: "Volcano Wheels" },
  { src: client7.url, alt: "JHM Motores" },
];

const typewriterTexts = [
  "Empresas são feitas de pessoas",
  "Pense com o coração. Pensecom."
];

function Typewriter() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const currentText = typewriterTexts[loopNum];
    const complete = !isDeleting && text === currentText;
    const delay = complete ? 3000 : isDeleting ? 40 : 90;
    
    const timeoutId = window.setTimeout(() => {
      if (complete) {
        setIsDeleting(true);
        setText(currentText.slice(0, -1));
      } else if (isDeleting && text.length <= 1) {
        setText("");
        setIsDeleting(false);
        setLoopNum((loopNum + 1) % typewriterTexts.length);
      } else {
        setText(currentText.slice(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(timeoutId);
  }, [mounted, text, isDeleting, loopNum]);

  const cursorClass = "ml-1 text-white animate-pulse";

  return (
    <span className="inline-block min-h-[1.5em]" aria-label={typewriterTexts.join(". ")}>
      <span data-typewriter-text aria-hidden="true">{mounted ? text : ""}</span>
      <span aria-hidden="true" className={cursorClass}>|</span>
    </span>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PENSECOM — Empresas são feitas de Pessoas" },
      {
        name: "description",
        content:
          "Consultoria de RH estratégico 100% remota. BPO, BP, mentoria de cultura, treinamento de liderança e recrutamento para empresas que querem crescer com gente.",
      },
      { property: "og:title", content: "PENSECOM — Empresas são feitas de Pessoas" },
      {
        property: "og:description",
        content:
          "Consultoria de RH estratégico 100% remota para empresas que querem crescer com gente.",
      },
    ],
  }),
  component: HomePage,
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

const stats = [
  { end: 7, prefix: "", suffix: "+", l: "anos de mercado" },
  { end: 1.5, prefix: "+", suffix: "k", decimals: 1, l: "pessoas impactadas" },
  { end: 11, prefix: "+", suffix: "M", l: "currículos avaliados" },
  { end: 600, prefix: "+", suffix: "", l: "empresas atendidas" },
];

const pains = [
  {
    before: "Preciso crescer mas ",
    strong: "não sei se meu time aguenta",
    after: "",
    side: "left" as const,
  },
  {
    before: "",
    strong: "Não sei se pago bem",
    after: " meus funcionários",
    side: "right" as const,
  },
  {
    before: "Contratei errado ",
    strong: "3 vezes este ano",
    after: "",
    side: "left" as const,
  },
  {
    before: "Meu gerente é difícil e a ",
    strong: "equipe pediu demissão",
    after: "",
    side: "right" as const,
  },
  {
    before: "Minha empresa cresceu mas ",
    strong: "perdeu a cultura",
    after: "",
    side: "left" as const,
  },
  {
    before: "Gasto ",
    strong: "mais tempo com burocracia",
    after: " do que com vender",
    side: "right" as const,
  },
];

const pillars = [
  {
    title: "Recrutamento & Seleção",
    desc: "Hunting humanizado e assertivo para posições estratégicas.",
    icon: Search,
    to: "/servicos/$slug",
    slug: "recrutamento-selecao",
  },
  {
    title: "BPO de RH 360º",
    desc: "Todo o RH e DP terceirizados, do operacional ao estratégico.",
    icon: Layers,
    to: "/servicos/$slug",
    slug: "bpo-rh-360",
  },
  {
    title: "BP de RH Estratégico",
    desc: "Business Partner dedicado como braço estratégico da liderança.",
    icon: Handshake,
    to: "/servicos/$slug",
    slug: "bp-rh-estrategico",
  },
  {
    title: "Consultoria",
    desc: "Projetos pontuais: cargos, políticas, performance e mais.",
    icon: Briefcase,
    to: "/servicos/$slug",
    slug: "consultorias-avulsas",
  },
  {
    title: "Pesquisa de Clima",
    desc: "Medimos o clima e transformamos percepção em plano de ação.",
    icon: HeartHandshake,
    to: "/contato",
    slug: undefined,
  },
  {
    title: "Diagnóstico Psicossocial e Empresarial",
    desc: "Riscos psicossociais (NR-1) e diagnóstico completo da empresa.",
    icon: Activity,
    to: "/contato",
    slug: undefined,
  },
];

const testimonials = [
  {
    name: "Carla M.",
    role: "CEO, Tech Brasil",
    type: "Cliente" as const,
    quote:
      "O time da PENSECOM destravou nosso RH em poucos meses. Hoje temos clareza de cultura, processos e indicadores.",
  },
  {
    name: "Rafael S.",
    role: "Sócio, Indústria",
    type: "Cliente" as const,
    quote:
      "Profissionalismo, senioridade e parceria. Recomendo para qualquer empresa que queira crescer com gente.",
  },
  {
    name: "Juliana P.",
    role: "Diretora de Operações",
    type: "Cliente" as const,
    quote:
      "A mentoria de cultura mudou a forma como nossa liderança se comunica. Resultado direto no engajamento.",
  },
  {
    name: "Marina L.",
    role: "Analista Financeira",
    type: "Candidato" as const,
    quote:
      "Foi o processo seletivo mais humano que já participei. Recebi retorno em cada etapa e me senti respeitada do início ao fim.",
  },
  {
    name: "Diego A.",
    role: "Supervisor de Produção",
    type: "Candidato" as const,
    quote:
      "A entrevista parecia uma conversa de carreira. Saí com clareza sobre meus pontos fortes — e hoje estou na vaga certa para mim.",
  },
  {
    name: "Patrícia R.",
    role: "Coordenadora de Marketing",
    type: "Candidato" as const,
    quote:
      "Mesmo quando não fui aprovada em um processo, recebi um feedback detalhado. Isso mudou a forma como me preparo para entrevistas.",
  },
  {
    name: "Lucas F.",
    role: "Engenheiro de Manutenção",
    type: "Candidato" as const,
    quote:
      "Transparência total sobre a vaga, a empresa e o salário. A PENSECOM realmente cuida das pessoas, não só das posições.",
  },
  {
    name: "Fernanda C.",
    role: "Gerente de RH",
    type: "Cliente" as const,
    quote:
      "Atendimento próximo e ágil. Sempre que precisamos, temos alguém que entende do nosso negócio do outro lado.",
  },
];

function HomePage() {
  const statsRef = useRef<HTMLElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setStatsVisible(e.isIntersecting);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="home-hero bg-primary">
        
        <div className="hero-container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hero-grid">
            
            {/* Texto na Esquerda */}
            <div className="hero-copy">
              <h1 className="hero-title font-extrabold tracking-tight text-white">
                <Typewriter />
              </h1>
              <p className="hero-description text-white font-medium max-w-lg">
                Apoiamos empresas a crescerem com gente: do RH operacional ao
                estratégico, com soluções flexíveis, senioridade e método.
              </p>
              <div className="hero-actions flex flex-wrap gap-3">
                <a
                  href="https://bookings.cloud.microsoft/book/AgendaExternaClientesRILDON@pensecom.com.br/s/6lkok0d-nkythkL3w9MzwA2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#9a3412] shadow-lg transition hover:bg-white hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Fale com um consultor <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white transition hover:bg-white/20 hover:scale-105"
                >
                  Ver serviços
                </Link>
              </div>
            </div>

            {/* Imagem da mulher sobreposta criando forte efeito 3D/editorial */}
            <div className="hero-portrait">
              <img 
                src="/muhlher-transparente-hero.png" 
                alt="Profissional de RH Pensecom" 
                className="hero-photo object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
        

      </section>

      {/* STATS */}
      <section ref={statsRef} className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 md:flex md:justify-center md:gap-8 lg:px-8 lg:py-20">
          <div className="flex justify-center">
            <img
              src={mapaBrasil.url}
              alt="Mapa do Brasil destacado na América do Sul"
              className="w-64 max-w-full sm:w-80 md:w-96 lg:w-[28rem]"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-light tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              A PENSECOM
              <span className="block font-extrabold">em números</span>
            </h2>

            <dl className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] items-baseline gap-x-3 sm:gap-x-4"
                >
                  <dt className="text-right text-2xl font-extrabold text-primary sm:text-3xl lg:text-4xl">
                    <CountUp
                      end={s.end}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                      trigger={statsVisible}
                    />
                  </dt>
                  <dd className="text-left text-sm text-muted-foreground sm:text-base">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm font-semibold text-foreground sm:text-base">
              Atendimento Nacional e Internacional
            </p>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* Left bubbles (desktop) */}
            <ul className="hidden space-y-8 lg:block">
              {pains
                .filter((p) => p.side === "left")
                .map((p, i) => (
                  <li
                    key={p.strong}
                    className={cn(
                      "relative rounded-2xl bg-card p-5 text-base leading-snug text-foreground shadow-lg",
                      i === 1 ? "lg:ml-0 lg:mr-10" : "lg:ml-6",
                    )}
                  >
                    {p.before}
                    <strong className="font-bold text-primary">
                      {p.strong}
                    </strong>
                    {p.after}
                    <span className="absolute -bottom-2 right-8 h-5 w-5 rotate-45 rounded-sm bg-card lg:bottom-auto lg:right-[-8px] lg:top-1/2 lg:-translate-y-1/2" />
                  </li>
                ))}
            </ul>

            {/* Headline */}
            <h2 className="text-center text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:max-w-xs lg:text-5xl">
              Você sente essas dores?
            </h2>

            {/* Mobile bubbles */}
            <ul className="space-y-6 lg:hidden">
              {pains.map((p) => (
                <li
                  key={p.strong}
                  className="relative rounded-2xl bg-card p-4 text-sm leading-snug text-foreground shadow-lg"
                >
                  {p.before}
                  <strong className="font-bold text-primary">{p.strong}</strong>
                  {p.after}
                  <span className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 rounded-sm bg-card" />
                </li>
              ))}
            </ul>

            {/* Right bubbles (desktop) */}
            <ul className="hidden space-y-8 lg:block">
              {pains
                .filter((p) => p.side === "right")
                .map((p, i) => (
                  <li
                    key={p.strong}
                    className={cn(
                      "relative rounded-2xl bg-card p-5 text-base leading-snug text-foreground shadow-lg",
                      i === 1 ? "lg:mr-0 lg:ml-10" : "lg:mr-6",
                    )}
                  >
                    {p.before}
                    <strong className="font-bold text-primary">
                      {p.strong}
                    </strong>
                    {p.after}
                    <span className="absolute -bottom-2 left-8 h-5 w-5 rotate-45 rounded-sm bg-card lg:bottom-auto lg:left-[-8px] lg:top-1/2 lg:-translate-y-1/2" />
                  </li>
                ))}
            </ul>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-base text-primary-foreground/90">
            Se sim, você não está sozinho. Atendemos centenas de empresas que
            passam pelos mesmos desafios — e estruturamos a solução.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Atuação 360º em gestão de pessoas
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Soluções para cada momento da sua empresa
            </h2>
            <p className="mt-3 text-muted-foreground">
              Do operacional ao estratégico: seis pilares que cobrem toda a
              jornada de gente na sua empresa.
            </p>
          </div>

          {/* 360 infographic */}
          <div className="mt-12">
            {/* Mobile: center badge + stacked pillars */}
            <div className="lg:hidden">
              <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-lg">
                <div>
                  <div className="text-2xl font-extrabold leading-none">
                    360º
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide">
                    Gestão de
                    <br />
                    Pessoas
                  </div>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  const inner = (
                    <>
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-foreground">
                          {p.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {p.desc}
                        </p>
                      </div>
                    </>
                  );
                  const cls =
                    "flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-primary/40";
                  return (
                    <li key={p.title}>
                      {p.slug ? (
                        <Link
                          to="/servicos/$slug"
                          params={{ slug: p.slug }}
                          className={cls}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <Link to="/contato" className={cls}>
                          {inner}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop: circular fan */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-3xl lg:block">
              <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-primary/30" />
              <div className="absolute inset-[26%] rounded-full border border-primary/20" />
              <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl">
                <div>
                  <div className="text-4xl font-extrabold leading-none">
                    360º
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wide">
                    Gestão de
                    <br />
                    Pessoas
                  </div>
                </div>
              </div>
              {pillars.map((p, i) => {
                const Icon = p.icon;
                const angle = (-90 + i * 60) * (Math.PI / 180);
                const left = 50 + 42 * Math.cos(angle);
                const top = 50 + 42 * Math.sin(angle);
                const inner = (
                  <>
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {p.desc}
                    </p>
                  </>
                );
                const cls =
                  "group block w-56 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-5 text-center shadow-sm transition hover:-translate-y-[calc(50%+4px)] hover:border-primary/40 hover:shadow-lg";
                return (
                  <div
                    key={p.title}
                    className="absolute"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    {p.slug ? (
                      <Link
                        to="/servicos/$slug"
                        params={{ slug: p.slug }}
                        className={cls}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <Link to="/contato" className={cls}>
                        {inner}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold">Todos os nossos serviços</h3>
            <Link
              to="/servicos"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Ver todos os serviços →
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Briefcase;
              return (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden bg-[#252440] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#4b48a8]/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Modelo híbrido e personalizado
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Como funciona o nosso atendimento
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Trabalhamos com um modelo híbrido: a agilidade do digital no dia
                a dia e encontros presenciais quando o seu momento pede olho no
                olho. Cada projeto é desenhado sob medida para o tamanho, a
                cultura e a região da sua empresa.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Diagnóstico inicial para entender o seu cenário",
                  "Reuniões periódicas online com o time de consultores",
                  "Encontros presenciais opcionais (workshops, devolutivas e imersões)",
                  "Materiais, frameworks e templates prontos, com suporte ágil",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <p className="text-white/90">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <img
                  src={atendimentoHibrido}
                  alt="Notebook com painel de indicadores de RH em reunião online"
                  width={544}
                  height={335}
                  loading="lazy"
                  className="mx-auto w-full object-contain drop-shadow-2xl"
                />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Laptop,
                      title: "Online",
                      text: "Reuniões, materiais e acompanhamento à distância, do Brasil ao mundo.",
                    },
                    {
                      icon: MapPin,
                      title: "Presencial",
                      text: "Encontros na sua empresa para times da região, sob demanda.",
                    },
                    {
                      icon: Users,
                      title: "Sob medida",
                      text: "Escopo, ritmo e formato ajustados ao porte do seu negócio.",
                    },
                    {
                      icon: Activity,
                      title: "Diagnóstico",
                      text: "Pesquisa de clima e psicossocial para decisões com dados.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-[#1e1d36]/70 p-4"
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-primary">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/75">
              Precisa de um formato presencial ou de um projeto específico, como
              a Pesquisa de Clima e Psicossocial?
            </p>
            <Link
              to="/servicos/$slug"
              params={{ slug: "pesquisa-clima-psicossocial" }}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Conhecer o diagnóstico
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST / CLIENTS */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-[30%] bg-primary lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="mx-auto flex w-full max-w-md justify-center lg:max-w-none lg:justify-end">
              <img
                src={trustWoman}
                alt="Profissional sorrindo após atendimento da PENSECOM"
                width={600}
                height={750}
                loading="lazy"
                className="aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-xl lg:max-w-none"
              />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                <span className="text-primary">+600</span> empresas confiam na
                PENSECOM para estruturar e transformar o RH.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Em um mercado em que pessoas são o maior diferencial, oferecemos
                uma solução estratégica, presencial e remota, para que sua empresa nunca
                mais sofra para atrair, desenvolver e reter os talentos certos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section
        className="text-background"
        style={{
          backgroundColor: "#252440",
          backgroundImage:
            "radial-gradient(120% 140% at 50% 100%, #302c9b 0%, #2f2c79 32%, #2d2c55 62%, #252440 100%)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
          <p className="shrink-0 text-center text-xl font-semibold leading-snug sm:text-2xl lg:max-w-[260px] lg:text-left">
            Empresas que
            <br className="hidden lg:block" /> confiaram na PENSECOM
          </p>
          <div className="grid w-full grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-16 w-auto max-w-[180px] object-contain opacity-80 brightness-0 invert transition hover:opacity-100 sm:h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            O que dizem clientes e candidatos
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nosso propósito é transformar pessoas — e isso aparece tanto na
            experiência das empresas quanto na de quem participa dos nossos
            processos seletivos.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold",
                      t.type === "Candidato"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {t.type}
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section
        className="py-20"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(0 0% 99%) 0%, hsl(220 14% 96%) 45%, hsl(220 13% 91%) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Depoimentos em vídeo</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nossos clientes compartilham como a PENSECOM transformou a gestão de
            pessoas nas suas empresas.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-border" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/RUHkr345VvQ?rel=0&modestbranding=1"
                  title="Depoimento de cliente PENSECOM 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-border" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/ssoJNAnMpcY?rel=0&modestbranding=1"
                  title="Depoimento de cliente PENSECOM 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
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

      {/* BLOG */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Últimos no blog</h2>
            <a
              href="https://pensecom.com.br/site/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Ver todos →
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
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
                <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-5 text-sm font-semibold text-primary">
                  Ler artigo →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl px-8 py-14 text-center text-white sm:px-14"
          style={{
            backgroundColor: "#252440",
            backgroundImage:
              "radial-gradient(120% 140% at 85% 10%, #302c9b 0%, #2f2c79 32%, #2d2c55 62%, #252440 100%)",
          }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Vamos conversar sobre o seu RH?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Uma conversa rápida com nosso time pode mostrar caminhos
            concretos para destravar resultado com gente.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Agendar conversa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
