import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allow access from Docker
    port: 5173,       // Default Vite port
    strictPort: true,
    watch: {
      usePolling: true,  // Fix issues with live reload in Docker
    },
  },
});
