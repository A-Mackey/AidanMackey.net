"use client";

import FadeIn from "@/components/fadeIn";
import useScreenSize from "@/hooks/useScreenSize";

export default function AboutMe() {
  const { mobile, mounted } = useScreenSize();

  return (
    <div
      className={`flex justify-center items-center ${
        mounted && mobile && "px-8"
      } w-screen h-[90vh]`}
    >
      <FadeIn className="w-[42rem] max-w-screen">
        <h1 className={`text-textAlternative ${mounted && mobile && "text-3xl"}`}>
          {"<About_Me/>"}
        </h1>
        <p className={`${mounted && mobile && "text-lg"}`}>
          {`After 6 years of software developer experience
          and 4 years at Santa Clara University, I have
          been able to work at many different companies
          including Amazon, INRIX, my own startup, and
          many different projects.`}
        </p>
      </FadeIn>
    </div>
  );
}
