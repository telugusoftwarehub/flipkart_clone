import DashboardPage from '../pages/dashboard/dashboard.page';
import AllProductsPage from '../pages/allProducts/allProducts.page';

export const routes = [
    {
        path: "/",
        component: DashboardPage
    },
    {
        path: "/products",
        component: AllProductsPage
    },
    {
        path: "/items",
        component: AllProductsPage
    }
]