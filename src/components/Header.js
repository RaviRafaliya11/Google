import { FcGoogle } from 'react-icons/fc'
import { IoApps } from 'react-icons/io5'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()
  return (
    <header className="flex w-full items-center justify-between p-5 text-sm text-gray-700">
      <Link href="/">
        <FcGoogle className="h-8 w-8 cursor-pointer" />
      </Link>
      <div className="flex items-center space-x-4 ">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
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
    </header>
  )
}
