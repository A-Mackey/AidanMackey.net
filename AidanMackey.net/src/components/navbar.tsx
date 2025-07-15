"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { ReactNode, useEffect, useState } from "react";

const leftBuffer = "[";
const rightBuffer = "]";

const navBarItems = [
  { href: "mailto:aidann.mackey@gmail.com", text: "Contact" },
];

export default function NavBar() {
  const { mobile } = useScreenSize();
  const [view, setView] = useState<ReactNode>(mobileNavbar());

  useEffect(() => {
    setView(mobile ? mobileNavbar() : desktopNavbar());
  }, [mobile]);

  return view;
}

function mobileNavbar() {
  return (
    <div className="flex justify-center pt-3 pb-3">
      <div className="flex justify-between bg-red-60 max-w-5xl w-screen ">
        <div className="pl-5 w-auto">
          <h3>
            <a href="/">[AM]</a>
          </h3>
        </div>
        <div className="pr-5">
          <ul className="flex gap-5">
            {navBarItems.map((item, index) => (
              <li key={index}>
                <h3>
                  <a href={item.href}>
                    {leftBuffer}
                    {item.text}
                    {rightBuffer}
                  </a>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function desktopNavbar() {
  return (
    <div className="flex justify-center pt-3 pb-3">
      <div className="flex justify-between bg-red-60 max-w-5xl w-screen ">
        <div className="pl-5 w-auto">
          <h3>
            <a href="">[AM]</a>
          </h3>
        </div>
        <div className="pr-5">
          <ul className="flex gap-5">
            {navBarItems.map((item, index) => (
              <li key={index}>
                <h3>
                  <a href={item.href}>
                    {leftBuffer}
                    {item.text}
                    {rightBuffer}
                  </a>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
