import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: "/", // correto para user site
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
