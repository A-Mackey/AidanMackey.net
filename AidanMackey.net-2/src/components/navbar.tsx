export default function NavBar() {
  //   const leftBuffer = "⌜";
  //   const rightBuffer = "⌟";
  const leftBuffer = "[";
  const rightBuffer = "]";
  return (
    <div className="flex justify-center pt-3 pb-3">
      <div className="flex justify-between bg-red-60 max-w-5xl w-screen ">
        {/* Left */}
        <div className="pl-5 w-auto">
          <a href="/test">
            <h3>[AM]</h3>
          </a>
        </div>
        {/* Right */}
        <div className="pr-5">
          <ul className="flex gap-5">
            <li>
              <h3>
                <a href="/test">
                  {leftBuffer}Contact{rightBuffer}
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="/test">
                  {leftBuffer}Game Engine{rightBuffer}
                </a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
