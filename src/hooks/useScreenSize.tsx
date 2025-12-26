"use client";

import { useEffect, useState } from "react";

export interface windowSize {
  width: number;
  height: number;
}

export default function useScreenSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: 0,
    height: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, mobile: windowSize.width < 640, mounted };
}
