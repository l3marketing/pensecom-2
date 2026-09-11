export type Service = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  description: string;
  details: string[];
  highlights: { label: string; description?: string }[];
  benefits: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "conselho-rh-estrategico",
    title: "Conselho de RH Estratégico",
    tagline: "O CFO de Pessoas da sua empresa — decisões de gente com inteligência, não no achismo.",
    short:
      "Direcionamento estratégico de RH para sócios e C-level, com visão de gente, cultura e negócio.",
    description:
      "Reuniões periódicas com a liderança da empresa para apoiar decisões estratégicas de pessoas — estrutura organizacional, sucessão, cultura, performance e remuneração — alinhadas aos resultados do negócio.",
    details: [
      "Um espaço recorrente com a diretoria para olhar gente como variável estratégica do negócio: estrutura organizacional, sucessão, performance, cultura e remuneração.",
      "Trazemos visão externa, benchmark e indicadores para que decisões críticas de pessoas sejam tomadas com inteligência — não no achismo.",
    ],
    highlights: [
      { label: "2h semanais online com a diretoria" },
      { label: "Indicadores estratégicos de Recursos Humanos" },
      { label: "Apoio em decisões críticas de gente" },
    ],
    benefits: [
      "Visão estratégica de RH conectada aos objetivos do negócio",
      "Acompanhamento contínuo de indicadores de gente",
      "Apoio à tomada de decisão de sócios e diretores",
      "Estrutura, sucessão e cultura organizacional",
    ],
    icon: "compass",
  },
  {
    slug: "bpo-rh-360",
    title: "BPO de RH 360º",
    tagline: "Terceirizamos todo o RH e DP da sua empresa — você não precisa contratar ninguém interno.",
    short:
      "Terceirização completa do RH: do operacional ao estratégico, com time especialista dedicado.",
    description:
      "Sua empresa passa a contar com um RH completo, sem a necessidade de estruturar um departamento interno. Cuidamos de recrutamento, departamento pessoal (parceiros), desenvolvimento, cultura e indicadores.",
    details: [
      "Do operacional ao estratégico: assumimos a operação de RH e DP da sua empresa com um time dedicado, processos estruturados e indicadores claros.",
      "Atuação em toda a jornada do colaborador, com suporte contínuo via WhatsApp e canais de atendimento.",
    ],
    highlights: [
      { label: "Departamento Pessoal", description: "Admissão, demissão, férias, folha de pagamento e controle de ponto." },
      { label: "RH Estratégico", description: "Indicadores de RH, acompanhamento próximo e suporte contínuo." },
      { label: "Atração e Encantamento" },
      { label: "Recrutamento e Seleção Humanizado" },
      { label: "Onboarding Estruturado" },
      { label: "Alinhamento Contínuo à Cultura" },
      { label: "Desenvolvimento Técnico e Comportamental" },
      { label: "Cuidado Contínuo e Retenção" },
      { label: "Gestão de Clima e Bem-Estar" },
      { label: "Gestão de Desempenho" },
      { label: "Offboarding Humanizado" },
    ],
    benefits: [
      "RH completo sem o custo de uma estrutura interna",
      "Time multidisciplinar dedicado",
      "Processos, rotinas e indicadores estruturados",
      "Escalabilidade conforme a empresa cresce",
    ],
    icon: "layers",
  },
  {
    slug: "bp-rh-estrategico",
    title: "BP de RH Estratégico",
    tagline: "Seu RH existe, mas só apaga incêndio? Ensinamos a metodologia PENSECOM para transformar a estratégia de gente.",
    short:
      "Um Business Partner de RH dedicado para atuar como braço estratégico da sua liderança.",
    description:
      "Profissional sênior de RH atuando como parceiro estratégico das lideranças, com agenda dedicada para temas de cultura, performance, desenvolvimento e clima.",
    details: [
      "Atendimento 100% online que cabe na rotina e tem eficiência prática. Estruturamos seu RH interno a partir de quatro pilares de atuação.",
    ],
    highlights: [
      { label: "Pilar Empresa", description: "Diagnóstico, cargos e salários, políticas internas e conformidade." },
      { label: "Pilar Colaborador", description: "Clima, humanização, avaliação de desempenho e escuta." },
      { label: "Pilar Cultura", description: "Fortalecimento, comunicação de MVV e rituais diários." },
      { label: "Pilar Liderança", description: "PDL, liderança transformadora e cultura de feedback." },
    ],
    benefits: [
      "Parceiro estratégico das lideranças",
      "Agenda recorrente e previsível",
      "Atuação em cultura, performance e clima",
      "Senioridade sem custo de contratação CLT",
    ],
    icon: "handshake",
  },
  {
    slug: "rh-flex",
    title: "RH Flex",
    tagline: "Demandas pontuais de gente, com um pacote de horas mensais que cabe na sua realidade.",
    short:
      "Pacote de horas mensais para apoiar demandas pontuais e recorrentes do seu RH.",
    description:
      "Banco de horas flexível com nossa equipe de RH para você usar conforme a necessidade — desde apoio em processos seletivos até construção de políticas, treinamentos e projetos pontuais.",
    details: [
      "Ideal para quem precisa de apoio estratégico recorrente, mas não quer estruturar um RH interno. Você escolhe o pacote de horas mensais e usa em qualquer uma das soluções abaixo.",
    ],
    highlights: [
      { label: "Recrutamento e seleção" },
      { label: "Consultoria jurídica trabalhista" },
      { label: "Treinamentos e capacitações" },
      { label: "Atendimento com psicólogo" },
      { label: "Pesquisa de cargos e salários" },
      { label: "Pesquisa de clima organizacional" },
      { label: "Workshops" },
      { label: "Endomarketing" },
    ],
    benefits: [
      "Flexibilidade para usar conforme a demanda",
      "Equipe sênior à disposição",
      "Sem vínculo empregatício",
      "Previsibilidade de investimento",
    ],
    icon: "clock",
  },
  {
    slug: "mentoria-cultura",
    title: "Mentoria de Cultura Organizacional",
    tagline: "Apoio direto à diretoria para definir, fortalecer e viver a cultura — não apenas emoldurar na parede.",
    short:
      "Diagnóstico, design e ativação da cultura que vai sustentar o crescimento da sua empresa.",
    description:
      "Mentoria estruturada para sócios e líderes desenharem, comunicarem e viverem a cultura da empresa — com rituais, comportamentos e indicadores claros.",
    details: [
      "Seis meses mergulhando na sua cultura organizacional para construir uma liderança transformadora, exemplo e que coloque a cultura em prática no dia a dia.",
      "Encontros de 2 horas semanais com a diretoria.",
    ],
    highlights: [
      { label: "Diagnóstico de cultura atual" },
      { label: "Definição de missão, visão e valores" },
      { label: "Criação de ritos e rituais culturais" },
      { label: "Treinamento de cultura para a liderança" },
    ],
    benefits: [
      "Diagnóstico de cultura atual vs. desejada",
      "Definição de valores e comportamentos",
      "Plano de ativação com rituais e práticas",
      "Mentoria contínua para a liderança",
    ],
    icon: "sparkles",
  },
  {
    slug: "treinamento-lideranca",
    title: "Treinamento de Liderança",
    tagline: "Desenvolvimento para uma liderança transformadora — feedback, performance, cultura e gestão de pessoas.",
    short:
      "Programas para formar e desenvolver líderes que entregam resultado com pessoas.",
    description:
      "Trilhas de desenvolvimento para líderes em diferentes níveis — do supervisor ao C-level —, abordando feedback, comunicação, gestão de performance, conflitos e cultura.",
    details: [
      "Programas práticos e aplicáveis, com trilhas customizadas por nível de liderança e acompanhamento de evolução. 100% remoto e ao vivo.",
    ],
    highlights: [
      { label: "Trilhas customizadas por nível de liderança" },
      { label: "Feedback, comunicação e gestão de conflitos" },
      { label: "Gestão de performance e cultura de resultado" },
      { label: "Acompanhamento com indicadores de evolução" },
    ],
    benefits: [
      "Trilhas customizadas por nível de liderança",
      "Conteúdo prático e aplicável",
      "Acompanhamento e indicadores de evolução",
      "Formato 100% remoto e ao vivo",
    ],
    icon: "graduation-cap",
  },
  {
    slug: "recrutamento-selecao",
    title: "Recrutamento & Seleção",
    tagline: "Eleve o nível das suas contratações com método, hunting e fit cultural.",
    short:
      "Hunting especializado para posições estratégicas, com método e velocidade.",
    description:
      "Processos seletivos conduzidos por consultores experientes, com mapeamento ativo, avaliação técnica e comportamental e foco em fit cultural com a sua empresa.",
    details: [
      "Cuidamos do processo completo de uma vaga específica, aplicando toda a metodologia PENSECOM: alinhamento detalhado, hunting, triagem estratégica, entrevistas, testes comportamentais e entrega de finalistas com devolutiva.",
    ],
    highlights: [
      { label: "Perfil técnico e comportamental avaliado", description: "Análise de competências com ferramentas como Eneagrama e DISC." },
      { label: "Contratação mais assertiva e estratégica", description: "Processo adaptado às necessidades específicas de cada vaga." },
      { label: "Economia de tempo e segurança na escolha", description: "Reduzimos o tempo de análise e damos mais precisão à decisão." },
    ],
    benefits: [
      "Hunting ativo para posições estratégicas",
      "Avaliação técnica + fit cultural",
      "SLA claro e acompanhamento próximo",
      "Garantia de reposição",
    ],
    icon: "search",
  },
  {
    slug: "consultorias-avulsas",
    title: "Consultorias Avulsas",
    tagline: "Soluções Talentos® — pacotes pontuais para frentes específicas de RH.",
    short:
      "Projetos pontuais de RH: descrição de cargos, políticas, PCR, clima, performance e mais.",
    description:
      "Projetos de RH com escopo definido e entregáveis claros — ideal para empresas que precisam estruturar uma frente específica sem contratar de forma recorrente.",
    details: [
      "Conte com uma equipe dedicada para cuidar do seu capital humano em frentes específicas — da pesquisa de clima ao plano de desenvolvimento de líderes — liberando você para focar no negócio.",
    ],
    highlights: [
      { label: "Gestão de Pesquisa de Clima Organizacional" },
      { label: "Desenvolvimento e Fortalecimento de Cultura" },
      { label: "Programa de Cargos e Salários" },
      { label: "Soluções para Saúde Mental na Empresa" },
      { label: "Mapeamentos Comportamentais e Testes Psicológicos" },
      { label: "Plano de Desenvolvimento de Líderes" },
    ],
    benefits: [
      "Escopo, prazo e investimento claros",
      "Entregáveis prontos para uso",
      "Metodologia já testada em centenas de empresas",
      "Possibilidade de evoluir para serviços recorrentes",
    ],
    icon: "briefcase",
  },
  {
    slug: "pesquisa-clima-psicossocial",
    title: "Pesquisa de Clima e Psicossocial",
    tagline:
      "Diagnóstico de RH e empresarial com leitura real do clima, dos riscos psicossociais e da cultura.",
    short:
      "Diagnóstico de RH / empresarial: clima organizacional, riscos psicossociais e plano de ação.",
    description:
      "Aplicamos pesquisa de clima e avaliação de riscos psicossociais (NR-1) para entender o que realmente acontece dentro da empresa — e entregamos um diagnóstico de RH e empresarial com plano de ação prático.",
    details: [
      "Coletamos dados com metodologia estruturada e sigilosa, cruzamos com indicadores de gestão e traduzimos tudo em um diagnóstico claro do momento da sua empresa.",
      "Formato híbrido e personalizado: aplicação online para times distribuídos e etapas presenciais (grupos focais, entrevistas e devolutiva com a liderança) para empresas da região que preferem o contato olho no olho.",
    ],
    highlights: [
      { label: "Pesquisa de clima organizacional" },
      { label: "Diagnóstico de riscos psicossociais (NR-1)" },
      { label: "Grupos focais e entrevistas com lideranças" },
      { label: "Relatório executivo com plano de ação" },
    ],
    benefits: [
      "Decisões de gente baseadas em dados, não em achismo",
      "Conformidade com as exigências de saúde mental no trabalho",
      "Redução de turnover, conflitos e afastamentos",
      "Formato remoto, presencial ou híbrido, conforme a sua necessidade",
    ],
    icon: "activity",
  },
];

export const findService = (slug: string) =>
  services.find((s) => s.slug === slug);