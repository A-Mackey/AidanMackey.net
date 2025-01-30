"use client";

import React, { useEffect, useRef, useState } from "react";

export interface FadeInProps {
  children: any;
  duration?: number;
  className?: string;
  trigger?: boolean;
}

export default function FadeIn({
  children,
  duration = 200,
  className = "",
  trigger = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && trigger) {
          setTimeout(() => {
            setIsVisible(true);
          }, duration);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [duration, trigger]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }
    `}
    >
      {children}
    </div>
  );
}
