import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from '@layout';
import { AnalyticsPage, OrdersPage, OverviewPage, ProductsPage, SalesPage, SettingsPage, UsersPage } from '@pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<OverviewPage />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path='users' element={<UsersPage />} />
            <Route path='orders' element={<OrdersPage />} />
            <Route path='sales' element={<SalesPage />} />
            <Route path='analytics' element={<AnalyticsPage />} />
            <Route path='settings' element={<SettingsPage />} />
        </Route>
    ),
    {
        basename: '/react-admin-dashboard',
    }
);

const AdminRoutes = () => <RouterProvider router={router} />;

export default AdminRoutes;
