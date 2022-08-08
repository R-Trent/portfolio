import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-full flex-col justify-between">
        <header className="sticky top-0 z-40 flex items-center justify-between bg-white/95 py-8 duration-500 ease-in-out dark:bg-gray-900/95">
          <div>
            <Link href="/" aria-label="RT">
              <div className="flex items-center justify-between">
                <p className="rounded-lg bg-sky-400 p-1.5 text-xl font-semibold text-white ease-in-out">
                  RT
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-10">{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
