import SearchPageHeader from '../components/SearchPageHeader'
import Response from '../../Response'
import SearchResults from '../components/SearchResults'
import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Search({ results }) {
  const router = useRouter()
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Search | {router.query.query}</title>
        <link rel="icon" href="/google-icon.svg" />
      </Head>
      <SearchPageHeader />
      <SearchResults results={results} />
    </div>
  )
}

export async function getServerSideProps(contex) {
  const useDummyData = true
  const startIndex = contex.query.start || '0'

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${contex.query.query}&start=${startIndex}`
      ).then((res) => res.json())

  return {
    props: {
      results: data,
    },
  }
}
