import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.gif"

export default function Navbar(){
  return (
    <nav>
      <Image
      src={Logo}
      alt='logo pic'
      width={70}
      quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">DashBoard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
