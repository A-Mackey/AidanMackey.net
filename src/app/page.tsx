"use client";

import React from "react";
import Overlay from "@/components/overlay";
import NavBar from "@/components/navbar";
import Landing from "./sections/landing";
import AboutMe from "./sections/aboutMe";
import Experiences from "./sections/experiences";
import Projects from "./sections/projects";
import TwoPartFooter from "@/components/twoPartFooter";
import RibbonFooter from "@/components/ribbonFooter";

export default function Home() {
  return (
    <div className={`min-h-screen bg-background`}>
      <Overlay>
        <NavBar />
      </Overlay>
      <main className="pt-10 h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Landing />
        <AboutMe />
        <Experiences />
        <Projects />
      </main>
      <footer>
        <TwoPartFooter />
        <RibbonFooter />
      </footer>
    </div>
  );
}
