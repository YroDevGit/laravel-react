import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/reactjs/src/index.jsx', 'resources/reactjs/src/index.css'],
            refresh: true,
        }),
        react(),
    ],
});
