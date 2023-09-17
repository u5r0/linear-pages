'use client'

import Image from "next/image"
import { useInView } from 'react-intersection-observer'

import HeroImg from '../public/img/hero.webp';
import { cn } from "@/lib/utils";

const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  // console.log(inView)

  return (
    <section ref={ref} className="[perspective:2000px] mt-32">
      <div className={cn(
        "relative bg-hero-gradient bg-white bg-opacity-[0.01] border border-gray-100 rounded-lg",
        inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
      )}>
        <Image src={HeroImg} alt="Hero image" className={cn(
            '',
            inView ? 'opacity-100' : 'opacity-0'
        )} />
      </div>
    </section>
  )
}

export default HeroImage