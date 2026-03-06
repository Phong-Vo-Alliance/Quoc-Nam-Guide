import Fuse from 'fuse.js'
import rawSearchIndex from '@/content-index/search-index.json?raw'
import { normalizeVN } from './normalizeVN'
import { synonymMap } from './synonymMap'

export type SearchRole = 'staff' | 'leader' | 'admin'

export interface SearchIndexItem {
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

export interface SearchResultItem {
  title: string
  slug: string
  excerpt: string
  category: string
  roles: SearchRole[]
}

interface SearchOptions {
  currentRole?: SearchRole
  limit?: number
}

const ROLE_LEVEL: Record<SearchRole, number> = {
  staff: 1,
  leader: 2,
  admin: 3,
}

function parseIndex(raw: string): SearchIndexItem[] {
  try {
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []

    return parsed.filter((item): item is SearchIndexItem => {
      if (typeof item !== 'object' || item === null) return false
      const r = item as Partial<SearchIndexItem>

      return (
        typeof r.title === 'string' &&
        typeof r.slug === 'string' &&
        typeof r.excerpt === 'string' &&
        typeof r.category === 'string' &&
        Array.isArray(r.roles) &&
        Array.isArray(r.tags) &&
        Array.isArray(r.headings) &&
        typeof r.content === 'string' &&
        typeof r.normalizedTitle === 'string' &&
        typeof r.normalizedContent === 'string'
      )
    })
  } catch {
    return []
  }
}

const records = parseIndex(rawSearchIndex)

const fuse = new Fuse(records, {
  keys: [
    { name: 'title', weight: 0.2 },
    { name: 'headings', weight: 0.2 },
    { name: 'tags', weight: 0.15 },
    { name: 'excerpt', weight: 0.15 },
    { name: 'content', weight: 0.1 },
    { name: 'normalizedTitle', weight: 0.1 },
    { name: 'normalizedContent', weight: 0.1 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 2,
})

function canAccess(currentRole: SearchRole, itemRoles: SearchRole[]): boolean {
  if (!itemRoles.length) return true
  return itemRoles.some((role) => ROLE_LEVEL[currentRole] >= ROLE_LEVEL[role])
}

function expandQuery(query: string): string {
  const normalized = normalizeVN(query)
  if (!normalized) return ''

  const parts = new Set([normalized])
  for (const [phrase, synonyms] of Object.entries(synonymMap)) {
    if (normalized.includes(phrase)) {
      synonyms.forEach((syn) => parts.add(syn))
    }
  }

  return Array.from(parts).join(' ')
}

export function searchGuides(query: string, options: SearchOptions = {}): SearchResultItem[] {
  const expandedQuery = expandQuery(query)
  if (!expandedQuery) return []

  const currentRole = options.currentRole
  const limit = options.limit ?? 10

  return fuse
    .search(expandedQuery)
    .map((result) => result.item)
    .filter((item) => (currentRole ? canAccess(currentRole, item.roles) : true))
    .slice(0, limit)
    .map((item) => ({
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      category: item.category,
      roles: item.roles,
    }))
}
