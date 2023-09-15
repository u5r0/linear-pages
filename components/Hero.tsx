import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

type HeroProps = {
  children: React.ReactNode
}
type HeroElementProps = ComponentProps<"div"> & {
  children: React.ReactNode
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return <h1 className={cn("text-gradient text-4xl md:text-5xl my-6", className)}>{children}</h1>
}

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return <p className={cn("text-gray-300 text-md md:text-lg mb-12 tracking-tight", className)}>{children}</p>
}

export default function Hero({ children }: HeroProps) {
  return <div className="text-center mt-16">{children}</div>
}
