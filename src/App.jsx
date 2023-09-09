import "./App.css";
// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Card from "./components/Card";
import Vcard from "./pages/Vcard";

// CONTEXT
import { useTheme } from "./hooks/useTheme";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";

function App() {
  const { mode } = useTheme();
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vcard/:id" element={<Vcard />} />
      </Route>
    )
  );
  return (
    <div className={`App ${mode}`}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
