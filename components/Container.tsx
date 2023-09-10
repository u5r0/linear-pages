import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-[75rem] mx-auto px-6 sm:px-8', className)}>
      {children}
    </div>
  )
}