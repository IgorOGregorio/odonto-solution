export type TreatmentTag = "implantes" | "harmonizacao" | "clareamento";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  treatment?: TreatmentTag;
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery/reabilitacao-oral.png",
    alt: "Reabilitação oral — antes e depois",
    caption: "Devolver a liberdade de ser quem você é",
    treatment: "implantes",
  },
  {
    src: "/images/gallery/implante-01.jpg",
    alt: "Reabilitação oral completa — antes e depois",
    caption: "Reabilitação oral com implantes",
    treatment: "implantes",
  },
  {
    src: "/images/gallery/implante-02.jpg",
    alt: "Implante dentário — antes e depois",
    caption: "Implante e coroa — antes e depois",
    treatment: "implantes",
  },
  {
    src: "/images/gallery/protese-01.jpg",
    alt: "Prótese dentária — antes e depois",
    caption: "Prótese e reabilitação estética",
    treatment: "implantes",
  },
  {
    src: "/images/gallery/facetas-01.jpg",
    alt: "Facetas em processo de reabilitação",
    caption: "Em processo de reabilitação",
    treatment: "implantes",
  },
  {
    src: "/images/gallery/harmonizacao-01.jpg",
    alt: "Harmonização facial — melhora de perfil",
    caption: "Melhora de perfil",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/harmonizacao-02.jpg",
    alt: "Harmonização facial — resultado clínico",
    caption: "Harmonização facial",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/harmonizacao-03.jpg",
    alt: "Harmonização facial — caso clínico",
    caption: "Resultado de harmonização",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/preenchimento-labial-01.jpg",
    alt: "Preenchimento labial — resultado",
    caption: "Preenchimento labial",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/preenchimento-labial-02.jpg",
    alt: "Preenchimento labial — caso clínico",
    caption: "Lábios com naturalidade",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/preenchimento-labial-03.jpg",
    alt: "Preenchimento labial — antes e depois",
    caption: "Preenchimento labial feminino",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/preenchimento-labial-04.jpg",
    alt: "Preenchimento labial — resultado clínico",
    caption: "Volume e contorno labial",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/preenchimento-labial-masculino-01.jpg",
    alt: "Preenchimento labial masculino — resultado",
    caption: "Preenchimento labial masculino",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/preenchimento-labial-masculino-02.jpg",
    alt: "Preenchimento labial masculino — caso clínico",
    caption: "Harmonização labial masculina",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/suporte-labial-01.jpg",
    alt: "Suporte labial — harmonização facial",
    caption: "Suporte labial",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/perfiloplastia-01.jpg",
    alt: "Perfiloplastia — resultado clínico",
    caption: "Perfiloplastia",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/perfiloplastia-02.jpg",
    alt: "Perfiloplastia — caso clínico",
    caption: "Contorno e perfil facial",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/botox-01.jpg",
    alt: "Botox — testa e linhas de expressão",
    caption: "Toxina botulínica — testa",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/botox-02.jpg",
    alt: "Botox — resultado clínico",
    caption: "Toxina botulínica",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/botoz-03.jpg",
    alt: "Botox — linhas de expressão",
    caption: "Suavização de linhas",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/botox-04.jpg",
    alt: "Botox — antes e depois",
    caption: "Resultado de botox",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/botox-05.jpg",
    alt: "Botox — caso clínico",
    caption: "Harmonização com toxina botulínica",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/botox-pes-de-galinha.jpg",
    alt: "Botox — pés de galinha",
    caption: "Toxina botulínica — pés de galinha",
    treatment: "harmonizacao",
  },
  {
    src: "/images/highlights/botox-testa.jpg",
    alt: "Botox — testa",
    caption: "Toxina botulínica — testa",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/resultado-01.jpg",
    alt: "Clareamento dental — resultado",
    caption: "Clareamento dental",
    treatment: "clareamento",
  },
  {
    src: "/images/gallery/resultado-02.jpg",
    alt: "Resultado clínico",
    caption: "Transformação de sorriso",
    treatment: "clareamento",
  },
  {
    src: "/images/gallery/resultado-04.jpg",
    alt: "Reabilitação oral — antes e depois",
    caption: "Reabilitação oral completa",
    treatment: "implantes",
  },
  {
    src: "/images/gallery/resultado-06.jpg",
    alt: "Clareamento dental — evolução em etapas",
    caption: "Evolução do clareamento",
    treatment: "clareamento",
  },
  {
    src: "/images/gallery/resultado-07.jpg",
    alt: "Odontopediatria — evidenciador bucal",
    caption: "Odontopediatria com cuidado",
  },
  {
    src: "/images/gallery/resultado-08.jpg",
    alt: "Micropigmentação labial",
    caption: "Estética labial",
    treatment: "harmonizacao",
  },
  {
    src: "/images/gallery/aparelho-01.jpg",
    alt: "Aparelho ortodôntico — sorriso com elásticos",
    caption: "Ortodontia com personalidade",
  },
  {
    src: "/images/gallery/aparelho-02.jpg",
    alt: "Aparelho ortodôntico — tratamento em andamento",
    caption: "Aparelho ortodôntico",
  },
  {
    src: "/images/gallery/aparelho-03.jpg",
    alt: "Aparelho ortodôntico — acompanhamento",
    caption: "Tratamento ortodôntico",
  },
  {
    src: "/images/gallery/pediatria-01.jpg",
    alt: "Odontopediatria — evidenciador bucal",
    caption: "Odontopediatria com cuidado",
  },
  {
    src: "/images/gallery/pacientes-especiais-01.jpg",
    alt: "Atendimento a pacientes especiais",
    caption: "Cuidado para todos os pacientes",
  },
];

export function galleryByTreatment(tag: TreatmentTag): GalleryItem[] {
  return gallery.filter((item) => item.treatment === tag);
}
