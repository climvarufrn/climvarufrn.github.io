import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: "/", // 🔥 AGORA É ROOT
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
