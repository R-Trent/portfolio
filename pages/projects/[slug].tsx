import siteMetadata from '@/data/siteMetadata'
import Conditional from '@/components/Conditional'
import { PageSEO } from '@/components/SEO'
import config from 'config'
import type { Project, SubProject } from 'config/projects'
import { defaultDimensions } from 'config/projects'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from '@/components/Image'
import React, { useCallback } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import ModernStackList from '@/components/list/ModernStackList'
import ModernDeploymentList from '@/components/list/ModernDeploymentList'
import Link from '@/components/Link'

const { projects } = config

export async function getStaticPaths() {
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  project: Project
}> = async ({ params }) => {
  const project = projects.find((project) => project.slug === params.slug)

  return {
    props: {
      project,
    },
  }
}

export default function Project({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    description,
    shortDescription,
    imgSrc,
    dimensions,
    stack,
    deployment,
    screenshots,
    subProjects,
    inProgress,
    links,
  } = project

  const [height, width] = dimensions ?? defaultDimensions

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      }

      return (
        <div
          className="bg-placeholder-light dark:bg-placeholder-dark mr-2 flex-shrink-0 overflow-hidden rounded-xl"
          style={style}
        >
          <Image
            loading="eager"
            src={screenshot}
            height={height}
            width={width}
            objectFit="cover"
            alt={`Screenshot of ${title}`}
            placeholder="blur"
            className="rounded-xl !border-2"
            blurDataURL={screenshot}
          />
        </div>
      )
    },
    [height, width]
  )

  const renderSubProjectList = useCallback(
    ({ title, deployment, description }: SubProject) => (
      <>
        <h3 className="mb-1 text-lg font-semibold dark:text-white">{title}</h3>
        <Conditional condition={!!deployment}>
          <ModernDeploymentList deployment={deployment} />
        </Conditional>
        <p className="mt-2 mb-4 font-light">{description}</p>
      </>
    ),
    []
  )

  const hasDeployments = !!deployment
  const hasLinks = !!links
  const hasScreenshots = !!screenshots.length
  const hasSubProjects = !!subProjects.length

  return (
    <>
      <PageSEO
        title={`${title} | Projects | ${siteMetadata.author}`}
        description={shortDescription || description}
        imageUrl={imgSrc}
      />
      <Link
        href="/projects"
        className="text-base font-medium leading-6 text-sky-400 transition duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-sky-300"
        aria-label={'Back to Projects'}
      >
        &larr; Back
      </Link>
      <div className="my-4 flex flex-row items-center justify-start">
        <h1 className="lg:text-5x mr-8 text-3xl font-bold dark:text-white">{title}</h1>
        {inProgress && (
          <h3 className="text-md max-h-8 min-w-max rounded-lg bg-sky-400 px-3 text-center font-medium leading-8 tracking-tight text-white">
            In Progress
          </h3>
        )}
      </div>
      <p className="mb-4 font-light">{description}</p>

      <h2 className="mb-0 text-2xl font-semibold dark:text-white">Stack</h2>
      <ModernStackList stack={stack} justify="start" />

      <Conditional condition={hasLinks}>
        <h2 className="my-4 text-2xl font-semibold dark:text-white">Links</h2>
        <ModernDeploymentList deployment={links} app={title} />
      </Conditional>

      <Conditional condition={hasDeployments}>
        <h2 className="my-4 text-2xl font-semibold dark:text-white">Deployments</h2>
        <ModernDeploymentList deployment={deployment} />
      </Conditional>

      <Conditional condition={hasScreenshots}>
        <h2 className="my-4 mb-4 text-2xl font-semibold dark:text-white">Screenshots</h2>
        <ScrollContainer
          className="list mt-4 mb-1 flex overflow-auto rounded"
          hideScrollbars={false}
        >
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>

      <Conditional condition={hasSubProjects}>
        <h2 className=" mb-4 mt-4 text-2xl font-semibold dark:text-white">Subprojects</h2>
        <p className="mt-1 mb-4 font-light">Additional projects related to this project</p>
        {React.Children.toArray(subProjects.map(renderSubProjectList))}
      </Conditional>
    </>
  )
}
