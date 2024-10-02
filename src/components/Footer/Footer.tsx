"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const footerLinks = [
  { title: 'Cookie policy', href: '/cookie-policy' },
  { title: 'Privacy policy', href: '/privacy-policy' },
  { title: 'Terms of service', href: '/terms' },
  { title: 'Company Details', href: '/company-details' },
]
const footerLinks2 = [
    { title: 'Help', href: '/help' },
    { title: 'Privacy Settings', href: '/privacy-settings' },
    { title: 'Log in', href: '/login' },
]

const dropdownSections = [
  { title: 'Explore', items: ['Item 1', 'Item 2', 'Item 3'] },
  { title: 'Company', items: ['About', 'Careers', 'Press'] },
  { title: 'Partners', items: ['Partner 1', 'Partner 2', 'Partner 3'] },
  { title: 'Trips', items: ['Trip 1', 'Trip 2', 'Trip 3'] },
]

const internationalSites = [
  { flag: '🇬🇧', text: 'Hotels', href: '#' },
  { flag: '🇦🇺', text: 'Hotels', href: '#' },
  { flag: '🇨🇳', text: '酒店', href: '#' },
  { flag: '🇯🇵', text: 'ホテル', href: '#' },
  { flag: '🇮🇹', text: 'Hoteles', href: '#' },
  { flag: '🇷🇺', text: 'Отели', href: '#' },
  { flag: '🇮🇳', text: 'Hotels', href: '#' },
  { flag: '🇺🇸', text: 'Hotels Deals in Popular Cities', href: '#' },
]

const DropdownSection = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center gap-10 justify-between w-full text-left text-white py-2">
        {title}
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <Link href="#" className="text-gray-300 hover:text-white">
              {item}
            </Link>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[#01223f] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          {/* First Column: Select box */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <Select>
              <SelectTrigger className="w-full bg-[#05367f] text-white">
                <SelectValue placeholder="Pakistan - English (UK) - Rs PKR" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pk">Pakistan - English (UK) - Rs PKR</SelectItem>
                {/* Add more country options here */}
              </SelectContent>
            </Select>
          </div>

          {/* Second Column: Footer Links */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <nav>
              <ul className="space-y-2">
                {footerLinks2.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Second Column: Footer Links */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <nav>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Third Column: Dropdown Sections */}
          <div className="">
            <div className="flex flex-col gap-4">
              {dropdownSections.map((section, index) => (
                <div key={index}>
                  <DropdownSection title={section.title} items={section.items} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>© Recab Ltd 2002 – 2024</p>
        </div>
      </footer>

      {/* International Sites Section */}
      <div className="px-4 py-5 bg-slate-400">
        <h2 className="text-xl font-bold mb-4 text-center">International Sites</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {internationalSites.map((site, index) => (
            <Link key={index} href={site.href} className="hover:underline flex justify-center">
              <span className="mr-2">{site.flag}</span>
              {site.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
