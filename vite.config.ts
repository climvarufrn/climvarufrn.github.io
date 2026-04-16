import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: "/",
  publicDir: "public", // 🔥 garante que Vite use essa pasta
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
