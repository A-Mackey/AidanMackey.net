"use client";

import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";

const leftBuffer = "[";
const rightBuffer = "]";

const navBarItems = [
  { href: "http://raycast.aidanmackey.net", text: "Raycast" },
  { href: "mailto:aidann.mackey@gmail.com", text: "Contact" },
];

export default function NavBar() {
  const { mobile, mounted } = useScreenSize();

  if (!mounted) {
    return desktopNavbar();
  }

  return mobile ? mobileNavbar() : desktopNavbar();
}

function mobileNavbar() {
  return (
    <div className="flex justify-center pt-3 pb-3">
      <div className="flex justify-between bg-red-60 max-w-5xl w-screen ">
        <div className="pl-5 w-auto">
          <h3>
            <Link href="/">[AM]</Link>
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
