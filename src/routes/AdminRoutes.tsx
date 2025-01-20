import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from '@layout';
import { OverviewPage, ModulePage} from '@pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<OverviewPage />} />
            <Route path='module14' element={<ModulePage />} />
        </Route>
    ),
    {
        basename: '/',
    }
);

const AdminRoutes = () => <RouterProvider router={router} />;

export default AdminRoutes;
