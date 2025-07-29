import type { RouteObject } from "react-router";
import HomePage from "./HomePage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
];

export default routes;
