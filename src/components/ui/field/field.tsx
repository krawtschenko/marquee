import { type ComponentPropsWithoutRef, useId } from 'react'

import clsx from 'clsx'
import { TriangleAlert } from 'lucide-react'

import s from './field.module.scss'

type Props = ComponentPropsWithoutRef<'input'> & {
  label?: string
  required?: boolean
  hint?: string
  error?: boolean
}

export const Field = ({
  id,
  className,
  label,
  required: req,
  hint,
  error,
  ...rest
}: Props) => {
  const generateId = useId()
  const fieldId = id ?? generateId

  return (
    <div className={clsx(s.field, className)}>
      {label && (
        <label className={s.label} htmlFor={fieldId}>
          {label}
          {req && <span className={s.req}>*</span>}
        </label>
      )}

      <input
        id={fieldId}
        className={clsx(s.input, error && s.error)}
        {...rest}
      />

      {hint && (
        <span className={clsx(s.hint, error && s.error)}>
          {error && <TriangleAlert size={13} />}
          {hint}
        </span>
      )}
    </div>
  )
}
