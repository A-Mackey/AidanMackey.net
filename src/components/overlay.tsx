import React, { ReactNode } from "react";

export default function Overlay({ children }: { children: ReactNode }) {
  return <div className="absolute w-full h-auto bg-green">{children}</div>;
}
