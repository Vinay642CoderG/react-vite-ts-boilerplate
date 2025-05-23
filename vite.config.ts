// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].[hash].js",
        chunkFileNames: "js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "css/[name].[hash][extname]";
          }

          // send images to img/ folder
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name || "")) {
            return "img/[name].[hash][extname]";
          }

          // default fallback for other assets
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },
});
