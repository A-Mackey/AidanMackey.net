"use client";

import { useState } from "react";
import FadeIn from "./fadeIn";

export interface ExperienceCardProps {
  img: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}

export default function experienceCard({
  img,
  company,
  role,
  startDate,
  endDate,
  bulletPoints,
}: ExperienceCardProps) {
  const [showBulletPoints, setShowBulletPoints] = useState<boolean>(false);

  return (
    <div className="transition-all duration-500" key={company + role}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex justify-center items-center w-[100px] h-[100px]">
            <img className="w-[40px] h-[40px]" src={img} alt="Company Image" />
          </div>
          <div>
            <h2>
              {company} - {role}
            </h2>
            <p className="text-md text-textAlternative">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
        <div className="w-1 flex justify-center items-center">
          <div
            className="text-2xl cursor-pointer"
            onClick={() => setShowBulletPoints(!showBulletPoints)}
          >
            {showBulletPoints ? "⮝" : "⮟"}
          </div>
        </div>
      </div>
      {showBulletPoints && (
        <FadeIn trigger={showBulletPoints} className="mb-5">
          <ul>
            {bulletPoints.map((point: string, index: number) => (
              <li className="mb-1 pl-24" key={index}>
                - {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      )}
    </div>
  );
}
