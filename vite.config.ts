import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: "/climvar.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
