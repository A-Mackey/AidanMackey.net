import React from "react";

export default function Overlay({ children }: { children: any }) {
  return (
    <div className="absolute w-full h-auto bg-transparent">{children}</div>
  );
}
