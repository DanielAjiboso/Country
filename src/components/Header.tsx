import { BsMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<Props> = function ({ darkMode, setDarkMode }: Props) {
  function toggle() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.transition = "all 500ms";
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
      document.body.style.color = "#fff";
    }
    if (darkMode) {
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
      document.body.style.color = "hsl(207, 26%, 17%)";
    }
  }
  return (
    <div className={`w-screen mx-auto `}>
      <header
        className={`header ${
          darkMode ? "bg-gray-800" : "bg-white"
        } w-screen h-28`}
      >
        <div className="flex m-auto w-5/6">
          <h1 className="text-[2.4rem] mr-auto">
            {" "}
            <strong>Where In The World?</strong>
          </h1>
          {!darkMode ? (
            <div
              className="text-[2.4rem] cursor-pointer ml-auto flex gap-2 "
              onClick={toggle}
            >
              <BsFillCloudSunFill />
              <p>
                {" "}
                <strong> Light Mode</strong>
              </p>
            </div>
          ) : (
            <div
              className="text-[2.4rem] cursor-pointer ml-auto flex gap-2"
              onClick={toggle}
            >
              <BsMoonStarsFill />

              <strong>Dark Mode</strong>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
