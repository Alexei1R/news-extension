import { cn } from '../lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md px-4 py-2',
          'bg-zinc-900 text-white',
          'border border-zinc-700/50',
          'hover:bg-zinc-800 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-zinc-600',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
