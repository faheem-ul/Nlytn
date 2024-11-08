import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import RdScreenHome from "pages/RdScreenHome";
import Signin from "components/Signin";
import SignUp from "components/Signup";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/rdscreenhome", element: <RdScreenHome /> },
    { path: "*", element: <NotFound /> },
    {
      path: "rdscreenhome",
      element: <RdScreenHome />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
