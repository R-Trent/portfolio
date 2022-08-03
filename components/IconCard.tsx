import Image from './Image'

const components = {
  swift: '/static/images/stack_images/swift.svg',
  python: '/static/images/stack_images/python.svg',
  html: '/static/images/stack_images/html.svg',
  javaScript: '/static/images/stack_images/js.svg',
  objc: '/static/images/stack_images/objc.svg',
  swiftui: '/static/images/stack_images/swiftui.svg',
  css: '/static/images/stack_images/css.svg',
  react: '/static/images/stack_images/react.svg',
  bootstrap: '/static/images/stack_images/bootstrap.svg',
  typeScript: '/static/images/stack_images/typescript.svg',
  next: '/static/images/stack_images/next-js.svg',
}

const IconCard = ({ title, kind }) => {
  const imgSrc = components[kind]

  return (
    <div className="mt-4" style={{ maxWidth: '120px', width: '120px' }}>
      <div
        className={`${
          imgSrc && 'h-full'
        } flex flex-col rounded-3xl border-2 border-gray-200 border-opacity-60 p-4 dark:border-gray-700`}
      >
        <Image
          alt={title}
          src={imgSrc}
          className="rounded-3xl object-cover object-center"
          width={75}
          height={75}
          placeholder="blur"
          blurDataURL={imgSrc}
          objectFit="contain"
        />
        <p className="mb-0 mt-2 flex justify-center text-sm font-semibold tracking-tight dark:text-white">
          {title}
        </p>
      </div>
    </div>
  )
}

export default IconCard
