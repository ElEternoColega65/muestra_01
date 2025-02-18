import { useState } from "react";

export default function useDetailsCategory() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const handleCategoryIndex = (index: number) => {
    setCategoryIndex(index);
  }

  return {
    categoryIndex,
    handleCategoryIndex
  }
}