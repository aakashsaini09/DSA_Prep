// @ts-ignore
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
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