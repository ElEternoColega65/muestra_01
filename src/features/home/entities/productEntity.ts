
export interface ProductEntity {
  title: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
  platform: string;
  platformEdition: string;
  pathName: string;
  textPrevPrice: string;
  productId: string;
  path: string;
  mainTitle?: string;
  mainDescription?: string;
  content?: {
    title: string;
    text: string[];
    images: [{ url: string }]
  },
  description: {
    main: string;
    modes: {
      title: string;
      text: string;
    }[]
  },
  screens: { url: string }[];
  publisher: string;
  maker: string;
  franchise: string;
  genres: string[];
  images: string[];
  techInfos: {
    platform: string;
    maker: string;
    genres: string[];
    voiceLanguages: string[];
    textLanguages: string[];
    region: string;
    pegi: number;
  };
}