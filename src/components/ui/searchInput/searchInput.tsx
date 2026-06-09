import { type ComponentPropsWithoutRef, useId } from 'react'

import clsx from 'clsx'
import { Search, X } from 'lucide-react'

import s from './searchInput.module.scss'

type Props = {
  onClear?: () => void
} & ComponentPropsWithoutRef<'input'>

export const SearchInput = ({ onClear, className, id, value, ...rest }: Props) => {
  const generateId = useId()
  const fieldId = id ?? generateId

  return (
    <div className={clsx(s.search, className)}>
      <Search size={17} className={s.icon} />
      <input id={fieldId} className={s.input} value={value} {...rest} />
      {value ? (
        <button type="button" className={s.clear} onClick={onClear}>
          <X size={12} />
        </button>
      ) : (
        <span className={s.kbd}>⌘K</span>
      )}
    </div>
  )
}
