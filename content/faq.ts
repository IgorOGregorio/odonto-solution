import { siteConfig } from "@/content/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Qual o horário de funcionamento?",
    answer: siteConfig.hours.full,
  },
  {
    question: "A clínica atende convênio?",
    answer:
      "O atendimento é particular. Se você usa convênio ou pretende solicitar reembolso, fale conosco no WhatsApp para orientar a documentação — não listamos convênios aqui.",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Fazemos uma avaliação, conversamos sobre a sua queixa e indicamos um plano. Não há compromisso de realizar procedimento no mesmo dia.",
  },
  {
    question: "Os procedimentos doem?",
    answer:
      "Cuidamos do conforto em cada etapa e usamos anestesia quando indicado. A sensação varia de pessoa para pessoa; não prometemos “zero dor”.",
  },
  {
    question: "Tem estacionamento / como chegar?",
    answer: `Estamos no ${siteConfig.address.neighborhood}, em ${siteConfig.address.city}-${siteConfig.address.state} (${siteConfig.address.street}). Veja o mapa em Localização ou chame no WhatsApp para um caminho mais simples.`,
  },
  {
    question: "Como agendar?",
    answer: `O caminho principal é o WhatsApp (${siteConfig.whatsapp.display}). Também é possível agendar online, se preferir.`,
  },
];

export const harmonizacaoFaq: FaqItem[] = [
  {
    question: "Quanto tempo dura o efeito do Botox?",
    answer:
      "Em geral, alguns meses. A duração varia conforme o metabolismo, a área tratada e o acompanhamento. Avaliamos o momento de um possível retoque na consulta.",
  },
  {
    question: "Quando posso voltar à rotina?",
    answer:
      "A maioria das pessoas retoma atividades leves no mesmo dia, com orientações simples (evitar deitar sobre a área e esforço intenso nas primeiras horas). O plano é combinado na avaliação.",
  },
  {
    question: "O resultado fica artificial?",
    answer:
      "O objetivo é suavizar marcas e manter a expressão. Dose e pontos são definidos após avaliação; não trabalhamos com promessa de transformação radical.",
  },
  {
    question: "Preenchimento labial e bioestimuladores são para todo mundo?",
    answer:
      "Não. Indicamos só depois de avaliar saúde, harmonia facial e expectativa. Se não for o momento, conversamos sobre alternativas.",
  },
];
