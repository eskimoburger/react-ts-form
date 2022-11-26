import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Success from "./Success";
import { AnimatePresence } from "framer-motion";


const AnimationRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>

    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<App />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
