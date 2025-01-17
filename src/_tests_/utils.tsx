import { AdminRoutes } from '@routes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const navigateTo = (path: string) => {
    render(
        <MemoryRouter initialEntries={[path]}>
            <AdminRoutes />
        </MemoryRouter>
    );
};
