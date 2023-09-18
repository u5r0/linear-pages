'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "./icons/Logo";
import { NavBar, Button, Container } from ".";
import { HamburgerIcon } from "./icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setIsOpen]);

    // Bug: https://github.com/tailwindlabs/tailwindcss/issues/11524 
    // <li className="hidden lg:block">
    //   <Link href=''>Integrations</Link>
    // </li>

  return (
    <header className="fixed top-0 left-0 w-full border-b z-10 border-gray-100 backdrop-blur-2xl">
      <Container className="flex h-12">
        <Link href='/' className="flex items-center font-semibold">
          <Logo className="mr-2"/> Linear
        </Link>
        <NavBar isOpen={isOpen} />

        <div className="ml-auto flex items-center h-full text-sm">
          <Link className="font-medium hover:text-gray-300 whitespace-nowrap" href='/'>Log in</Link>
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
