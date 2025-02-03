import FadeIn from "./fadeIn";

export default function TwoPartFooter() {
  return (
    <div className="flex justify-center items-center w-full min-h-[50vh] bg-foreground px-5">
      <div className="max-w-xl text-center ">
        <FadeIn>
          <h2 className="text-textAlternative font-medium">
            {"What are you working on?"}
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="pt-5">
            {
              "Let's have a conversation! I'd love to hear about it and find a way to work together."
            }
          </p>
          <button className="pt-10">
            <a href="mailto:aidan_mackey@yahoo.com">{"> Email"}</a>
          </button>
        </FadeIn>
      </div>
    </div>
  );
}
