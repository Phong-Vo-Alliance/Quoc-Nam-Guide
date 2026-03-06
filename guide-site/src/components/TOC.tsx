export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

interface TOCProps {
  title?: string
  items: TocItem[]
}

export default function TOC({ title = 'Mục lục', items }: TOCProps) {
  if (!items.length) return null

  return (
    <aside className="premium-accordion-wrapper p-4">
      <div className="premium-light-bar" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
        {title}
      </p>

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={[
                'block text-sm no-underline text-gray-600 hover:text-emerald-700 transition-colors',
                item.level === 3 ? 'pl-4 text-[13px]' : 'font-medium',
              ].join(' ')}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
