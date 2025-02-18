import { useState } from "react"

export default function useProductCarousel() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleCarousel = (index?: number) => {
    if (typeof index === "number")
      setImageIndex(index);
    setIsCarouselOpen(!isCarouselOpen);
  }

  const handleCurrentImage = (index: number) => {
    setImageIndex(index);
  }

  return {
    isCarouselOpen,
    handleCarousel,
    handleCurrentImage,
    imageIndex
  }
}