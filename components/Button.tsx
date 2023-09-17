import Link from 'next/link'
import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority'

type ButtonProps = 
  VariantProps<typeof buttonVariants> 
  & ComponentProps<"a">
  & { children: React.ReactNode; };


const buttonVariants = cva("inline-flex items-center rounded-full font-medium", {
  variants: {
    variant: {
      primary: "bg-brand whitespace-nowrap hover:brightness-115 text-shadow-sm hover:text-shadow hover:shadow-high",
      secondary: "bg-white bg-opacity-10 hover:bg-opacity-20 border border-gray-100",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-base px-6 h-12",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  }
})

const Button = ({ children, variant, size, className }: ButtonProps) => {
  const classes = buttonVariants({ variant, size, className })

  return (
    <Link className={classes} href='/'>
      {children}
    </Link>
  )
}

export default Button