import { Project } from "@/app/sections/projects";
import FadeIn from "./fadeIn";
import useScreenSize from "@/hooks/useScreenSize";
import { redirect } from "next/dist/server/api-utils";

export default function ProjectCard({
  title,
  description,
  buttonText,
  href,
  redirect,
  index,
}: Project & { index: number }) {
  const { mobile } = useScreenSize();
  const getIndex = () => index ?? 0;
  return (
    <FadeIn
      className={`${
        getIndex() % 3 && !mobile ? "w-1/2" : "w-full"
      } p-5 flex flex flex-col items-start gap-5`}
    >
      <div>
        <h2 className={`${mobile ? "text-2xl" : ""}`}>{title}</h2>
        <p className={`${mobile ? "text-base" : ""}`}>{description}</p>
      </div>
      <button>
        <a
          href={href ?? href}
          target={redirect ? "_blank" : undefined}
          className={`text-textAlternative hover:text-text`}
        >
          {"> " + buttonText}
        </a>
      </button>
    </FadeIn>
  );
}
