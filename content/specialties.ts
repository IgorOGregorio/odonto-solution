import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bone,
  Flower2,
  Layers,
  Leaf,
  ScanFace,
  Scissors,
  Smile,
  Sparkles,
  Spline,
  Stethoscope,
  Sun,
} from "lucide-react";

export type Specialty = {
  slug: string;
  label: string;
  blurb: string;
  whatsappMessage: string;
  href?: "/implantes" | "/clareamento" | "/harmonizacao-facial";
  icon: LucideIcon;
  image?: string | null;
  video?: string | null;
};

export const specialties: Specialty[] = [
  {
    slug: "implantes",
    label: "Implantes Dentários",
    blurb:
      "Reposição de dentes com planejamento individualizado para função e estética.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Implantes Dentários na Odonto Solution.",
    href: "/implantes",
    icon: Bone,
    image: "/images/highlights/implantes.jpg",
    video: "/images/highlights/facetas-reel.mp4",
  },
  {
    slug: "facetas",
    label: "Facetas em Resina e Porcelana",
    blurb:
      "Lâminas para harmonia do sorriso, com indicação após avaliação clínica.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Facetas em Resina e Porcelana na Odonto Solution.",
    icon: Sparkles,
  },
  {
    slug: "clareamento",
    label: "Clareamento Dental",
    blurb:
      "Clareamento supervisionado para um sorriso mais claro, com indicação segura.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Clareamento Dental na Odonto Solution.",
    href: "/clareamento",
    icon: Sun,
    image: "/images/clareamento/fotos/13-novembro-resultado.jpg",
    video: null,
  },
  {
    slug: "ortodontia",
    label: "Aparelho Ortodôntico",
    blurb:
      "Alinhamento e oclusão com acompanhamento periódico na clínica.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Aparelho Ortodôntico na Odonto Solution.",
    icon: Spline,
  },
  {
    slug: "endodontia",
    label: "Tratamento de Canal",
    blurb:
      "Tratamento endodôntico para preservar o dente e aliviar a dor quando indicado.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Tratamento de Canal na Odonto Solution.",
    icon: Activity,
  },
  {
    slug: "proteses",
    label: "Próteses Dentárias",
    blurb:
      "Próteses parciais ou totais para repor dentes e devolver mastigação.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Próteses Dentárias na Odonto Solution.",
    icon: Layers,
  },
  {
    slug: "periodontia",
    label: "Periodontia",
    blurb:
      "Cuidado com gengiva e osso de suporte, da prevenção ao tratamento.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Periodontia na Odonto Solution.",
    icon: Leaf,
  },
  {
    slug: "cirurgias",
    label: "Cirurgias Odontológicas",
    blurb:
      "Extrações e procedimentos cirúrgicos com avaliação prévia e orientação.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Cirurgias Odontológicas na Odonto Solution.",
    icon: Scissors,
  },
  {
    slug: "bucomaxilofacial",
    label: "Bucomaxilofacial",
    blurb:
      "Avaliação de casos que envolvem face, maxila e mandíbula, com encaminhamento quando necessário.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Bucomaxilofacial na Odonto Solution.",
    icon: ScanFace,
  },
  {
    slug: "dtm",
    label: "DTM e Dor Orofacial",
    blurb:
      "Acolhimento da dor na articulação e músculos da mastigação, sem promessa de cura imediata.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre DTM e Dor Orofacial na Odonto Solution.",
    icon: Smile,
  },
  {
    slug: "clinico-geral",
    label: "Clínico Geral",
    blurb:
      "Avaliação, prevenção e tratamentos de rotina para a saúde bucal do dia a dia.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre atendimento de Clínico Geral na Odonto Solution.",
    icon: Stethoscope,
  },
  {
    slug: "harmonizacao-facial",
    label: "Harmonização Facial",
    blurb:
      "Procedimentos faciais com critério clínico para suavizar marcas e valorizar traços.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Harmonização Facial na Odonto Solution.",
    href: "/harmonizacao-facial",
    icon: Flower2,
    image: "/images/gallery/resultado-08.jpg",
    video: null,
  },
];
