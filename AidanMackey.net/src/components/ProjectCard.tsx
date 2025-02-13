import { Project } from "@/app/sections/projects";
import FadeIn from "./fadeIn";
import useScreenSize from "@/hooks/useScreenSize";

export default function ProjectCard({
  title,
  description,
  buttonText,
  href,
  index,
}: Project) {
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
          href={href}
          target="_blank"
          className={`text-textAlternative hover:text-text`}
        >
          {"> " + buttonText}
        </a>
      </button>
    </FadeIn>
  );
}
