import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const previousValue = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = previousValue;
    };
  }, []);
}
