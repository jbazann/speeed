import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: '/index.html',
                about: '/about.html',
                projects: '/projects.html',
            }
        }
    },
    esbuild: {
        supported: {
            'top-level-await': true
        },
    },
})