"use client";

import { useEffect, useState } from "react";

export interface windowSize {
  width: number;
  height: number;
}

export default function useScreenSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: typeof window !== "undefined" ? window?.innerWidth : 0,
    height: typeof window !== "undefined" ? window?.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, mobile: windowSize.width < 640 };
}
