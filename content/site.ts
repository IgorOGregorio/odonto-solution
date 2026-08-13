export const siteConfig = {
  name: "Odonto Solution",
  subtitle: "Clínica Odontológica",
  tagline: "Atuamos em todas as áreas da Odontologia",
  description:
    "Clínica odontológica em Itajubá-MG. Implantes, botox, pediatria, clareamento e muito mais. Agende sua consulta pelo WhatsApp.",
  professional: {
    name: "Dra. Jady Musa",
    credentials: ["EPAO 11644", "CROMG 59178"],
  },
  whatsapp: {
    phone: "5535999876540",
    display: "(35) 99987-6540",
    message: "Olá! Quero agendar uma consulta.",
    ctaLabel: "Falar no WhatsApp",
  },
  scheduling: {
    url: "https://agenda.link/online_scheduling/107274",
    ctaLabel: "Agendar online",
  },
  hours: {
    weekdays: "Segunda a Sexta, das 9h às 18h",
    saturday: "Sábado, das 9h às 12h",
    full: "Segunda a Sexta, das 9h às 18h · Sábado, das 9h às 12h",
  },
  social: {
    instagram: "https://www.instagram.com/odonto.solution/",
    tiktok: "https://www.tiktok.com/@odonto.solution",
  },
  address: {
    street: "Rua Miguel Viana, 76, Comércio",
    neighborhood: "Morro Chic",
    city: "Itajubá",
    state: "MG",
    cep: "37500-080",
    full: "Rua Miguel Viana, 76, Comércio — Morro Chic, Itajubá - MG, CEP 37500-080",
    mapsQuery:
      "Rua+Miguel+Viana,+76,+Morro+Chic,+Itajubá+-+MG,+37500-080",
  },
  cnpj: "51.595.834/0001-28",
  logo: "/logo.png",
  heroImage: "/images/hero.jpg",
  nav: [
    { label: "Especialidades", href: "/#servicos" },
    { label: "Resultados", href: "/#resultados" },
    { label: "Clínica", href: "/#sobre" },
    { label: "Agendamento", href: "/#agendamento" },
    { label: "Masterclass", href: "/masterclass" },
  ],
  gallery: [
    {
      src: "/images/gallery/reabilitacao-oral.jpg",
      alt: "Reabilitação oral — antes e depois",
      caption: "Devolver a liberdade de ser quem você é",
    },
    {
      src: "/images/gallery/botox-pes-de-galinha.jpg",
      alt: "Botox — pés de galinha",
      caption: "Toxina botulínica — pés de galinha",
    },
    {
      src: "/images/highlights/botox-testa.jpg",
      alt: "Botox — testa",
      caption: "Toxina botulínica — testa",
    },
    {
      src: "/images/gallery/resultado-01.jpg",
      alt: "Resultado clínico",
      caption: "Transformação de sorriso",
    },
    {
      src: "/images/gallery/resultado-02.jpg",
      alt: "Resultado clínico",
      caption: "Caso clínico",
    },
    {
      src: "/images/gallery/resultado-04.jpg",
      alt: "Resultado clínico",
      caption: "Estética dental",
    },
    {
      src: "/images/gallery/resultado-06.jpg",
      alt: "Resultado clínico",
      caption: "Reabilitação estética",
    },
    {
      src: "/images/gallery/resultado-07.jpg",
      alt: "Resultado clínico",
      caption: "Sorriso renovado",
    },
    {
      src: "/images/gallery/resultado-08.jpg",
      alt: "Resultado clínico",
      caption: "Resultado clínico",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
