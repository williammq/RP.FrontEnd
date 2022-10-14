import HomeIndex, { RedirectToHome } from "../pages/home/Home.Index";
import PermissionIndex from "../pages/permission/Permission.Index";
import NotFound from "../pages/error/NotFound";


interface Route{
    key: string;
    path: string;
    exact?: boolean;
    component: () => JSX.Element;
}

const routes : Route[] = [
    {
        key: "home",
        path: "/",
        exact: true,
        component: HomeIndex,
    },
    {
        key: "product-index",
        path: "/product",
        exact: true,
        component: PermissionIndex,
    },
    {
        key: "not-found",
        path: "/not-found",
        exact: true,
        component: NotFound,
    },
    {
        key: "page-not-found",
        path: "*",
        component: () => RedirectToHome(),
    }
];

export default routes;