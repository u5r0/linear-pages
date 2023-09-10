import Link from "next/link";

import Logo from "./icons/Logo";
import { Button, Container } from "."
import ChevronIcon from "./icons/Chevron";
import { BlogIcon, CareersIcon, GroupIcon } from "./icons/company";
import HamburgerIcon from "./icons/Hamburger";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-gray-100 backdrop-blur-2xl">
      <Container className="flex h-12">
        <Link href='/' className="flex items-center font-semibold">
          <Logo className="mr-2"/> Linear
        </Link>
        <nav className="flex h-full">
          <ul className="flex items-center child:py-2 child:ml-6 font-medium text-sm hover:not-last:child:text-gray-300 child:transition-colors">
            <li className="hidden sm:block">
              <Link href='/'>Features</Link>
            </li>
            <li className="hidden sm:block">
              <Link href='/'>Method</Link>
            </li>
            <li className="hidden lg:block">
              <Link href='/'>Customers</Link>
            </li>
            <li className="hidden lg:block">
              <Link href='/'>Changelog</Link>
            </li>
            <li className="hidden lg:block">
              <Link href='/'>Integrations</Link>
            </li>
            <li className="hidden sm:block">
              <Link href='/'>Pricing</Link>
            </li>
            <li className="hidden sm:block">
              <Link href='/'>Contact</Link>
            </li>
            <li className="relative group hidden sm:block">
              <Link className="flex cursor-default" href='/'>
                Company 
                <ChevronIcon className="group-hover:rotate-180 ml-1" fill="currentColor" />
              </Link>
              <div className="invisible group-hover:visible hover:visible absolute top-8 -left-4 h-30 w-52 rounded-lg bg-black p-1.5">
                <ul className="[&_a]:flex [&_a]:items-center [&_a]:px-3 [&_a]:h-9 w-full text-gray-400 hover:child:text-gray-200">
                  <li>
                    <Link href='/'>
                      <GroupIcon className="mr-3" />About
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <BlogIcon className="mr-3" />Blog
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <CareersIcon className="mr-3" />Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center h-full text-sm">
          <Link className="tracking-wide font-[450] hover:text-gray-300 whitespace-nowrap" href='/'>Log in</Link>
          <Button className="ml-6" href="/">Sign up</Button>
          <HamburgerIcon className=" ml-6 sm:hidden" />
        </div>
      </Container>
    </header>
  )
}
