export default function TwoPartFooter() {
  return (
    <div className="flex justify-center items-center w-full bg-backgroundAlternative">
      <div className="max-w-lg text-center">
        <h2 className="text-textAlternative font-medium">
          {"What are you working on?"}
        </h2>
        <p className="pt-5">
          {
            "Let's have a conversation! I'd love to hear about it and find a way to work together."
          }
        </p>
      </div>
    </div>
  );
}
