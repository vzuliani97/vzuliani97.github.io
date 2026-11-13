import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// One real HTML file per route, so deep links work on GitHub Pages without a 404 redirect trick.
const pages = ['index', 'work/yamesi/index', 'work/opscircuit/index', 'work/nekobet/index', 'work/security/index', 'resume/index', '404'];

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page, `${page}.html`])),
    },
  },
});
