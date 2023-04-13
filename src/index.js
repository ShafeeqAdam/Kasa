//import css, composant, pages, librairie, reactdom
import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/Home.scss";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Body from "./layout/Body";
import AppartementPage from "./pages/AppartementPage";
import About from "./pages/About";
import ErrorPageNotFound from "./pages/ErrorPageNotFound";

// definition de layout qui sera affiché sur toute les pages
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

// Router pour la gestion de toute les routes
const router = createBrowserRouter([
  {
    // affichage layout
    element: <Layout />,
    // affichage page d'erreur
    errorElement: <ErrorPageNotFound />,
    // définition des routes enfants
    children: [
      {
        path: "/Accueil",
        element: <Home />,
      },
      {
        path: "/Logement",
        element: <AppartementPage />,
      },
      {
        path: "/Apropos",
        element: <About />,
      },
    ],
  },
]);

// racine react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
