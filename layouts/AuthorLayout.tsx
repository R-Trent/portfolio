import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import ModernStackList from '@/components/list/ModernStackList'
import { AboutStack } from 'config/stack'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company } = content

  return (
    <>
      <PageSEO title={`About | ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
              placeholder="blur"
              blurDataURL={avatar}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="mt-4 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 text-black dark:prose-dark xl:col-span-2">
            {children}
            <div className="mt-8">
              <Link href="/resume">
                <p className="font-medium text-black underline decoration-sky-400 decoration-solid decoration-4 underline-offset-4 transition duration-500 ease-in-out hover:decoration-indigo-600 dark:text-white">
                  View Resume
                </p>
              </Link>
              <h2 className="mt-8 mb-4 text-2xl font-semibold dark:text-white">Competencies</h2>
              <ModernStackList stack={AboutStack} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
