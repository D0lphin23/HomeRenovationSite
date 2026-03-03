import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                balkony: resolve(__dirname, "balkony.html"),
                kuhni: resolve(__dirname, "kuhni.html"),
            },
        },
    },
});
