import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2',

  variants: {
    variant: {
      primary:
        'bg-cyan-500 text-cyan-50 ring-cyan-500 bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-60% to-blue-600 to-100%  hover:bg-gradient-to-r hover:from-teal-700 hover:via-cyan-700 hover:to-blue-800',
      secondary: 'bg-gray-900 text-gray-400 hover:bg-gray-800 ring-gray-900 ',
    },

    size: {
      default: 'px-4 py-2.5',
      sm: 'px-3 py-1.5',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)

Button.displayName = 'Button'
