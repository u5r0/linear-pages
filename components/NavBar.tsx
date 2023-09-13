import Link from "next/link";

import { cn } from "@/lib/utils"
import { NavLinks as Links } from "@/lib/data"
import { ChevronIcon } from "./icons";

const NavBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={cn("sm:visible", isOpen ? "visible" : "invisible")}>
      <nav className={cn(
        "fixed top-12 left-0 w-full h-[calc(100vh_-_var(--nav-height))] sm:h-auto bg-black overflow-auto sm:overflow-visible sm:bg-transparent sm:relative sm:top-0 sm:text-sm",
        "transition-opacity duration-500 sm:opacity-100 sm:transition-none",
        isOpen ? "opacity-100" : "opacity-0"

      )}>
        <ul className="flex flex-col sm:flex-row sm:items-center font-medium pb-6 px-6 sm:p-0">
          {Links.map(link => (
            <li
              key={link.label}
              className={cn(
                "border-b border-gray-500/60 sm:border-none sm:ml-6", 
                "ease-in translate-y-3 sm:translate-y-0 transition-[color,transform] duration-300 sm:transition-none",
                { "translate-y-0" : isOpen }, link.className
              )}
            >
              {link.label === 'Company' 
                ? <CompanyMenu />
                : (
                    <Link href='' className="flex items-center h-12 hover:text-gray-400">
                      {link.label}
                    </Link>
                  )
              }
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const CompanyMenu = () => {
  return (
    <div className="relative group hidden sm:block ">
      <Link className="flex items-center cursor-default h-12" href=''>
        Company <ChevronIcon className="group-hover:rotate-180 ml-1" />
      </Link>
      <div className="hidden group-hover:block absolute top-10 -left-4 h-30 w-52 rounded-lg bg-black p-1.5">
        <ul>
          {Links.slice(-3).map(link => (
            <li 
              key={link.label}
              className=" w-full text-gray-400 hover:text-gray-200 hover:bg-slate-900 rounded-md"
            >
              <Link href='' className="flex items-center px-3 h-9">
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar