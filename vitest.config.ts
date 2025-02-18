import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/src/**/*.test.tsx'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      './playground/**/*.*',
      './playground-temp/**/*.*',
    ],
    globals: true,
    testTimeout: 20000,
    environment: "jsdom"
  },
})