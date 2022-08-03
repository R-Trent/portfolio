import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, inProgress }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-3xl border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="drop-shadow">
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
                placeholder="blur"
                blurDataURL={imgSrc}
              />
            </div>
          </Link>
        ) : (
          <div>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
              placeholder="blur"
              blurDataURL={imgSrc}
            />
          </div>
        ))}
      {!imgSrc && (
        <div className="flex justify-center">
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="drop-shadow">
              <Image
                alt="Error"
                src="https://via.placeholder.com/544x306.webp?text=Image+Not+Yet+Available"
                className="object-contain object-center md:h-36 lg:h-48"
                width={544}
                height={306}
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/544x306.webp?text=Image+Not+Yet+Available"
              />
            </div>
          </Link>
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-row justify-between">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          {inProgress && (
            <h3 className="mb-3 ml-3 max-h-8 min-w-max rounded-lg bg-sky-400 px-3 text-center text-sm font-medium leading-8 tracking-tight text-white">
              In Progress
            </h3>
          )}
        </div>

        <p className="prose mb-3 max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-sky-400 transition duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-sky-300"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
