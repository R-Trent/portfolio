import Link from '../Link'
import Image from '../Image'

const AppStoreButton = ({ applink }) => {
  return (
    <div style={{ minWidth: '140px', maxWidth: '200px' }}>
      <Link href={applink} className={`flex h-full items-stretch rounded-xl`}>
        <Image
          alt="Download on the App Store"
          src="/static/glyphs/appstore.svg"
          className="object-cover object-center dark:invert"
          width={140}
          height={48}
          placeholder="blur"
          blurDataURL="/static/glyphs/appstore.svg"
          objectFit="fill"
        />
      </Link>
    </div>
  )
}

export default AppStoreButton
