import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [keyword, setKeyword] = useState(null)
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!keyword) return
    router.push(`/search?query=${keyword.trim()}&type=All`)
  }
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google-icon.svg" />
      </Head>

      {/* Header */}
      <Header />
      {/* Body */}
      <form
        className="my-10 flex h-screen flex-grow flex-col items-center px-1 md:my-20 md:px-0"
        onSubmit={(e) => handleSubmit(e)}
      >
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="mt-5 flex w-full items-center rounded-full border border-gray-200 bg-white px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <BiSearchAlt2 className="mr-3 h-5 w-5 text-gray-500" />
          <input
            value={keyword}
            className="flex-grow focus:outline-none"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <RiCloseFill
            onClick={() => setKeyword('')}
            className={`h-6 w-6 cursor-pointer text-gray-500 transition-all duration-300 hover:scale-125  ${
              !keyword && 'hidden'
            }`}
          />
          <div className=" mx-1.5  h-6 border-l-2 border-gray-200 sm:mr-1" />
          <img src="/google-mic.svg" alt="" className="h-6 w-6 flex-none" />
        </div>
        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button
            onClick={(e) => handleSubmit(e)}
            className="rounded-md bg-white p-3 text-sm text-gray-800 shadow-lg ring-gray-200 hover:shadow-md hover:ring-1 focus:outline-none active:ring-gray-300"
          >
            Google Search
          </button>
          <button className="rounded-md bg-white p-3 text-sm text-gray-800 shadow-lg ring-gray-200 hover:shadow-md hover:ring-1 focus:outline-none active:ring-gray-300">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
