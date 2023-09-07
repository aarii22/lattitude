// Imports
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; //React
import compress from "astro-compress"; //For html and image compression
import sitemap from "@astrojs/sitemap"; // For sitemap in live site

// https://astro.build/config
export default defineConfig({
  //site: '', Published homepage link goes here for sitemap
  integrations: [react(), compress({
    css: false,
    html: true,
    js: false,
    img: true,
    svg: true
  }), // sitemap({customPages: [''] Subpages links goes here for sitemap. }),
  ],
  //For custom build
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/main.js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: ({
            name
          }) => {
            if (/\.(gif|jpe?g|png|svg|mp4)$/.test(name ?? '')) {
              return 'assets/images/[name][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/styles[extname]';
            }
            return 'assets/[name][extname]';
          }
        }
      }
    }
  }
});