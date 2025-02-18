export interface ProductEntity {
  productId: string;
  title: string;
  imageUrl: string;
  price: number;
  offerPrice?: number;
  path: string;
  platformEdition: string;
  textPrevPrice: string;
  publisher?: string;
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
  screens: {
    url640: string;
    url1920: string;
  }[];

  techInfos: {
    platform: string;
    franchise?: string;
    maker: string;
    genres: string[];
    developer?: string;
    voiceLanguages?: string[];
    textLanguages?: string[];
    imported?: boolean;
    region: string;
    pegi: string;
  };
}