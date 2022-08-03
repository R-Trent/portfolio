import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import config from 'config'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects | ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container mx-auto py-12">
          <div className="-m-4 flex flex-wrap justify-center">
            {config.projects.map(({ slug, title, shortDescription, imgSrc, inProgress }) => (
              <Card
                key={slug}
                title={title}
                description={shortDescription}
                imgSrc={imgSrc}
                href={`/projects/${slug}`}
                inProgress={inProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
