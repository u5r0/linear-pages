import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

type CareersIconProps = ComponentProps<"svg">

const CareersIcon = ({ className }: CareersIconProps) => {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="currentColor"
      className={cn("mr-3", className)}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0008 10.3548L14 13.5C14 14.3284 13.3284 15 12.5 15H3.5C2.67157 15 2 14.3284 2 13.5L1.99977 10.355C2.23746 10.4258 2.48574 10.4719 2.74165 10.4906L3 10.5L5.99995 10.4999C6.55217 10.4998 6.99987 10.9478 7 11.5C7 11.7455 7.17688 11.9496 7.41012 11.9919L7.5 12H8.5C8.74546 12 8.94961 11.8231 8.99194 11.5899L9 11.5C8.99987 10.9477 9.44761 10.4998 9.99996 10.4999L13 10.5C13.3478 10.5 13.6837 10.4493 14.0008 10.3548ZM9.25 1C10.2165 1 11 1.7835 11 2.75V4H14C14.5523 4 15 4.44772 15 5V7C15 8.10457 14.1046 9 13 9H3C1.89543 9 1 8.10457 1 7V5C1 4.44772 1.44772 4 2 4H5V2.75C5 1.7835 5.7835 1 6.75 1H9.25ZM9.25 2.5H6.75C6.61193 2.5 6.5 2.61193 6.5 2.75V4H9.5V2.75C9.5 2.61193 9.38807 2.5 9.25 2.5Z"></path>
    </svg>
  )
}

export default CareersIcon