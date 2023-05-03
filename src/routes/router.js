import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import AppartementPage from "../pages/AppartementPage";
import About from "../pages/About";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Body from "../layout/Body";
import ErrorPageNotFound from "../pages/ErrorPageNotFound";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </>
  );
};

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Logement/:id",
        element: <AppartementPage />,
      },
      {
        path: "/Apropos",
        element: <About />,
      },
    ],
  },
];

export default createBrowserRouter(routes);

/*Code qui utilise le router de React pour la navigation sur le site.
Il définit 4 routes et un Layout commun pour les routes (sauf la 404)
Les routes sont exportées sous forme de "browserRouter.

element Layout regroupe la "navbar", "body", et "footer", elle est utilisée
pour définir la structure de la page sur chaque route (hors 404), 
et Outlet affichera le contenu de des différentes routes.*/
