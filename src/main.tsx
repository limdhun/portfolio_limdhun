// src/main.tsx
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import RouterProvider from "./RouterProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <RouterProvider />
    </HashRouter>
);
