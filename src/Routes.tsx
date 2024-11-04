import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import RdScreenHome from "pages/RdScreenHome";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <RdScreenHome /> },
    { path: "*", element: <NotFound /> },
    {
      path: "rdscreenhome",
      element: <RdScreenHome />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
