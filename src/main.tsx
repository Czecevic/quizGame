import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./index.css";
import { Geographie } from "./question/Geographie";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col items-center gap-20 justify-center">
        <h1 className="text-4xl font-bold">Hello !</h1>
        <p>
          Bienvenue dans mon Quiz complétement crazy, choisis l'un des thème
          suivant :
        </p>
        <ul>
          <li>
            <Link to="geographie">
              <button>Geographie</button>
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    path: "geographie",
    element: <Geographie />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
