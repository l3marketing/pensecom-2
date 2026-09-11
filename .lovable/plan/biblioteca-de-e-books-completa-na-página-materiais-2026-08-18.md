# Biblioteca de e-books completa na página Materiais

Trazer os 24 e-books do site atual (https://pensecom.com.br/site/ebooks-gratis/) para a página **Materiais**, com capa, título e descrição de cada um, mantendo o layout e o formulário de solicitação de acesso já existentes.

## O que muda

- A lista de materiais passa de 3 itens genéricos (Comunicação Assertiva, Checklist de Cultura, Guia RH Estratégico) para os 24 e-books reais do site.
- Cada card mantém: capa, categoria "E-book", título, descrição curta e link para a página de detalhe.
- Na página de detalhe, o botão/formulário continua sendo o CRM já embutido ("Solicitar acesso"), como no site atual.
- A seção "O que você vai encontrar" só aparece quando o material tiver tópicos cadastrados (os novos e-books entram só com descrição, igual ao site de origem).
- Menu e rodapé da página de origem são ignorados, conforme pedido.

## E-books incluídos

Diminua o TurnOver · 100 Perguntas para 1A1 · Cultura de Feedback · Guia para Feedback Aplicado à Avaliação de Desempenho · Como Construir um Ambiente de Trabalho Inclusivo · Gerações e Sua Relação no Ambiente de Trabalho · Apostas, Ansiedade e Absenteísmo · A Nova NR01 e a Importância do RH · RH Eficiente com o BPO · R&S: Como escolher os candidatos para sua Cultura Organizacional · Diversidade, equidade e inclusão no ambiente corporativo · Como acertar no R&S e evitar erros caros · Saúde mental como benefício estratégico · Burnout: como reconhecer os sinais · Cultura de Aprendizagem Contínua · Setembro Amarelo · TraduRH · Gestão Geracional · Cartilha Outubro Rosa · Endomarketing & Cultura · Cartilha Novembro Azul · Celebrações que Conectam · Cartilha Janeiro Branco · Equidade de Gênero no Mercado de Trabalho · Comunicação Assertiva pela Liderança · A revolução 50+ no Mercado

## Detalhes técnicos

- `src/lib/materiais.ts`: substituir o array `materiais` pelos itens extraídos; `highlights` passa a ser opcional (`highlights?: string[]`); `cover` aponta para a URL da imagem hospedada em pensecom.com.br (mesma imagem usada hoje no site). O e-book "Comunicação Assertiva pela Liderança" reaproveita a capa local já existente.
- `src/routes/materiais.$slug.tsx`: renderizar a lista de destaques apenas se `material.highlights?.length`.
- `src/routes/materiais.tsx`: sem mudança estrutural; o grid de 3 colunas já comporta a lista maior (opcional: ajuste leve de espaçamento).
- Slugs gerados a partir dos títulos (ex.: `diminua-o-turnover`), mantendo as rotas `/materiais/:slug` funcionando.
