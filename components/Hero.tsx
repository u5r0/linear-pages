import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

type HeroProps = {
  children: React.ReactNode
}
type HeroElementProps = ComponentProps<"div"> & {
  children: React.ReactNode
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return <h1 className={cn("text-5xl my-6", className)}>{children}</h1>
}

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return <p className={cn("text-lg mb-12", className)}>{children}</p>
}

export default function Hero({ children }: HeroProps) {
  return <div className="text-center">{children}</div>
}
