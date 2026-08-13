// REVIEW: rascunhos em 1ª pessoa para staging. Trocar pelos depoimentos
// autorizados da cliente. Sem sobrenomes e sem fotos inventadas.

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fui muito bem acolhida e saí com um plano claro para o meu tratamento.",
    name: "Ana",
  },
  {
    quote:
      "Fiquei tranquila durante o procedimento. A equipe me explicou cada passo com calma.",
    name: "Carlos",
  },
  {
    quote:
      "Eu tinha receio de começar, mas me senti cuidada do primeiro contato até o retorno.",
    name: "Marina",
  },
];
