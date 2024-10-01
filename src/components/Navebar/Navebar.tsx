"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaPlane, FaBed, FaCar, FaHeart, FaChevronDown, FaBars, FaGlobe } from 'react-icons/fa'

const menuItems = [
    { icon: <FaBed />, label: 'Hotels', href: '/hotels', isActive: true },
    { icon: <FaPlane />, label: 'Flights', href: '/flights', isActive: false },
  { icon: <FaCar />, label: 'Car Hire', href: '/car-hire', isActive: false },
]

const navmenuItems = [
    { icon: <FaPlane />, label: 'Flights', href: '/flights', isActive: true },
    { icon: <FaBed />, label: 'Hotels', href: '/hotels', isActive: false },
    { icon: <FaCar />, label: 'Car Rental', href: '/car-hire', isActive: false },
  ]

export default function Navebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#01223f]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-white text-xl md:text-2xl font-bold flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="white"/>
              <path d="M21.5 10.5L13.5 18.5L10.5 15.5" stroke="#01223f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Travel
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2">
              {navmenuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className={`text-white hover:bg-[#05367f] hover:rounded-[4px] flex items-center gap-2 px-3 py-2  ${item.isActive ? '' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
         
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-[#05367f] flex items-center gap-2">
                  <FaGlobe />
                  English (UK)
                  <FaChevronDown className="text-xs" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <FaGlobe className="mr-2" /> English (UK)
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FaGlobe className="mr-2" /> Pakistan Rs PKR
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-white text-[#01223f] hover:bg-gray-200 rounded-full px-4 py-2">
              Log in
            </Button>
          </div>
          <Button variant="ghost" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </Button>
        </div>
        <div className="hidden md:flex py-2">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className={`text-white hover:bg-[#05367f] flex items-center gap-2 px-4 py-2 rounded-full ${item.isActive ? 'bg-[#05367f]' : ''}`}
            >
              {React.cloneElement(item.icon, { className: item.isActive ? 'text-[#05c3fb]' : '' })}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-[#05367f] p-4">


            <div className=' flex justify-end gap-4 container'>
       {navmenuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className={`text-white  hover:bg-[#05367f]  mb-2`}
            >
                
              
              {item.label}
            </Link>
          ))}
          </div>

          {menuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className={`text-white hover:bg-[#05367f] flex items-center gap-2 px-4 py-2 rounded-full ${item.isActive ? 'bg-[#05367f]' : ''} w-full mb-2`}
            >
              {React.cloneElement(item.icon, { className: item.isActive ? 'text-[#05c3fb]' : '' })}
              {item.label}
            </Link>
          ))}
          <Button variant="ghost" className="text-white w-full justify-start mt-2">
            <FaHeart className="mr-2" /> Favorites
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white w-full justify-start mt-2">
                <FaGlobe className="mr-2" />
                English (UK)
                <FaChevronDown className="ml-auto" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <FaGlobe className="mr-2" /> English (UK)
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FaGlobe className="mr-2" /> Pakistan Rs PKR
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-white text-[#01223f] hover:bg-gray-200 w-full mt-2">
            Log in
          </Button>
        </div>
      )}
    </nav>
  )
}