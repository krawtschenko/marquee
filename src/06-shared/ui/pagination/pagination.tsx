import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import s from './pagination.module.scss'

type Props = {
  page: number
  total: number
  siblings?: number
  onChange: (page: number) => void
  className?: string
}

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i)

const buildPages = (page: number, total: number, siblings: number): (number | '…')[] => {
  const left = Math.max(2, page - siblings)
  const right = Math.min(total - 1, page + siblings)

  const pages: (number | '…')[] = [1]

  if (left > 2) pages.push('…')
  pages.push(...range(left, right))
  if (right < total - 1) pages.push('…')
  if (total > 1) pages.push(total)

  return pages
}

export function Pagination({ page, total, siblings = 1, onChange, className }: Props) {
  const pages = buildPages(page, total, siblings)

  return (
    <nav className={clsx(s.root, className)} aria-label="Pagination">
      <button
        className={clsx(s.page, page <= 1 && s['is-disabled'])}
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft />
      </button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className={s['page-ellipsis']}>
            …
          </span>
        ) : (
          <button
            key={p}
            className={clsx(s.page, p === page && s['is-current'])}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}
            onClick={() => p !== page && onChange(p)}
          >
            {p}
          </button>
        ),
      )}

      <button
        className={clsx(s.page, page >= total && s['is-disabled'])}
        aria-label="Next page"
        disabled={page >= total}
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight />
      </button>
    </nav>
  )
}
