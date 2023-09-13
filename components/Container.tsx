import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export type ContainerProps = 
  ComponentProps<"div"> 
  & { children: React.ReactNode }

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-[79rem] mx-auto px-6 sm:px-8', className)}>
      {children}
    </div>
  )
}