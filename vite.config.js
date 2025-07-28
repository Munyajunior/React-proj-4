import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envPrefix: "VITE_",
  define: {
    "import.meta.env.VITE_GEMINI_API_KEY": JSON.stringify(
      loadEnv(import.meta.env, "")["VITE_GEMINI_API_KEY"]
    ),
  },
});
