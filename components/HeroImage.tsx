import Image from "next/image"
import HeroImg from "/img/hero.webp"

const HeroImage = () => {
  return (
    <section className="[perspective:2000px] mt-32">
      <div className="bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg [transform:rotateX(25deg)]">
      <Image
        src={HeroImg}
        alt="Hero image"
        className='opacity-0'
      />
      </div>
    </section>
  )
}

export default HeroImage