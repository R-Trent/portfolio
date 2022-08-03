import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <footer>
      <div className="mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8">
        <span className="mt-2 text-xs font-light lg:mt-4">
          &copy; {year} {siteMetadata.author}
        </span>
      </div>
    </footer>
  )
}
