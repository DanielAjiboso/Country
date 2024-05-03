import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  function toggle() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style.transition = "all 500ms";
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
      document.body.style.color = "#fff";
    }
    if (!darkMode) {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "hsl(207, 26%, 17%)";
    }
  }
  return (
    <div className="max-w-[140rem] mx-auto py-[2rem]">
      <header className="header">
        <div>
          <h1 className="text-[2.4rem]">Where In The World?</h1>
        </div>
        <div className="text-[2.4rem] cursor-pointer" onClick={toggle}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </div>
      </header>
    </div>
  );
}

export default Header;
