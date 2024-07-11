import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./index.css";
import { Geographie } from "./question/Geographie";
import { Fun } from "./question/Fun";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col items-center gap-20 justify-center w-screen animated-background h-screen bg-gradient-to-t from-slate-900 via-cyan-500 to-indigo-800">
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
          <li>
            <Link to="fun">
              <button>Fun</button>
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
  {
    path: "fun",
    element: <Fun />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
