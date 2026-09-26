export type ClareamentoPromo = {
  priceLabel: string;
};

export const clareamento = {
  title: "Clareamento Dental",
  subtitle: "Seu sorriso pode ficar até 3 tons mais branco com segurança.",
  claim: "Seu sorriso pode ficar até 3 tons mais branco com segurança.",
  image: "/images/clareamento/fotos/16-outubro-01.jpg",
  whatsappMessage:
    "Olá! Gostaria de agendar uma avaliação de Clareamento Dental na Odonto Solution.",
  types: {
    title: "Qual tipo de clareamento é ideal para mim?",
    body: "Na Odonto Solution, trabalhamos com clareamento em consultório e protocolo caseiro supervisionado.\n\nApós uma avaliação, definimos a opção mais adequada para o seu sorriso e para a sua rotina.\n\nTudo é planejado de forma individualizada para alcançar um sorriso mais claro, harmônico e natural.",
  },
  duration: {
    title: "Quanto tempo dura o clareamento?",
    body: "O clareamento não é permanente, mas o resultado pode ser mantido por bastante tempo com os cuidados adequados.\n\nDurante o tratamento, você recebe todas as orientações necessárias para preservar a luminosidade do sorriso e prolongar o resultado.",
  },
  whoCan: {
    title: "Quem pode fazer clareamento?",
    body: "O clareamento pode ser indicado para muitas pessoas que desejam um sorriso mais claro e iluminado.\n\nAntes de iniciar, realizamos uma avaliação para verificar a saúde dos dentes e gengivas e definir o protocolo mais adequado para o seu caso.\n\nCada sorriso é único — por isso, o tratamento é planejado de forma personalizada.",
  },
  howItWorks: {
    title: "Como funciona",
    body: "Tudo começa pela avaliação clínica. Depois definimos o protocolo — consultório, caseiro supervisionado ou combinação — e acompanhamos as sessões com orientações de cuidado e manutenção.",
    steps: [
      {
        title: "Avaliação",
        description:
          "Exame clínico, conversa sobre expectativa e verificação de contraindicações.",
      },
      {
        title: "Protocolo",
        description:
          "Escolha entre clareamento em consultório, caseiro supervisionado ou combinação dos dois.",
      },
      {
        title: "Sessões",
        description:
          "Aplicação supervisionada com acompanhamento da equipe conforme o plano definido.",
      },
      {
        title: "Manutenção",
        description:
          "Orientações de hábitos e cuidados para prolongar o resultado ao longo do tempo.",
      },
    ],
  },
  promo: null as ClareamentoPromo | null,
} as const;
