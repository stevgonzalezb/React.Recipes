import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Recipes({openSidebar}) {
    
    return (
        <> 
            <div className="flex flex-1 flex-col">
                <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                <button type="button" className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={event => openSidebar()}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon className="block h-6 w-6"/>
                </button>
                <div className="flex flex-1 justify-between px-4">
                    <div className="flex flex-1">
                    <form className="flex w-full md:ml-0" action="#" method="GET">
                        <label for="search-field" className="sr-only">Search</label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            {/* <!-- Heroicon name: mini/magnifying-glass --> */}
                            <MagnifyingGlassIcon className="block h-6 w-6"/>
                        </div>
                        <input id="search-field" className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

                <main className="flex-1 pt-4 px-4">
                    <div className="max-w-7xl">
                    <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold text-gray-900">Content</h1>
                            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
                        </div>
                    </div>
                </main>
            </div>   
        </>
    )
}