import { siteConfig } from "@/content/site";

export type TeamMember = {
  name: string;
  credentials: readonly string[];
  role: string;
  photos: readonly string[];
  featured?: boolean;
};

export const team: TeamMember[] = [
  {
    name: siteConfig.professional.name,
    credentials: siteConfig.professional.credentials,
    role: "Responsável técnica",
    featured: true,
    photos: [
      "/images/jady/jady-02.jpeg",
      "/images/jady/jady-04.jpeg",
      "/images/jady/jady-05.jpeg",
    ],
  },
  {
    name: "Administrativo",
    credentials: [],
    role: "Organização do fluxo clínico e suporte ao dia a dia da clínica",
    photos: ["/images/team/web/team-15.jpg"],
  },
  {
    name: "Especialista clínico",
    credentials: [],
    role: "Atendimento clínico e execução dos procedimentos indicados",
    photos: ["/images/team/web/team-24.jpg"],
  },
  {
    name: "Nossa equipe",
    credentials: [],
    role: "Profissionais clínicos e administrativos trabalhando juntos por você",
    photos: ["/images/team/web/team-29.jpg"],
  },
];

export const structure = {
  heading: "Equipe e estrutura",
  intro:
    "Espaço completo em Itajubá, com equipamentos de alta qualidade e gente à disposição do primeiro contato ao retorno.",
  points: [
    {
      title: "Espaço completo",
      body: "Fluxo pensado para te receber, tratar e acompanhar no mesmo lugar — sem correria entre salas improvisadas.",
    },
    {
      title: "Equipamentos de alta qualidade",
      body: "Tecnologia atual para diagnóstico e tratamento. A indicação é feita na consulta, com o que o caso pede.",
    },
    {
      title: "Especialistas e assistentes",
      body: "Equipe clínica à disposição, sob responsabilidade técnica da Dra. Jady — cada etapa com quem precisa estar.",
    },
    {
      title: "Recepção sempre presente",
      body: "Acolhimento o expediente inteiro: orientação, agendamento e quem te recebe na chegada.",
    },
  ],
  images: {
    logo: siteConfig.logo,
    hero: siteConfig.heroImage,
  },
} as const;
