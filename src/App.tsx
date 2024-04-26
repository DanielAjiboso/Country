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
import Page2, { detailsLoader } from "./pages/Page2";
import Home, { countryLoader } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={countryLoader} />
      <Route path=":name" element={<Page2 />} loader={detailsLoader} />
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
