'use client'

import Image from "next/image"
import { useInView } from 'react-intersection-observer'

import HeroImg from '../public/img/hero.webp';
import { cn } from "@/lib/utils";

const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  // console.log(inView)

  return (
    <section ref={ref} className="[perspective:2000px] mt-18 md:mt-32">
      <div className={cn(
        "relative bg-hero-gradient bg-white bg-opacity-[0.01] border border-gray-100 rounded-lg brightness-125",
        inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(160px)]",
        inView && "before:animate-image-glow"
      )}>
        <Image src={HeroImg} alt="Hero image" className={cn(
          "relative z-10 transition-opacity delay-[680]",
          inView ? "opacity-100" : "opacity-0"
        )} />
      </div>
    </section>
  )
}

export default HeroImage