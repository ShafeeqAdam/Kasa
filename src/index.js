import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

/* fichier qui définit la racine de React 
en appelant la méthode 'createRoot()' et rend le site dans le dom via l'id 'root'*/
