import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  base: "/",
  build: {
    assetsDir: "assets_v2", // 🔥 muda nome da pasta
  },
})
