'use client'

import Image from "next/image"
import { useInView } from 'react-intersection-observer'

import HeroImg from '../public/img/hero.webp';
import { cn } from "@/lib/utils";

const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section ref={ref} className="[perspective:2000px] mt-18 md:mt-32">
      <div className={cn(
        "relative bg-hero-gradient bg-white bg-opacity-[0.01] border border-gray-100 rounded-lg brightness-125",
        inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(160px)]",
        inView && "before:animate-image-glow"
      )}>
        <svg 
          className={cn(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-image-strokes"
          )}
          width="100%" 
          viewBox="0 0 1499 778" 
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <Image src={HeroImg} alt="Hero image" className={cn(
          "relative z-10 transition-opacity delay-[680ms]",
          inView ? "opacity-100" : "opacity-0"
        )} />
      </div>
    </section>
  )
}

export default HeroImage