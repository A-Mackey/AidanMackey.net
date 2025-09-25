"use client";

import { useState } from "react";
import FadeIn from "./fadeIn";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

export interface ExperienceCardProps {
  img: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}

export default function ExperienceCard({
  img,
  company,
  role,
  startDate,
  endDate,
  bulletPoints,
}: ExperienceCardProps) {
  const [showBulletPoints, setShowBulletPoints] = useState<boolean>(false);
  const { mobile } = useScreenSize();

  return (
    <div
      className="w-fill transition-[margin] duration-500 ease-in-out"
      style={{ marginBottom: showBulletPoints ? "20px" : "0px" }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex justify-center items-center w-[100px] h-[100px]">
            <Image width={40} height={40} src={img} alt="Company Image" />
          </div>
          <div className="w-full">
            <h2 className={`${mobile ? "text-base" : "text-2xl"}`}>
              {company} - {role}
            </h2>
            <p
              className={`text-md text-textAlternative ${mobile && "text-sm"}`}
            >
              {startDate} - {endDate}
            </p>
          </div>
        </div>
        {/* Expand Button */}
        <div className="w-1 flex justify-center items-center">
          <div
            className="text-2xl cursor-pointer text-text"
            onClick={() => setShowBulletPoints(!showBulletPoints)}
          >
            {showBulletPoints ? "⮝" : "⮟"}
          </div>
        </div>
      </div>

      {/* Expanding Content with max-height */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out text-text"
        style={{
          maxHeight: showBulletPoints ? "250px" : "0px",
        }}
      >
        <FadeIn trigger={showBulletPoints} duration={0}>
          <ul className="mt-3">
            {bulletPoints.map((point, index) => (
              <li
                className={`mb-1 ${mobile ? "pl-4 text-sm" : "pl-24"}`}
                key={index}
              >
                - {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
