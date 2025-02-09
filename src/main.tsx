import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <body>
      <Card />
    </body>
  </StrictMode>
);
