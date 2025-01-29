export default function NavBar() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between bg-red-60 max-w-5xl w-screen ">
        {/* Left */}
        <div className="pl-5 w-auto">
          <a href="/test">
            <h3>[ AM ]</h3>
          </a>
        </div>
        {/* Right */}
        <div className="pr-5">
          <ul className="flex gap-5">
            <a href="/test">
              <li>
                <h3>Contact</h3>
              </li>
            </a>
            <a href=":8080">
              <li>
                <h3>Game Engine</h3>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
