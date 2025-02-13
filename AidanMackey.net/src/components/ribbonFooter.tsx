export default function RibbonFooter() {
  return (
    <div className="w-full flex justify-center px-5">
      <div className="max-w-5xl py-10">
        <p className="text-base">{"Designed and developed by Aidan Mackey"}</p>
        <p className="text-base pt-5">
          Built with <em>React.JS</em>, rendered and bundled with{" "}
          <em>Next.JS</em>, Deployed with <em>Docker</em>
        </p>
      </div>
    </div>
  );
}
