// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Sistem Informasi Produksi",
        short_name: "SIMPRO",
        description: "Aplikasi Sistem Informasi Produksi Kahuripan",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "icon-192.webp",
            sizes: "192x192",
          },
          {
            src: "icon-256.webp",
            sizes: "256x256",
          },
          {
            src: "icon-512.webp",
            sizes: "512x512",
          },
        ],
      },
      devOptions: {
        enabled: true, // 👈 This enables PWA in development mode
        type: "module",
      },
    }),
  ],
})
