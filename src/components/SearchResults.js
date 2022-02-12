import PaginationButtons from './PaginationButtons'
import { useRouter } from 'next/router'
export default function SearchResults({ results }) {
  const router = useRouter()
  return (
    <>
      {router.query.type !== 'All' ? (
        <div className="mx-auto mt-5 w-full px-3 text-xl font-semibold sm:pl-[5%] md:pl-[14%] lg:pl-52">
          {router.query.type} Feature is Comming Soon...
        </div>
      ) : (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
          <p className="mb-5 mt-3 text-sm text-gray-600">
            About {results?.searchInformation?.formattedTotalResults} results (
            {results?.searchInformation?.formattedSearchTime} seconds)
          </p>

          {results.items?.map((result) => (
            <div key={result.link} className="mb-8 max-w-xl">
              <div className="group">
                <a href={result.link} className=" text-sm line-clamp-1">
                  {result.formattedUrl}
                </a>
                <a href={result.link}>
                  <h2 className="my-0.5 truncate text-xl font-medium text-blue-800 group-hover:underline">
                    {result.title}
                  </h2>
                </a>
              </div>
              <p className=" text-sm text-gray-600 line-clamp-2">
                {result.snippet}
              </p>
            </div>
          ))}
          <PaginationButtons />
        </div>
      )}
    </>
  )
}
