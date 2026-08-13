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
  heading: "Estrutura pensada para o seu atendimento",
  body: "A clínica em Itajubá reúne acolhimento e o que já usamos no dia a dia: a identidade da Odonto Solution e o ambiente que você vê nas fotos atuais da fachada e da marca. Sem tour inventado — o espaço é o mesmo que recebe quem chega para avaliação.",
  images: {
    logo: siteConfig.logo,
    hero: siteConfig.heroImage,
  },
} as const;
