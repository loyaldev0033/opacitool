import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expect } from 'vitest';
import { navigateTo } from '../utils';

describe('AdminRoutes', () => {
    it('should render overview page for /', async () => {
        navigateTo('/');
        expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument();
    });

    it('should render product page for /products', async () => {
        navigateTo('/products');
        expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument();
    });

    it('should render users page for /users', async () => {
        navigateTo('/users');
        expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
    });

    it('should render users page for /sales', async () => {
        navigateTo('/sales');
        expect(screen.getByRole('heading', { name: 'Sales Dashboard' })).toBeInTheDocument();
    });

    it('should render users page for /order', async () => {
        navigateTo('/orders');
        expect(screen.getByRole('heading', { name: 'Orders' })).toBeInTheDocument();
    });

    it('should render users page for /analytics', async () => {
        navigateTo('/analytics');
        expect(screen.getByRole('heading', { name: 'Analytics Dashboard' })).toBeInTheDocument();
    });

    it('should render users page for /settings', async () => {
        navigateTo('/settings');
        expect(screen.getByRole('heading', { name: 'Settings' })).toBeInTheDocument();
    });
});
