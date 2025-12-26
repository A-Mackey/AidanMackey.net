"use client";

import FadeIn from "@/components/fadeIn";
import useScreenSize from "@/hooks/useScreenSize";

export default function Landing() {
  const { mobile, mounted } = useScreenSize();

  if (!mounted) {
    return desktopLanding();
  }

  return mobile ? mobileLading() : desktopLanding();
}

function mobileLading() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <FadeIn duration={250}>
          <h1>{"<Aidan Mackey/>"}</h1>
        </FadeIn>
        <FadeIn duration={1000}>
          <p className="text-textAlternative text-xs">
            {"Engineer, Climber, AI Enthusiast"}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

function desktopLanding() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <FadeIn duration={250}>
          <h1>{"<Aidan Mackey/>"}</h1>
        </FadeIn>
        <FadeIn duration={1000}>
          <p className="text-textAlternative">
            {"Engineer, Climber, AI Enthusiast"}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
