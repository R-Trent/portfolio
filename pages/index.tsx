import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Banner from '@/components/IndexBanner'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Banner />
    </>
  )
}
