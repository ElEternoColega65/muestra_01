import { createContext } from "react";
import { ProductEntity } from "../entities/productEntity";

export interface ProductContextType {
  handleCarousel: (index?: number) => void;
  handleCurrentImage: (index: number) => void;
  imageIndex: number;
  product: ProductEntity;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);


