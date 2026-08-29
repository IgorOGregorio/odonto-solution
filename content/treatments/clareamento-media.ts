import type { GalleryItem } from "@/content/gallery";
import type { TreatmentMediaItem } from "@/components/treatments/treatment-videos";

export const clareamentoPhotos: GalleryItem[] = [
  {
    src: "/images/clareamento/fotos/10-outubro-01.jpg",
    alt: "Clareamento em consultório — avaliação clínica",
    caption: "Avaliação antes do protocolo",
    treatment: "clareamento",
  },
  {
    src: "/images/gallery/resultado-06.jpg",
    alt: "Clareamento dental — evolução em 3 etapas",
    caption: "Evolução do clareamento — setembro a outubro",
    treatment: "clareamento",
  },
  {
    src: "/images/clareamento/fotos/10-outubro-12.jpg",
    alt: "Resultado após 1ª sessão de clareamento",
    caption: "1ª sessão — sorriso mais claro",
    treatment: "clareamento",
  },
  {
    src: "/images/clareamento/fotos/16-outubro-01.jpg",
    alt: "Resultado após 2ª sessão de clareamento",
    caption: "2ª sessão — resultado final",
    treatment: "clareamento",
  },
  {
    src: "/images/gallery/resultado-02.jpg",
    alt: "Clareamento dental — antes e depois",
    caption: "Antes e depois do clareamento",
    treatment: "clareamento",
  },
  {
    src: "/images/gallery/resultado-01.jpg",
    alt: "Clareamento dental — resultado em consultório",
    caption: "Resultado supervisionado",
    treatment: "clareamento",
  },
];

export const clareamentoProcedure: TreatmentMediaItem[] = [
  {
    src: "/images/clareamento/videos/aplicacao-gel.mp4",
    title: "Aplicação do gel clareador",
    kind: "video",
  },
  {
    src: "/images/clareamento/videos/remocao-gel.mp4",
    title: "Remoção do gel",
    kind: "video",
  },
  {
    src: "/images/clareamento/fotos/13-novembro-resultado.jpg",
    title: "Resultado",
    kind: "image",
    alt: "Clareamento dental — resultado após sessão",
  },
];

export function clareamentoPageGallery(): GalleryItem[] {
  return clareamentoPhotos;
}
