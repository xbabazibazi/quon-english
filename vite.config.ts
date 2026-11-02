import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// base './' → GitHub Pages alt yolunda ve statik barındırmada çalışır
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'QUON English — Türkler için İngilizce',
        short_name: 'QUON English',
        description: 'Türkler için tamamen ücretsiz, A1-B2 İngilizce kursu: dilbilgisi, kelime, dinleme, konuşma.',
        lang: 'tr',
        start_url: './',
        scope: './',
        display: 'standalone',
        background_color: '#0b1220',
        theme_color: '#1453ff',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // içerik parçası (kelime, okuma, senaryo) 2 MB varsayılan sınırını aşabilir; çevrimdışı için önbelleğe girmeli
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        navigateFallback: 'index.html',
      },
    }),
  ],
})
