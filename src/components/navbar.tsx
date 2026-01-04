"use client";

import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";

const leftBuffer = "[";
const rightBuffer = "]";

const navBarItems = [
  { href: "/ai-dan/mnist", text: "Ai-Dan" },
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
    <div className="flex justify-center pt-3 pb-3 w-full">
      <div className="flex justify-between max-w-5xl w-full px-4">
        <h3>
          <Link href="/">[AM]</Link>
        </h3>
        <ul className="flex gap-3">
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
  );
}

function desktopNavbar() {
  return (
    <div className="flex justify-center pt-3 pb-3 w-full">
      <div className="flex justify-between max-w-5xl w-full px-5">
        <h3>
          <Link href="/">[AM]</Link>
        </h3>
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
  );
}
