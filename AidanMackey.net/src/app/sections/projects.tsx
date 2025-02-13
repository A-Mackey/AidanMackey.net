"use client";

import FadeIn from "@/components/fadeIn";
import ProjectCard from "@/components/ProjectCard";
import useScreenSize from "@/hooks/useScreenSize";

export interface Project {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  index?: number;
}

export default function Landing() {
  const { mobile } = useScreenSize();
  const projects: Project[] = [
    {
      title: "Ai-Dan",
      description:
        "Developed an LLM trained on data about me to answer any questions for users visiting this website!",
      buttonText: "Website",
      href: "http://aidanmackey.net:8080/",
    },
    {
      title: "Research Paper",
      description:
        "Published a paper at the Good Techs conferance in Belgium with a professor at Santa Clara University",
      buttonText: "ACM Digital Library",
      href: "https://dl.acm.org/doi/abs/10.1145/3411170.3411269",
    },
    {
      title: "Dangerous Roads",
      description:
        "Website developed while working at INRIX which gives insights on the most dangerous roads globally.",
      buttonText: "Website",
      href: "https://inrix.com/most-dangerous-roads/",
    },
    {
      title: "Inspirometer",
      description:
        "Collaborated with a team of engineers to develop a device and app that can measure and track lung capacity. Developed mobile app using React Native to allow for device connection and give users they historical usage data.",
      buttonText: "GitHub",
      href: "https://github.com/A-Mackey/Inspirometer-Mobile",
    },
    {
      title: "IG Captions",
      description:
        "Developed a social media caption generation tool using React with a back-end in the Spring Boot Java API framework.",
      buttonText: "GitHub",
      href: "https://github.com/A-Mackey/Caption-Generator-Java-REST-API",
    },
    {
      title: "Raycasting Engine",
      description:
        "Built a raycasting game engine using WebGL in Javascript and put the application onto a webserver and deployed using Docker",
      buttonText: "Website",
      href: "http://aidanmackey.net:2080/",
    },
    {
      title: "Hack for Humanity 2021",
      description:
        'Created a website with a team that empowers low-income households and students to find cost-efficient recipes and order from local grocery stores or pickup. Won award for "Best use of Microsoft Azure".',
      buttonText: "GitHub",
      href: "https://github.com/A-Mackey/QuickBites",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-screen max-w-5xl">
        <FadeIn>
          <h2
            className={`px-5 text-textAlternative ${
              mobile ? "text-3xl" : "text-5xl"
            }`}
          >
            {"<Projects/>"}
          </h2>
        </FadeIn>
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
