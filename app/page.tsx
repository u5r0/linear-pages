import { Button, Container, Hero, HeroImage } from "@/components";
import { HeroSubtitle, HeroTitle } from "@/components/Hero";
import { ChevronIcon } from "@/components/icons";

export default function Home() {
  return (
    <Container className="pb-64 md:pb-[26.25rem]">
      <Hero>
        <Button className="animate-fade-in" variant="secondary" size="small">
          Announcing our $35M Series B
          <ChevronIcon className="-rotate-90 ml-0.5 -mr-1.5" />
        </Button>

        <HeroTitle className="animate-fade-in [--animation-delay:200ms] font-medium tracking-tightest">
          Linear is a better way
          <br className="hidden md:block" /> to build products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in [--animation-delay:400ms]">
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>

        <Button className="animate-fade-in [--animation-delay:600ms]" size='large'>
          Get started
          <ChevronIcon className="-rotate-90 ml-1.5" />
        </Button>

        <HeroImage />
      </Hero>
    </Container>
  )
}
