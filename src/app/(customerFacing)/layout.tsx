import { Nav, NavLink } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const dynamic = "force-dynamic"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav logoSrc="./logo.png">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Productos</NavLink>
        <NavLink href="/orders">Mis Compras</NavLink>
      </Nav>
      <div className="container my-6 mb-24">{children}</div>
      <Footer />
    </>
  )
}
