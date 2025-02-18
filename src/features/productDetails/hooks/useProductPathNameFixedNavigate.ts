import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function useProductPathNameFixedNavigate(enabled: boolean, toNavigate: string) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!enabled) return;
    navigate(toNavigate, { replace: true });
    return;
  }, [enabled, toNavigate, navigate]);

  return null;
}