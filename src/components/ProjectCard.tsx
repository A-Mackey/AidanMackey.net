import { Project } from "@/app/sections/projects";
import FadeIn from "./fadeIn";
import useScreenSize from "@/hooks/useScreenSize";

export default function ProjectCard({
  title,
  description,
  buttonText,
  href,
  redirect,
  index,
}: Project & { index: number }) {
  const { mobile, mounted } = useScreenSize();
  const getIndex = () => index ?? 0;
  return (
    <FadeIn
      className={`${
        getIndex() % 3 && !(mounted && mobile) ? "w-1/2" : "w-full"
      } p-5 flex flex flex-col items-start gap-5`}
    >
      <div>
        <h2 className={`${mounted && mobile ? "text-2xl" : ""}`}>{title}</h2>
        <p className={`${mounted && mobile ? "text-base" : ""}`}>{description}</p>
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
