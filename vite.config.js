import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: '192.168.1.37' // Replace with your actual local network IP
  },
  build: {
    outDir: 'build',  // Change this line to match the expected directory
  }
});

