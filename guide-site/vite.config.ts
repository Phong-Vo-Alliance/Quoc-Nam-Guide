import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import path from 'path'
import fs from 'fs'

/**
 * Vite plugin: khi rehype-mdx-import-media tạo import cho ảnh bị thiếu,
 * trả về data-URI placeholder thay vì crash build.
 * Khi ảnh tồn tại, Vite xử lý bình thường (asset bundling).
 */
function missingImageFallback(): Plugin {
  // 1×1 pixel transparent WebP as data-URI
  const PLACEHOLDER =
    'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAkA4JZQCdAEO/gHOAAA='
  return {
    name: 'missing-image-fallback',
    enforce: 'pre',
    resolveId(id, importer) {
      if (!importer) return null
      // Chỉ xử lý import ảnh tương đối từ file MDX
      if (!/\.(webp|png|jpe?g|gif|svg|avif)$/i.test(id)) return null
      if (!id.startsWith('.')) return null
      const abs = path.resolve(path.dirname(importer), id)
      if (fs.existsSync(abs)) return null        // tồn tại → Vite xử lý bình thường
      return '\0missing-image:' + id              // không tồn tại → intercept
    },
    load(id) {
      if (!id.startsWith('\0missing-image:')) return null
      return `export default ${JSON.stringify(PLACEHOLDER)}`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    missingImageFallback(),
    // mdx phải enforce:'pre' để chạy trước react() — theo docs @mdx-js/rollup
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        rehypePlugins: [rehypeMdxImportMedia],
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
