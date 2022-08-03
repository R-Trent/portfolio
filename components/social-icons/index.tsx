import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from '@/components/social-icons/linkedin.svg'
import Link from '@/components/Link'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
}

const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <Link
      className="text-sm text-gray-500 hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-sky-400 h-${8} w-${8}`}
      />
    </Link>
  )
}

export default SocialIcon
