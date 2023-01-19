import { Bars3Icon } from '@heroicons/react/24/outline'

import Logo from '../../assets/logo-no-background.png'
import { Link } from "react-router-dom";


export default function Example() {
  return (
  <nav class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button --> */}
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 hover:bg-yellow-200 text-gray-700 " aria-controls="mobile-menu" aria-expanded="false">
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-6">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto lg:hidden" src={Logo} alt="Your Company"/>
          <img class="hidden h-8 w-auto lg:block" src={Logo} alt="Your Company"/>
        </div>
        <div class="hidden sm:flex sm:gap-4">
          <Link to="/" className="inline-flex items-center border-b-2 border-yellow-600 p-4 text-sm font-bold text-gray-700">Recipes</Link>
          <Link to="/" className="inline-flex items-center border-b-2 border-transparent p-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Drinks</Link>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div class="hidden" id="mobile-menu">
    <div class="flex flex-col gap-2 font-medium">
      <Link to="/" className="border-l-4 text-gray-700 border-yellow-600 bg-yellow-100 py-4 px-2 font-bold">Recipes</Link>
      <Link to="/" className="border-l-4 text-gray-500 border-transparent py-4 px-2 hover:text-gray-700 hover:border-gray-300 hover:bg-yellow-100">Drinks</Link>
    </div>
  </div>
  </nav>

  )
}
