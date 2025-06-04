"use client";

import ExperienceCard, {
  ExperienceCardProps,
} from "@/components/experienceCard";
import FadeIn from "@/components/fadeIn";
import useScreenSize from "@/hooks/useScreenSize";

export default function Experiences() {
  const { mobile } = useScreenSize();
  const experiences: ExperienceCardProps[] = [
    {
      img: "amazon-icon.svg",
      company: "Amazon",
      role: "Software Development Engineer II",
      startDate: "July 2023",
      endDate: "Present",
      bulletPoints: [
        "Working in Personalization as a full-stack engineer",
        "One of the key engeineers in the development and expansion of Amazon Family",
        "Grew exposure to Amazon Family to millions of customers a day, empowering customers to share prime benefits within their household",
      ],
    },
    {
      img: "amazon-icon.svg",
      company: "Amazon",
      role: "Software Engineer Intern",
      startDate: "June 2022",
      endDate: "September 2022",
      bulletPoints: [
        "Worked in Personalization to integrate profiles on Amazon.com and give a more unique user experience.",
        "Incorporated profiles into an internal tool that creates and optimizes recommendation widgets.",
        "Built back-end in Java and deployed logic using AWS Lambda and API Gateway to communicate with a ReactJS webpage.",
      ],
    },
    {
      img: "inrix-icon.svg",
      company: "INRIX",
      role: "SDE & Product Manager Intern",
      startDate: "June 2021",
      endDate: "September 2021",
      bulletPoints: [
        "Developed a live-updating website that visualizes traffic data to provide trend insights.",
        "Worked closely with INRIX management regarding product direction, scope, and timeline.",
        "Developed the back-end REST API using .NET framework in C#",
      ],
    },
    {
      img: "inrix-icon.svg",
      company: "INRIX",
      role: "Software Development Engineer Intern",
      startDate: "June 2021",
      endDate: "September 2021",
      bulletPoints: [
        "Developed a live-updating website that visualizes traffic data to provide trend insights.",
        "Worked closely with INRIX management regarding product direction, scope, and timeline.",
        "Developed the back-end REST API using .NET framework in C#",
      ],
    },
    {
      img: "unknown-icon.svg",
      company: "Panterix",
      role: "Co-Founder and Software Development Engineer",
      startDate: "February 2022",
      endDate: "June 2022",
      bulletPoints: [
        "Started a business from a hackathon project with a product that ranks roads on their safety.",
        "Participated in undergraduate research and published a paper at the Good Techs conference.",
        "Developed the companies products, website, and back-end API's.",
      ],
    },
  ];

  return (
    <div
      className={`flex items-center justify-center w-screen min-h-screen ${
        mobile && "pl-2 pr-8"
      }`}
    >
      <div className="flex flex-col max-w-5xl">
        <FadeIn>
          <h1
            className={`text-textAlternative ${
              mobile ? "text-3xl pl-6" : "px-5"
            }`}
          >
            {"<Experiences/>"}
          </h1>
        </FadeIn>
        <ul>
          {experiences.map((e, index: number) => {
            return (
              <li key={index}>
                <FadeIn>
                  <ExperienceCard {...e} />
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
