export default function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-gray-500">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-y-4  px-8 py-3 md:grid-cols-2 ">
        <div className="flex flex-wrap items-center justify-center gap-y-4 space-x-8 whitespace-nowrap md:justify-self-start">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  )
}
