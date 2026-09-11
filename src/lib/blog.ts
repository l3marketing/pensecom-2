export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "cultura-organizacional-na-pratica",
    title: "Cultura organizacional na prática: por onde começar",
    excerpt:
      "Cultura não é um quadro na parede. É o conjunto de comportamentos que se repetem todos os dias. Veja como começar com pé direito.",
    date: "2026-05-20",
    author: "Michele Maffi",
    category: "Cultura",
    content:
      "Cultura organizacional é o conjunto de comportamentos que se repetem todos os dias dentro da empresa. Para construir uma cultura forte, comece definindo claramente os valores, traduza-os em comportamentos esperados e crie rituais que reforcem essas práticas.\n\nA liderança é a principal responsável por viver e disseminar a cultura. Por isso, qualquer trabalho sério de cultura começa pela alta gestão.",
  },
  {
    slug: "comunicacao-assertiva-na-lideranca",
    title: "Comunicação assertiva na liderança",
    excerpt:
      "Como dar feedback, alinhar expectativas e conduzir conversas difíceis sem perder o time.",
    date: "2026-04-12",
    author: "Michele Maffi",
    category: "Liderança",
    content:
      "A comunicação assertiva é uma das habilidades mais valorizadas em líderes hoje. Ela combina clareza, respeito e firmeza — e pode ser desenvolvida com prática.",
  },
  {
    slug: "rh-estrategico-para-pequenas-empresas",
    title: "RH estratégico para pequenas empresas",
    excerpt:
      "Você não precisa ter 500 funcionários para ter um RH que gera resultado. Veja como começar com pouco e crescer bem.",
    date: "2026-03-01",
    author: "Michele Maffi",
    category: "Gestão",
    content:
      "Pequenas empresas também podem (e devem) ter RH estratégico. O segredo é começar pelo essencial: clareza de cargos, processo de seleção estruturado e uma rotina mínima de feedback.",
  },
];

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);