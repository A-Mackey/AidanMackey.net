import ExperienceCard, {
  ExperienceCardProps,
} from "@/components/experienceCard";
import FadeIn from "@/components/fadeIn";

export default function experiences() {
  const experiences: ExperienceCardProps[] = [
    {
      img: "amazon-icon.svg",
      company: "Amazon",
      role: "Software Engineer Intern",
      startDate: "June 2022",
      endDate: "September 2022",
      bulletPoints: [
        "Worked in Amazon Personalization to integrate profiles on Amazon.com and give a more unique user experience.",
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
  ];
  return (
    <FadeIn className="flex flex-col items-center w-full h-screen">
      <div className="flex flex-col w-full max-w-5xl">
        <h1 className="w-full text-textAlternative">{"<Experiences/>"}</h1>
        <ul>
          {experiences.map((e, index: number) => {
            return (
              <li key={index}>
                <ExperienceCard {...e} />
              </li>
            );
          })}
        </ul>
      </div>
    </FadeIn>
  );
}
