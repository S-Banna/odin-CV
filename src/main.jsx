import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import Sidebar from "./components/Sidebar.jsx";
import School from "./components/School.jsx";
import Work from "./components/Work.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mainCont">
      <Sidebar />
      <div className="mainBar">
        <School />
        <Work />
      </div>
    </div>
  </StrictMode>,
)
