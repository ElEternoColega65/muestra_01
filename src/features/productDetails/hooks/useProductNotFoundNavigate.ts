import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function useProductNotFoundNavigate(enabled: boolean, isError404 = false) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!enabled) return;
    navigate("/error", { replace: true, state: { isError404 } });
    return;
  }, [enabled, isError404, navigate]);

  return null;
}