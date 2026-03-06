import type { PropsWithChildren } from 'react'

type CalloutType = 'note' | 'warning' | 'tip'

interface CalloutBlockProps extends PropsWithChildren {
  type?: CalloutType
  title?: string
}

const TYPE_LABEL: Record<CalloutType, string> = {
  note: 'Ghi chú',
  warning: 'Cảnh báo',
  tip: 'Mẹo',
}

const TYPE_CLASS: Record<CalloutType, string> = {
  note: 'callout callout-note',
  warning: 'callout callout-warning',
  tip: 'callout callout-tip',
}

export default function CalloutBlock({
  type = 'note',
  title,
  children,
}: CalloutBlockProps) {
  return (
    <aside className={TYPE_CLASS[type]} role="note">
      <p className="text-xs font-semibold uppercase tracking-wide mb-2">
        {title ?? TYPE_LABEL[type]}
      </p>
      <div>{children}</div>
    </aside>
  )
}
