import {
  BiSearchAlt2,
  BiNews,
  BiImages,
  BiDotsVerticalRounded,
  BiBookBookmark,
  BiMoviePlay,
} from 'react-icons/bi'
import { useRouter } from 'next/router'
export default function HeaderOptions() {
  const router = useRouter()
  console.log(router.query.type)
  return (
    <div className="flex w-full justify-evenly border-b text-sm lg:justify-start lg:space-x-36 lg:pl-52 lg:text-base">
      <div className="flex space-x-6">
        <div
          onClick={() =>
            router.push(`/search?query=${router.query.query}&type=All`)
          }
          className={`headeroptionitem ${
            router.query.type === 'All' && 'border-blue-500 text-blue-500'
          } `}
        >
          <BiSearchAlt2 className="h-4 w-4" />
          <p className="hidden sm:inline-flex">All</p>
        </div>

        <div
          onClick={() =>
            router.push(`/search?query=${router.query.query}&type=News`)
          }
          className={`headeroptionitem ${
            router.query.type === 'News' && 'border-blue-500 text-blue-500'
          }`}
        >
          <BiNews className="h-4 w-4" />
          <p className="hidden sm:inline-flex">News</p>
        </div>

        <div
          onClick={() =>
            router.push(`/search?query=${router.query.query}&type=Books`)
          }
          className={`headeroptionitem ${
            router.query.type === 'Books' && 'border-blue-500 text-blue-500'
          }`}
        >
          <BiBookBookmark className="h-4 w-4" />
          <p className="hidden sm:inline-flex">Books</p>
        </div>

        <div
          onClick={() =>
            router.push(`/search?query=${router.query.query}&type=Videos`)
          }
          className={`headeroptionitem ${
            router.query.type === 'Videos' && 'border-blue-500 text-blue-500'
          }`}
        >
          <BiMoviePlay className="h-4 w-4" />
          <p className="hidden sm:inline-flex">Videos</p>
        </div>

        <div
          onClick={() =>
            router.push(`/search?query=${router.query.query}&type=Images`)
          }
          className={`headeroptionitem ${
            router.query.type === 'Images' && 'border-blue-500 text-blue-500'
          }`}
        >
          <BiImages className="h-4 w-4" />
          <p className="hidden sm:inline-flex">Images</p>
        </div>

        <div
          onClick={() =>
            router.push(`/search?query=${router.query.query}&type=More`)
          }
          className={`headeroptionitem ${
            router.query.type === 'More' && 'border-blue-500 text-blue-500'
          }`}
        >
          <BiDotsVerticalRounded className="h-4 w-4" />
          <p className="hidden sm:inline-flex">More</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  )
}
