import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    plugins: [
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      vue(),
    ],
    base: "./",
    resolve: {
      alias: {
        //resolve.alias设置别称 解决@绝对路径引入问题
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@views": path.resolve(__dirname, "src/views"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },
  };
});
