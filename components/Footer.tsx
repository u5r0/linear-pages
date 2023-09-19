import Link from "next/link";
import { Container } from ".";
import { Logo } from "./icons";
import { GitHub, Slack, Twitter } from "./logos";
import { FooterLinks as Links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-14 border-t border-gray-100 text-sm">
      {/* <Container className="flex flex-col lg:flex-row h-[56rem] lg:h-72"> */}
      <Container className="flex flex-col lg:flex-row justify-between leading-6">
        <div className="flex lg:flex-col justify-between lg:mr-auto text-gray-400">
          <Link href='/' className="flex items-center font-medium hover:text-gray-200 transition-colors">
            <Logo className="mr-2" /> Linear - Designed Worldwide
          </Link>
          <div className="mt-auto flex space-x-3 lg:space-x-6">
            <Twitter className="hover:text-gray-300" />
            <GitHub className="hover:text-gray-300" />
            <Slack className="hover:text-gray-300" />
          </div>
        </div>
        <div className="flex flex-wrap">
          {Links.map(column => (
            <div 
              key={column.title}
              className="mt-10 lg:mt-0 min-w-[50%] lg:min-w-72 text-gray-300"
            >
              <h3 className="mb-3.5 font-medium">{column.title}</h3>
              <ul>
                {column.links.map(link => (
                  <li key={link.label} className=" mb-3.5 last:mb-0 ">
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}
