import React from 'react'
import { Button } from './ui/button'
import {MenuIcon, MountainIcon } from 'lucide-react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-white border-b border-gray-200 rounded-b-lg shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <MountainIcon className="h-6 w-6" />
          <div>VeMax</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Products
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </nav>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </div>
    </header>
  )
}

export default Navbar
