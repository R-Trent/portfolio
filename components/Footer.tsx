import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <footer className="absolute bottom-0 h-10 w-full">
      <span className="mt-2 flex flex-col items-center text-xs font-light font-light dark:text-white lg:mt-4 lg:py-8">
        &copy; {year} {siteMetadata.author}
      </span>
    </footer>
  )
}
