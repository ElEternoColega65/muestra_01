import { useState } from "react";

export default function useMobileModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileModal = () => {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    handleMobileModal
  }
}