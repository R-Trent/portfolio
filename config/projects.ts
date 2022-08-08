import { Maybe, Tuple } from '../types'
import { Stack } from './stack'

export type Deployment = {
  web?: string
  android?: string
  ios?: string
  tweak?: string
  code?: string
  support?: { pathname: string; query: { app: string } }
  privacy?: { pathname: string; query: { app: string } }
}

export interface SubProject {
  title: string
  description: string
  repository: Maybe<string>
  deployment: Deployment
}

export const defaultDimensions: Tuple<number> = [450, 220]

export interface Project {
  title: string
  slug: string
  website: string
  imgSrc: string
  description: string
  shortDescription?: string
  repository: Maybe<string>
  stack: Stack[]
  dimensions?: Tuple<number> // Tuple of [height, width]
  screenshots: string[]
  deployment: Deployment
  subProjects: SubProject[]
  inProgress?: boolean
  links?: Deployment
}

export const projects: Project[] = [
  {
    title: 'Word Helper',
    slug: 'word-helper',
    imgSrc: '/static/images/project_images/wordhelper/banner.png',
    website: 'https://repo.dynastic.co/package/groups',
    description:
      "An iOS application that helps players of the game 'Wordle' find words based on their current game.",
    shortDescription:
      'An iOS application that helps players of the game "Wordle" find words based on their current game.',
    repository: 'https://repo.dynastic.co/package/groups',
    stack: [Stack.swift, Stack.swiftui],
    screenshots: [
      '/static/images/project_images/wordhelper/screenshot1.png',
      '/static/images/project_images/wordhelper/screenshot2.png',
      '/static/images/project_images/wordhelper/screenshot3.png',
      '/static/images/project_images/wordhelper/screenshot4.png',
    ],
    deployment: null,
    links: {
      code: 'https://github.com/R-Trent/word-helper',
      support: { pathname: '/support', query: { app: 'Word Helper' } },
      privacy: { pathname: '/privacy', query: { app: 'Word Helper: Wordle Solver' } },
    },
    subProjects: [],
    inProgress: false,
  },
  {
    title: 'Portfolio Website',
    slug: 'portfolio',
    imgSrc: '/static/images/project_images/portfolio/banner.png',
    website: 'https://ryantrent.com',
    description:
      "A responsive website that I am building to share information about myself and to showcase the projects that I've worked on.",
    shortDescription:
      "A responsive website that I am building to share information about myself and to showcase the projects that I've worked on.",
    repository: 'https://github.com/R-Trent/portfolio',
    stack: [Stack.typescript, Stack.next, Stack.css],
    screenshots: [
      '/static/images/project_images/portfolio/screenshot1.png',
      '/static/images/project_images/portfolio/screenshot2.png',
      '/static/images/project_images/portfolio/screenshot3.png',
      '/static/images/project_images/portfolio/screenshot4.png',
    ],
    dimensions: [360, 640],
    deployment: null,
    links: {
      code: 'https://github.com/R-Trent/portfolio',
    },
    subProjects: [],
    inProgress: false,
  },
  {
    title: '"McDe\'s" Website',
    slug: 'mcdes',
    imgSrc: '/static/images/project_images/mcdes/banner.png',
    website: 'https://repo.dynastic.co/package/groups',
    description:
      'A responsive website that I am building for a local concrete company that needed their website updated/redesigned.',
    shortDescription:
      'A responsive website that I am building for a local concrete company that needed their website updated/redesigned.',
    repository: 'https://repo.dynastic.co/package/groups',
    stack: [Stack.javascript, Stack.html, Stack.css, Stack.bootstrap],
    screenshots: [
      '/static/images/project_images/mcdes/banner.png',
      // '/static/images/project_images/mcdes/screenshot1.png',
      '/static/images/project_images/mcdes/screenshot2.png',
      '/static/images/project_images/mcdes/screenshot3.png',
      '/static/images/project_images/mcdes/screenshot4.png',
    ],
    dimensions: [360, 640],
    deployment: null,
    subProjects: [],
    inProgress: true,
  },
  {
    title: '"Saint Luna" Website',
    slug: 'saint-luna',
    imgSrc: '/static/images/project_images/saintluna/banner.png',
    website: 'https://saintluna.me',
    repository: 'https://github.com/R-Trent/Saint-Luna-Website',
    shortDescription: 'A responsive website that I built for a newly formed, San Diego based band.',
    description: 'A responsive website that I built for a newly formed, San Diego based band.',
    stack: [Stack.javascript, Stack.html, Stack.css],
    screenshots: [
      '/static/images/project_images/saintluna/banner.png',
      '/static/images/project_images/saintluna/screenshot1.png',
      '/static/images/project_images/saintluna/screenshot2.png',
      '/static/images/project_images/saintluna/screenshot3.png',
      '/static/images/project_images/saintluna/screenshot4.png',
    ],
    dimensions: [360, 640],
    deployment: {
      web: 'https://saintluna.me',
    },
    subProjects: [],
  },
  {
    title: 'Groups',
    slug: 'groups',
    imgSrc: '/static/images/project_images/groups/banner.png',
    website: 'https://havoc.app/package/groups',
    description:
      'An iOS jailbreak tweak that allows users to organize the conversations within the native Messages app.',
    shortDescription:
      'An iOS jailbreak tweak that allows users to organize the conversations within the native Messages app.',
    repository: 'https://havoc.app/package/groups',
    stack: [Stack.obj_c],
    screenshots: [
      '/static/images/project_images/groups/screenshot1.png',
      '/static/images/project_images/groups/screenshot2.png',
      '/static/images/project_images/groups/screenshot3.png',
      '/static/images/project_images/groups/screenshot4.png',
    ],
    deployment: {
      tweak: 'https://havoc.app/package/groups',
    },
    subProjects: [],
  },
]
