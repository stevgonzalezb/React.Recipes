import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from "react-router-dom"

import Logo from '../../assets/logo-no-background.png'


export default function Navbar() {

  // Mobile Sidebar flag.
  const [sidebar, setSidebar] = useState(false)

  return (
  <nav className="bg-white shadow">
    <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* <!-- Mobile menu button --> */}
          <button type="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-yellow-200 text-gray-700 "
            onClick={ () => setSidebar(!sidebar) }>
              { sidebar ? <XMarkIcon className="block h-6 w-6"/> : <Bars3Icon className="block h-6 w-6"/> }
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-8">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img className="block h-12 w-auto" src={Logo} alt="Cookify"/>
            </Link>
          </div>
          <div className="hidden sm:flex sm:gap-4 font-medium">
            <Link to="/" className="inline-flex items-center border-b-2 border-yellow-600 p-4 font-bold text-gray-700">Recipes</Link>
            {/* <Link to="/" className="inline-flex items-center border-b-2 border-transparent p-4 text-gray-500 hover:border-gray-300 hover:text-gray-700">Drinks</Link> */}
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div className={ sidebar ? "sm:hidden" : "hidden" }>
      <div className="flex flex-col gap-2 font-medium">
        <Link to="/" className="border-l-4 text-gray-700 border-yellow-600 bg-yellow-100 py-4 px-2 font-bold">Recipes</Link>
        {/* <Link to="/" className="border-l-4 text-gray-500 border-transparent py-4 px-2 hover:text-gray-700 hover:border-gray-300 hover:bg-yellow-100">Drinks</Link> */}
      </div>
    </div>
  </nav>

  )
}
