import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Link from '@/components/Link'

export default function Resume() {
  return (
    <>
      <PageSEO title={`Resume | ${siteMetadata.author}`} description={siteMetadata.description} />
      <Link
        href="/about"
        className="text-base font-medium leading-6 text-sky-400 transition duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-sky-300"
        aria-label={'Back to About'}
      >
        &larr; Back
      </Link>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
        </div>
        <div className="pt-4">
          <Image
            alt="My Resume"
            src="/static/images/resume.jpg"
            className=" object-cover object-center transition duration-500 ease-in-out md:h-36 lg:h-48"
            width={544}
            height={750}
            placeholder="blur"
            blurDataURL="/static/images/resume.jpg"
            layout="responsive"
          />
          <div className="flex justify-center pt-4">
            <Link href="/static/resume.pdf" target="_blank" download="Ryan Trent - Resume.pdf">
              <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-8 py-4 text-base font-semibold leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
                Download
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
