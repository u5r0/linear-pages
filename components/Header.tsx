'use client';

import Link from "next/link";
import { useState } from "react";

import Logo from "./icons/Logo";
import { NavBar, Button, Container } from ".";
import { HamburgerIcon } from "./icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full border-b  border-gray-100 backdrop-blur-2xl">
      <Container className="flex h-12">
        <Link href='/' className="flex items-center font-semibold">
          <Logo className="mr-2"/> Linear
        </Link>
        <NavBar isOpen={isOpen} />

        <div className="ml-auto flex items-center h-full text-sm">
          <Link className="tracking-wide font-[450] hover:text-gray-300 whitespace-nowrap" href='/'>Log in</Link>
          <Button className="sticky right-0 ml-6" href="/">Sign up</Button>
        </div>

        <button className="ml-6 sm:hidden" onClick={() => setIsOpen(open => !open)}>
          <span className="sr-only border-none">Toggle navigation menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}
