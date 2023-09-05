import Container from "@/components/Container"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero 
            title="Linear is better way to build products"
            subtitle="Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps."
          />
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </>
  )
}
