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
        path: "/Logement",
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
