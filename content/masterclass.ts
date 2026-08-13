import { siteConfig } from "@/content/site";

export const masterclass = {
  learn: {
    title: "O que você vai aprender",
    items: [
      "Bases anatômicas e segurança na aplicação de toxina botulínica.",
      "Planejamento de preenchimento facial com critério clínico.",
      "Como conduzir avaliação, indicação e conversa com o paciente.",
    ],
  },
  forWhom: {
    title: "Para quem é",
    body: "Para cirurgiões-dentistas que desejam aprofundar harmonização facial com acompanhamento próximo, sem substituir a formação formal nem prometer domínio imediato de todas as técnicas.",
  },
  teacher: {
    title: "Quem é a professora",
    name: siteConfig.professional.name,
    credentials: siteConfig.professional.credentials,
    body: `${siteConfig.professional.name} é a responsável técnica da ${siteConfig.name} (${siteConfig.professional.credentials.join(" · ")}). A Masterclass parte da prática clínica da professora em toxina botulínica e preenchimento facial avançado.`,
  },
  differentials: {
    title: "Diferenciais",
    items: [
      "Turma enxuta, com espaço para dúvidas.",
      "Conteúdo alinhado ao que a clínica pratica no dia a dia.",
      "Lista de prioridade: você recebe datas, valores e condições quando as inscrições abrirem.",
    ],
  },
  certificate: {
    title: "Certificado",
    body: "Participantes concluintes recebem certificado de participação. Carga horária e critérios de emissão são informados na abertura das inscrições.",
  },
} as const;
