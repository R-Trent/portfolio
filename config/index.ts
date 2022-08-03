import { Project, projects } from './projects'

interface Config {
  projects: Project[]
}

const config: Config = {
  projects,
}

export const POSTS_PER_PAGE = 8

export default config
