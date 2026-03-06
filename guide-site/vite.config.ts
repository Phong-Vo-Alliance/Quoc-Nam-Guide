import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // mdx phải enforce:'pre' để chạy trước react() — theo docs @mdx-js/rollup
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    // include chỉ .tsx/.ts/.jsx/.js để react plugin không đụng vào .mdx
    react({ include: /\.(tsx|ts|jsx|js)$/ }),
    // Tailwind v4 Vite plugin
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@content': path.resolve(__dirname, './src/content'),
      '@auth': path.resolve(__dirname, './src/auth'),
      '@search': path.resolve(__dirname, './src/search'),
    },
  },
})
