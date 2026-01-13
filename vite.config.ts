import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/kinderra-play.git.io/",
  plugins: [react()],
});
