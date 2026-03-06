import { useEffect, useMemo, useRef, useState, type ComponentType, type HTMLAttributes, type ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import CalloutBlock from '@/components/CalloutBlock'
import TOC, { type TocItem } from '@/components/TOC'

interface ContentPageProps {
  section: string
}

type Frontmatter = {
  title?: string
  lastUpdated?: string
  appVersion?: string
}

type MdxComponentProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
  target?: string
  rel?: string
  href?: string
  src?: string
  alt?: string
  loading?: 'eager' | 'lazy'
}

type MDXModule = {
  default: ComponentType<{ components?: Record<string, ComponentType<MdxComponentProps>> }>
  frontmatter?: Frontmatter
}

const mdxModules = import.meta.glob<MDXModule>('/src/content/**/*.mdx')

function normalizeSlug(filename: string): string {
  return filename
    .replace(/^\d+-/, '')
    .replace(/\.mdx$/i, '')
    .trim()
    .toLowerCase()
}

function toHeadingId(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function formatDate(input?: string): string {
  if (!input) return '--/--/----'
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return '--/--/----'
  const dd = `${date.getDate()}`.padStart(2, '0')
  const mm = `${date.getMonth() + 1}`.padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}

function buildSectionEntries(section: string) {
  return Object.keys(mdxModules)
    .filter((path) => path.includes(`/content/${section}/`))
    .map((path) => {
      const filename = path.split('/').pop() ?? ''
      return {
        path,
        slug: normalizeSlug(filename),
      }
    })
    .sort((a, b) => a.path.localeCompare(b.path))
}

const mdxComponents: Record<string, ComponentType<MdxComponentProps>> = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  a: (props) => <a {...props} target={props.target ?? '_blank'} rel={props.rel ?? 'noreferrer'} />,
  img: (props) => <img {...props} loading="lazy" />,
  Callout: CalloutBlock,
  CalloutBlock,
}

export default function ContentPage({ section }: ContentPageProps) {
  const { slug } = useParams()
  const [MdxComponent, setMdxComponent] = useState<MDXModule['default'] | null>(null)
  const [frontmatter, setFrontmatter] = useState<Frontmatter>({})
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const articleRef = useRef<HTMLDivElement | null>(null)

  const entries = useMemo(() => buildSectionEntries(section), [section])
  const activeSlug = slug ?? entries[0]?.slug ?? ''

  useEffect(() => {
    let isCancelled = false

    async function loadContent() {
      if (!entries.length || !activeSlug) {
        setMdxComponent(null)
        setFrontmatter({})
        return
      }

      const target = entries.find((entry) => entry.slug === activeSlug) ?? entries[0]
      const loader = mdxModules[target.path]
      if (!loader) {
        setMdxComponent(null)
        setFrontmatter({})
        return
      }

      const mod = await loader()
      if (isCancelled) return
      setMdxComponent(() => mod.default)
      setFrontmatter(mod.frontmatter ?? {})
    }

    loadContent()
    return () => {
      isCancelled = true
    }
  }, [activeSlug, entries])

  useEffect(() => {
    if (!MdxComponent || !articleRef.current) return

    const raf = window.requestAnimationFrame(() => {
      if (!articleRef.current) return

      const headings = Array.from(articleRef.current.querySelectorAll<HTMLHeadingElement>('h2, h3'))
      const used = new Map<string, number>()
      const items: TocItem[] = headings.map((heading) => {
        const rawId = toHeadingId(heading.textContent ?? heading.innerText ?? '')
        const count = used.get(rawId) ?? 0
        used.set(rawId, count + 1)
        const nextId = count === 0 ? rawId : `${rawId}-${count + 1}`
        heading.id = nextId

        return {
          id: nextId,
          text: heading.textContent ?? '',
          level: heading.tagName === 'H3' ? 3 : 2,
        }
      })

      setTocItems(items)
    })

    return () => {
      window.cancelAnimationFrame(raf)
    }
  }, [MdxComponent, frontmatter, activeSlug])

  if (!entries.length) {
    return (
      <div className="premium-accordion-wrapper p-6">
        <p className="text-sm text-gray-600">
          Chưa có nội dung cho chuyên mục <strong>{section}</strong>.
        </p>
      </div>
    )
  }

  if (!MdxComponent) {
    return (
      <div className="premium-accordion-wrapper p-6">
        <p className="text-sm text-gray-600">Đang tải nội dung...</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1240px] mx-auto">
      <div className="xl:grid xl:grid-cols-[minmax(0,920px)_280px] xl:justify-between xl:gap-10">
        <article className="content-area w-full max-w-[920px]" ref={articleRef}>
          <MdxComponent components={mdxComponents} />

          <footer className="article-footer">
            Cập nhật lần cuối: {formatDate(frontmatter.lastUpdated)} — Phiên bản: {frontmatter.appVersion ?? '?.?.?'}
          </footer>
        </article>

        <div className="hidden xl:block w-[280px] sticky top-4 self-start">
          <TOC items={tocItems} />
        </div>
      </div>
    </div>
  )
}
