import React from "react";
import ReactDOM from "react-dom/client";

import "virtual:windi.css";

import "./main.css";
import InitialRoutes from "./InitialRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <InitialRoutes />
);
