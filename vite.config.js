import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sidhant Resume',
        short_name: 'Resume',
        description: 'A portfolio and resume web app for Sidhant Biswal',
        theme_color: '#3498db',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/profile.png', // Updated to use your profile.png
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/profile.png', // Updated to use your profile.png
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
})
