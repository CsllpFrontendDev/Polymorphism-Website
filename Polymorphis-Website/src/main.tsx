// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import SeoLayout from "./components/seolayout.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SeoLayout>
      <App />
    </SeoLayout>
  </React.StrictMode>
);
