import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { Sidebar } from "./components/Sidebar.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mainCont">
      <Sidebar />
    </div>
  </StrictMode>,
)
