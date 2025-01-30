import FadeIn from "@/components/fadeIn";

export default function Landing() {
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
