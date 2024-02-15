import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://blogapp-api-73a6.onrender.com",
    },
  },
};
