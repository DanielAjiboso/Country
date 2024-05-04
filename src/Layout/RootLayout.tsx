import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

interface typeDark {
  darkMode: boolean;
}

function RootLayout() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Outlet context={{ darkMode } satisfies typeDark} />
    </div>
  );
}

export default RootLayout;

export function useUser() {
  return useOutletContext<typeDark>();
}
