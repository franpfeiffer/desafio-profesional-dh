"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"

export function Nav({ children, logoSrc }: { children: ReactNode, logoSrc: string }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-between items-center px-4 py-2">
      <Link href="/" passHref>
        <img src={logoSrc} alt="Logo" className="h-20 w-20" />
      </Link>
      <div className="flex space-x-4 items-center">
        {children}
      </div>
      <div className="flex space-x-2 md:space-x-4 flex-col md:flex-row items-center">
        <button className="bg-secondary text-secondary-foreground py-2 px-4 rounded transition transform hover:bg-secondary-dark hover:text-secondary-foreground-dark hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary text-sm md:text-base">
          Crear cuenta
        </button>
        <button className="bg-secondary text-secondary-foreground py-2 px-4 rounded transition transform hover:bg-secondary-dark hover:text-secondary-foreground-dark hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary text-sm md:text-base">
          Iniciar sesión
        </button>
      </div>
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  )
}
