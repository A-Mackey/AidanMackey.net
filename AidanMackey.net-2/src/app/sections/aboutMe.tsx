import FadeIn from "@/components/fadeIn";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center w-full h-[75vh]">
      <div className="w-full max-w-5xl">
        <FadeIn className="w-[42rem]">
          <h1 className="text-textAlternative">{"<About_Me/>"}</h1>
          <p>
            {`After 6 years of software developer experience 
          and 4 years at Santa Clara University, I have 
          been able to work at many different companies 
          including Amazon, INRIX, my own startup, and various 
          many different projects.`}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
