import { ReactNode } from 'react'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="mx-auto max-w-3xl px-4 pb-10 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
        <Footer />
      </div>
    </>
  )
}
