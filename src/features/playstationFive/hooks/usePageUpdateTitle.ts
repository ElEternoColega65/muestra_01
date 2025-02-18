import { useEffect } from "react";

export default function usePageUpdateTitle(enabled: boolean, title: string) {

  useEffect(() => {
    if (!enabled) return;
    document.title = title;
  }, [enabled, title]);

  return null;
}