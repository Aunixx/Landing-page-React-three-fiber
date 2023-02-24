import { StaticImageData } from "next/image";

export interface mpDetailProps {
  name: string;
  model: string;
  rarity: string;
  set: any;
  desc: string;
  price: number | string;
  stats: any;
  strengthNum: number | string;
  strengthTitle: string;
  strengthDesc: JSX.Element;
  carStats: any;
  features: any;
  img: string | StaticImageData;
  statsImg?: any;
  videoImg?: any;
  videoUrl?: any;
  tvLink?: string;
}
