import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Tecnologia from "../pages/Tecnologia";
import Habilidades from "../pages/Habilidades";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "",
          element: <Inicio />
        },
        {
          path: "tecnologia",
          element: <Tecnologia />
        },
        {
          path: "habilidades",
          element: <Habilidades />
        }
      ]
    },
]);

export default router