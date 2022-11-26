import React from "react";
import App from "./App";
import Success from "./Success";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AnimationRoutes from "./AnimationRoutes";
const InitialRoutes = () => {

  return (
    <Router>
      <AnimationRoutes/>
    </Router>
  );
};

export default InitialRoutes;
