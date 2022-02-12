import { useRouter } from 'next/router'
import { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoApps } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import HeaderOptions from './HeaderOptions'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function SearchPageHeader() {
  const router = useRouter()
  const [keyword, setKeyword] = useState(router.query.query)
  const { data: session } = useSession()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!keyword) return
    router.push(`/search?query=${keyword.trim()}&type=${router.query.type}`)
  }
  return (
    <header className="sticky top-0 bg-gray-100">
      <div className="flex w-full items-center px-1 py-6 sm:p-6">
        <FcGoogle
          onClick={() => router.push('/')}
          className="h-8 w-8 sm:hidden"
        />
        <img
          onClick={() => router.push('/')}
          className="hidden h-10 cursor-pointer sm:inline-flex"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="ml-2 flex max-w-3xl flex-grow items-center rounded-full border border-gray-200 bg-white px-6 py-3 shadow-lg sm:mr-5 sm:ml-10"
        >
          <input
            value={keyword}
            className="w-full flex-grow focus:outline-none"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <RiCloseFill
            onClick={() => setKeyword('')}
            className={`h-6 w-6 cursor-pointer text-gray-500 transition-all duration-300 hover:scale-125 sm:mr-2 ${
              !keyword && 'hidden'
            }`}
          />
          <div className=" mx-1.5  h-6 border-l-2 border-gray-200 sm:mx-0" />
          <img
            src="/google-mic.svg"
            alt=""
            className="mx-1.5 hidden h-6 w-6 sm:inline-flex"
          />
          <button type="submit">
            <BiSearchAlt2 className="h-6 w-6 text-blue-500 sm:ml-0" />
          </button>
        </form>

        <div className="ml-auto  hidden items-center space-x-4 sm:inline-flex">
          <IoApps className="h-10 w-10 cursor-pointer rounded p-2 hover:bg-white" />
          {session ? (
            <img
              loading="lazy"
              className="userimage"
              onClick={signOut}
              src={session.user.image}
              alt=""
            />
          ) : (
            <img
              loading="lazy"
              onClick={signIn}
              className="userimage"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Faccount-profile-icon-1.png&f=1&nofb=1"
              alt=""
            />
          )}
        </div>
      </div>
      <HeaderOptions />
    </header>
  )
}
