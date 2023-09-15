import { Button, Container, Hero } from "@/components";
import { HeroSubtitle, HeroTitle } from "@/components/Hero";
import { ChevronIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
    <Container>
      <Hero>
        <Button variant="secondary" size="small">
          Announcing our $35M Series B
          <ChevronIcon className="-rotate-90 ml-0.5" />
        </Button>
        <HeroTitle className="font-medium tracking-tightest">
          Linear is a better way
          <br /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br /> Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button size='large'>
          Get started
          <ChevronIcon className="-rotate-90 ml-1.5" />
        </Button>
        
        <img className="mt-32" src="/img/hero.webp" alt="Hero Image" />
      </Hero>
    </Container>
    </>
  )
}
