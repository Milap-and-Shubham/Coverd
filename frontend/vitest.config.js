import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: {
            "describe": "readonly",
            "it": "readonly",
            "expect": "readonly"
        },
        setupFiles: "tests/setup.js"
    },
});