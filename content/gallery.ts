export type TreatmentTag = "implantes" | "harmonizacao" | "clareamento";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  treatment?: TreatmentTag;
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery/reabilitacao-oral.jpg",
    alt: "Reabilitação oral — antes e depois",
    caption: "Devolver a liberdade de ser quem você é",
    treatment: "implantes",
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
];

export function galleryByTreatment(tag: TreatmentTag): GalleryItem[] {
  return gallery.filter((item) => item.treatment === tag);
}
