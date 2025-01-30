import React from "react";
import Overlay from "@/components/overlay";
import NavBar from "@/components/navbar";
import Landing from "./sections/landing";
import TwoPartFooter from "@/components/twoPartFooter";
import AboutMe from "./sections/aboutMe";
import Experiences from "./sections/experiences";

export default function Home() {
  return (
    <div className={`min-h-screen w-screen bg-background`}>
      <Overlay>
        <NavBar />
      </Overlay>
      <main className="pt-10 h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Landing />
        <AboutMe />
        <Experiences />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <TwoPartFooter />
      </footer>
    </div>
  );
}
