import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipesPage from "./RecipesPage.jsx";
import Navigation from "./components/NavBar.jsx";
import MyComicsPage from "./MyComicsPage.jsx";
import NewComicPage from "./NewComicsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/recipes", element: <RecipesPage /> },
      { path: "/mycomics", element: <MyComicsPage /> },
      { path: "/addcomic", element: <NewComicPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
