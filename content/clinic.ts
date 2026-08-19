import { siteConfig } from "@/content/site";

export type TeamMember = {
  name: string;
  credentials: readonly string[];
  role: string;
};

export const team: TeamMember[] = [
  {
    name: siteConfig.professional.name,
    credentials: siteConfig.professional.credentials,
    role: "Responsável técnica",
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
