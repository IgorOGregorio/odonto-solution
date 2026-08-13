export type ClareamentoPromo = {
  priceLabel: string;
};

export const clareamento = {
  title: "Clareamento Dental",
  subtitle: "Seu sorriso pode ficar até 3 tons mais branco com segurança.",
  claim: "Seu sorriso pode ficar até 3 tons mais branco com segurança.",
  whatsappMessage:
    "Olá! Gostaria de agendar uma avaliação de Clareamento Dental na Odonto Solution.",
  types: {
    title: "Tipos de clareamento",
    body: "Trabalhamos com clareamento em consultório e com protocolo caseiro supervisionado. A escolha depende do exame clínico, da sensibilidade e do que faz sentido para a sua rotina.",
  },
  duration: {
    title: "Quanto dura",
    body: "O clareamento não é permanente. Hábitos (café, chá, vinho, cigarro) e o tempo influenciam a manutenção. Em consulta, alinhamos expectativa e cuidados para prolongar o resultado.",
  },
  whoCan: {
    title: "Quem pode fazer",
    body: "Em geral, pessoas com dentes e gengivas saudáveis, após avaliação. Gravidez, amamentação, restaurações escuras na frente do sorriso, sensibilidade intensa ou dentes muito desgastados podem contraindicar ou exigir outro caminho.",
  },
  promo: {
    priceLabel: "R$ 1.200",
  } satisfies ClareamentoPromo,
} as const;
