import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 3000,
  },
  define: {
    "process.env.PORT": `${process.env.PORT}`,
    "process.env.BASE_URL": `"${process.env.BASE_URL}"`,
    "process.env.GEO_API": `"${process.env.GEO_API}"`,
  },
});
