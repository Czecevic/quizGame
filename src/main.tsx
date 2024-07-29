import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./index.css";
import { Geographie } from "./question/Geographie";
import { Fun } from "./question/Fun";
import { Musik } from "./question/Musik";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col items-center gap-20 justify-center animated-background h-screen">
        <h1 className="text-4xl font-bold">Hello !</h1>
        <p>
          Bienvenue dans mon Quiz complétement crazy, choisis l'un des thème
          suivant :
        </p>
        <div className="flex flex-col items-center gap-5 w-full">
          <Link to="geographie" className="w-full">
            <button className=" w-full bg-blue-500 hover:bg-blue-50 text-white hover:text-black font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Geographie
            </button>
          </Link>
          <Link to="fun" className="w-full">
            <button className=" w-full bg-yellow-500 hover:bg-yellow-50 text-white hover:text-black font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
              Fun
            </button>
          </Link>
          <Link to="Musique" className="w-full">
            <button className=" w-full bg-red-500 hover:bg-red-50 text-white hover:text-black font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              Musique
            </button>
          </Link>
        </div>
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
  {
    path: "Musique",
    element: <Musik />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
