import { getProviders, signIn } from 'next-auth/react'
import Head from 'next/head'

export default function SignIn({ providers }) {
  return (
    <div className="flex h-screen flex-col items-center space-y-20 bg-gray-100 pt-10 md:pt-32">
      <Head>
        <title>Google | SignIn </title>
        <link rel="icon" href="/google-icon.svg" />
      </Head>
      <img src={`/google-icon.svg`} className="h-56 w-56" />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-[#0F9D58] transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
