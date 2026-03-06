import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import matter from 'gray-matter'
import { normalizeVN } from '../src/search/normalizeVN'

type SearchRole = 'staff' | 'leader' | 'admin'

interface SearchRecord {
  title: string
  slug: string
  excerpt: string
  category: string
  roles: SearchRole[]
  tags: string[]
  headings: string[]
  content: string
  normalizedTitle: string
  normalizedContent: string
}

const CONTENT_ROOT = join(process.cwd(), 'src', 'content')
const OUTPUT_FILE = join(process.cwd(), 'src', 'content-index', 'search-index.json')

function toSlugPart(filename: string): string {
  return filename.replace(/\.mdx$/i, '').replace(/^\d+-/, '')
}

function toStringArray(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input.map((value) => String(value).trim()).filter(Boolean)
  }
  if (typeof input === 'string') {
    return input
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
  }
  return []
}

function toRoles(input: unknown): SearchRole[] {
  const values = toStringArray(input).map((value) => normalizeVN(value))
  const allowed: SearchRole[] = ['staff', 'leader', 'admin']
  const roles = values.filter((value): value is SearchRole => allowed.includes(value as SearchRole))
  return roles.length ? roles : ['staff', 'leader', 'admin']
}

function extractHeadings(content: string): string[] {
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('## ') || line.startsWith('### '))
    .map((line) => line.replace(/^#+\s+/, '').trim())
    .filter(Boolean)
}

function stripMdx(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#+\s+/gm, '')
    .replace(/[*_~>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function walkMdxFiles(root: string): string[] {
  if (!existsSync(root)) return []

  const entries = readdirSync(root, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = join(root, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkMdxFiles(fullPath))
      continue
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.mdx')) {
      files.push(fullPath)
    }
  }

  return files
}

function buildRecord(filePath: string): SearchRecord {
  const raw = readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const cleanContent = stripMdx(content)

  const relPath = relative(CONTENT_ROOT, filePath).split(sep)
  const category = relPath[0] ?? 'general'
  const fileName = relPath[relPath.length - 1] ?? 'untitled.mdx'
  const slug = `/${category}/${toSlugPart(fileName)}`

  const titleFromFrontmatter = typeof data.title === 'string' ? data.title.trim() : ''
  const fallbackTitle = toSlugPart(fileName).replace(/-/g, ' ')
  const title = titleFromFrontmatter || fallbackTitle
  const excerpt = cleanContent.slice(0, 220)

  return {
    title,
    slug,
    excerpt,
    category,
    roles: toRoles(data.roles),
    tags: toStringArray(data.tags),
    headings: extractHeadings(content),
    content: cleanContent,
    normalizedTitle: normalizeVN(title),
    normalizedContent: normalizeVN(cleanContent),
  }
}

function buildIndex(): void {
  const files = walkMdxFiles(CONTENT_ROOT)
  const records: SearchRecord[] = files.map((file) => buildRecord(file))

  writeFileSync(OUTPUT_FILE, `${JSON.stringify(records, null, 2)}\n`, 'utf-8')
  console.log(`Search index generated: ${records.length} record(s)`)
}

buildIndex()
