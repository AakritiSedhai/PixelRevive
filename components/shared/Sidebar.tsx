"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-2 p-2"> {/* Reduced gap and padding */}
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={150} height={24} /> {/* Reduced logo size */}
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={15} // Reduced icon size
                        height={15} // Reduced icon size
                        className={`${isActive && 'brightness-200'}`}
                      />
                      <span className="text-sm">{link.label}</span> {/* Reduced font size */}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={15} // Reduced icon size
                        height={15} // Reduced icon size
                        className={`${isActive && 'brightness-200'}`}
                      />
                      <span className="text-sm">{link.label}</span> {/* Reduced font size */}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-2"> {/* Reduced padding */}
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <ul className="sidebar-nav_elements">
              {navLinks.map((link) => (
                <li key={link.route} className="sidebar-nav_element group text-gray-700">
                  <Link className="sidebar-link" href="/sign-in">
                    <Image 
                      src={link.icon}
                      alt="logo"
                      width={15} // Reduced icon size
                      height={15} // Reduced icon size
                    />
                    <span className="text-sm">{link.label}</span> {/* Reduced font size */}
                  </Link>
                </li>
              ))}
            </ul>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
