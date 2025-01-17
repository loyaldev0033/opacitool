import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@routes': resolve(__dirname, 'src/routes'),
            '@layout': resolve(__dirname, 'src/layout'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@constants': resolve(__dirname, 'src/constants'),
            '@ui': resolve(__dirname, 'src/ui'),
            '@components': resolve(__dirname, 'src/components'),
            '@charts': resolve(__dirname, 'src/charts'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@store': resolve(__dirname, 'src/store'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@assets': resolve(__dirname, 'src/assets'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    test: { globals: true, environment: 'jsdom', setupFiles: './setupTests.ts' },
    plugins: [react(), tsconfigPaths()],
    base: '/react-admin-dashboard',
});
