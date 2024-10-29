import { defineConfig } from 'vite';
import { viteStaticCopy } from "vite-plugin-static-copy";

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
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: '_redirects',
                    dest: '_redirects'
                }
            ]
        })
    ]
})