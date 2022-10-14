import Link from '../Link'

const AppStoreButton = ({ applink }) => {
  return (
    <div style={{ minWidth: '140px', maxWidth: '200px' }}>
      <Link href={applink} className={`flex h-full items-center items-stretch rounded-xl`}>
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1665532800&h=787ae4514f03be53939eece7de396b19"
          alt="Download on the App Store"
          object-fit="contain"
        ></img>
      </Link>
    </div>
  )
}

export default AppStoreButton
