import { type ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import s from './read-more.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  text: string
}

export function ReadMore({ text, className, ...rest }: Props) {
  const [clamped, setClamped] = useState(true)
  const [overflows, setOverflows] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)
  const clampedRef = useRef(true)

  const toggle = () => {
    clampedRef.current = !clampedRef.current
    setClamped((prev) => !prev)
  }

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const check = () => {
      if (clampedRef.current) {
        setOverflows(el.scrollHeight > el.clientHeight)
      }
    }

    const observer = new ResizeObserver(check)
    observer.observe(el)
    check()

    return () => observer.disconnect()
  }, [])

  return (
    <div className={clsx(s.readmore, clamped && s.isClamped, className)} {...rest}>
      <p ref={textRef} className={s.text}>
        {text}
      </p>
      {overflows && (
        <button type="button" className={s.toggle} onClick={toggle}>
          {clamped ? 'Read more' : 'Read less'}
          <ChevronDown size={14} />
        </button>
      )}
    </div>
  )
}
