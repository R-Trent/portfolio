import Image from './Image'
import Link from './Link'

const components = {
  web: '/static/glyphs/hyperlink.svg',
  tweak: '/static/glyphs/hyperlink.svg',
  ios: '/static/glyphs/appstore.svg',
  support: '/static/glyphs/questionmark.svg',
  code: '/static/glyphs/code.svg',
}

const titles = {
  web: 'Visit Site',
  tweak: 'Learn More',
  ios: 'Download on the App Store',
  support: 'Get App Support',
  code: 'View Source Code',
}

const LinkButton = ({ kind, link }) => {
  const imgSrc = components[kind]
  const title = titles[kind]

  return (
    <div style={{ minWidth: '140px', maxWidth: '200px' }}>
      <Link
        href={link}
        className={`${
          imgSrc && 'h-full'
        } flex items-center justify-evenly rounded-xl border-2 border-gray-200 border-opacity-60 p-3 hover:border-sky-300 dark:border-gray-700 dark:hover:border-sky-300`}
      >
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center dark:invert"
          width={20}
          height={20}
          objectFit="contain"
        />
        <p className="ml-3 text-center text-sm font-semibold dark:text-white">{title}</p>
      </Link>
    </div>
  )
}

export default LinkButton
