import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

interface typeDark {
  darkMode: boolean;
}

function RootLayout() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <Outlet context={{ darkMode } satisfies typeDark} />
        </div>
      )}
    </div>
  );
}

export default RootLayout;

export function useUser() {
  return useOutletContext<typeDark>();
}
