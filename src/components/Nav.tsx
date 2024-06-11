"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name:"home",
    path:"/"
  },
  {
    name:"service",
    path:"/service"
  },
  {
    name:"resume",
    path:"/resume"
  },
  {
    name:"work",
    path:"/work"
  },
  {
    name:"contact",
    path:"/contact"
  },
]
export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {
        links.map((link, index) => {
          return (
            <Link href={link.path} key={index} className={`capitalize font-medium transition-colors ${
              link.path === pathname ? 'text-accent border-b-2 border-accent' : 'hover:text-accent'
            }`}>
              {link.name}
            </Link>
          );
        })
      }
    </nav>
  );
}