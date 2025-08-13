// src/main.tsx
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import RouterProvider from "./RouterProvider";
import "./index.css";
import Thumbnail from "./components/Thumbnail";
import SidebarLayout from "./layouts/SidebarLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <Thumbnail />
        <SidebarLayout>
            <div className="app-fade">
                <RouterProvider />
            </div>
        </SidebarLayout>
    </HashRouter>
);
