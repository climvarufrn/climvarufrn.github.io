import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: "/",
  build: {
    assetsDir: "assets_v2",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 🔥 ESSENCIAL
    },
  },
})
