import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
export default function PaginationButtons() {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0
  return (
    <div className="flex max-w-lg justify-between pb-10 text-blue-700">
      {startIndex >= 10 && (
        <Link
          href={`/search?query=${router.query.query}&type=${
            router.query.type
          }&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow cursor-pointer flex-col items-center hover:underline">
            <MdKeyboardArrowLeft className="h-5 w-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link
        href={`/search?query=${router.query.query}&start=${startIndex + 10}`}
      >
        <div className="flex flex-grow cursor-pointer flex-col items-center hover:underline">
          <MdKeyboardArrowRight className="h-5 w-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}
