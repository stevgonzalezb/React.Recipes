import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

import React, { useState, useEffect } from 'react';

export default function Recipes({openSidebar, filters, handleAddFilter, counter}) {

    // let [filters, setFilters] = useState([])


    useEffect(() => {
        console.log("lelele")
        // check this => https://stackoverflow.com/questions/37009328/re-render-react-component-when-prop-changes
      }, [counter]);
      console.log("🚀 ~ Recipes ~ filters", filters)

    // handleAddFilter = (filter) => {
    //     console.log("leggoo")
    //     filters.push(filter)
    //     setFilters(filters)
    // }
    
    return (
        <> 
            <div className="flex flex-1 flex-col">
                <div className="sticky top-0 z-10 flex py-4 flex-shrink-0 bg-white shadow">
                    <button type="button" className="sm:hidden border-r border-gray-200 px-4 py-2 text-gray-500"
                            onClick={() => openSidebar()}>
                        <span className="sr-only">Open sidebar</span>
                        <div className='relative'>
                            <FunnelIcon className="block h-6 w-6"/>
                            <div className='h-2 w-2 bg-yellow-600 rounded-full absolute top-0 right-0'></div>
                        </div>
                    </button>
                    <div className="w-full p-2 text-gray-400 focus-within:text-gray-600 flex gap-4">
                        <div className="pointer-events-none flex items-center justify-center">
                            <MagnifyingGlassIcon className="block h-6 w-6"/>
                        </div>
                        <input id="search-field" className=" h-full w-full border-transparent text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search"/>
                    </div>
                </div>

                <main className="flex-1 pt-4 px-4">
                    <div className="max-w-7xl">
                    <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold text-gray-900">Filters</h1>
                            <div key={filters.length} className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                            <div className='text-red-500'>
                                                 {counter}
                                         </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>   
        </>
    )
}