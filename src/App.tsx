//React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./Layout/RootLayout";

//pages
import Page2 from "./pages/Page2";
import Home, { countryLoader } from "./pages/Home";
import CountriesError from "./errors/CountriesError";
import Notfound from "./errors/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<CountriesError />}>
      <Route index element={<Home />} loader={countryLoader} />
      <Route path=":name" element={<Page2 />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
