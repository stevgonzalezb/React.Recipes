import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Sidebar() {
    
    // Mobile Sidebar flag.
    const [sidebar, setSidebar] = useState(false)

    return (
        <> 
            <div class="flex flex-1 flex-col">
                <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon className="block h-6 w-6"/>
                </button>
                <div class="flex flex-1 justify-between px-4">
                    <div class="flex flex-1">
                    <form class="flex w-full md:ml-0" action="#" method="GET">
                        <label for="search-field" class="sr-only">Search</label>
                        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            {/* <!-- Heroicon name: mini/magnifying-glass --> */}
                            <MagnifyingGlassIcon className="block h-6 w-6"/>
                        </div>
                        <input id="search-field" class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

                <main class="flex-1 pt-4 px-4">
                    <div class="max-w-7xl">
                    <div class="flex flex-col gap-2">
                            <h1 class="text-2xl font-semibold text-gray-900">Content</h1>
                            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
                        </div>
                    </div>
                </main>
            </div>   
        </>
    )
}