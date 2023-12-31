import type { ComponentProps } from "react"

type ChevronIconProps = ComponentProps<"svg">

const ChevronIcon = ({ className }: ChevronIconProps) => {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="currentColor"
      className={className}
    >
      <path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path>
    </svg>
  )
}

export default ChevronIcon