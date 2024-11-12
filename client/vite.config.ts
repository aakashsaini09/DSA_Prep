// @ts-ignore
import path from "path"
import react from "@vitejs/plugin-react"
import envCompatible from 'vite-plugin-env-compatible'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), envCompatible()],
  envPrefix: "VITE_APP_",
  resolve: {
    alias: {
      // @ts-ignore
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
})

// npx shadcn@latest add toast
// npx shadcn@latest add label
// npx shadcn@latest add switch