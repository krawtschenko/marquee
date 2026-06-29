import { type ComponentPropsWithoutRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  showTicks?: boolean
}

export function Slider({ className, showTicks, min, max, value, defaultValue, ...rest }: Props) {
  return (
    <div className={className}>
      <SliderPrimitive.Root
        className={s.root}
        min={min}
        max={max}
        value={value}
        defaultValue={defaultValue}
        {...rest}
      >
        <SliderPrimitive.Track className={s.track}>
          <SliderPrimitive.Range className={s.range} />
        </SliderPrimitive.Track>
        {(value ?? defaultValue ?? [50]).map((v, i) => (
          <SliderPrimitive.Thumb key={i} className={s.thumb}>
            <span className={s.bubble}>{v}</span>
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>

      {showTicks && (
        <div className={s.scale}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  )
}
