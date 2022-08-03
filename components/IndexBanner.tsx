import Link from '@/components/Link'

function Banner(): React.ReactElement {
  return (
    <>
      <div className="banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hi there! I'm Ryan.</h1>
        <p className="my-2 text-lg lg:my-4 lg:text-2xl">Software Developer</p>
        <p className="font-light lg:text-xl">
          Learn more
          <Link
            className="ml-1.5 mr-1.5 font-normal text-black underline decoration-sky-400 decoration-4 underline-offset-4 hover:decoration-indigo-600 dark:text-white"
            href="/about"
          >
            about me
          </Link>
          or take a look at some of the
          <Link
            className="ml-1.5 mr-1.5 font-normal text-black underline decoration-sky-400 decoration-4 underline-offset-4 hover:decoration-indigo-600 dark:text-white"
            href="/projects"
          >
            projects
          </Link>
          I've been working on!
        </p>
      </div>
    </>
  )
}

export default Banner
