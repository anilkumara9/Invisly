import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-95 transform-gpu",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(255,199,0,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,199,0,0.5)] hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:scale-105 active:scale-95",
        outline:
          "border border-white/10 bg-white/5 hover:bg-white/10 hover:text-accent-foreground backdrop-blur-sm hover:scale-105 active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95",
        ghost:
          "hover:bg-white/5 hover:text-accent-foreground hover:scale-105 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 active:scale-95",
        premium: "premium-gradient text-black font-bold hover:shadow-[0_0_30px_-5px_rgba(255,199,0,0.6)] border border-yellow-400/50 hover:scale-105 active:scale-95 transition-all duration-300",
        glass: "glass-button text-white hover:text-primary hover:scale-105 active:scale-95",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(255,199,0,0.5)] hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300",
      },
      size: {
        default: "h-12 px-6 py-3 has-[>svg]:px-4 rounded-xl",
        sm: "h-9 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-14 rounded-xl px-8 has-[>svg]:px-4 text-base",
        icon: "size-12 rounded-lg",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
