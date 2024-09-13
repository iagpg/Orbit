import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function OutlineButton(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-gray-800 text-sm text-gray-300 hover:border-gray-700 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:border-rose-500 ring-rose-500/10 focus-visible:ring-4',
        props.className
      )}
    />
  )
}
