import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo-no-background.png'

import React, { useState, useEffect } from 'react';

export default function Recipes() {

    const [keyworkds, setKeyworkds] = useState('')
    
    return (
        <> 
            <div className="flex flex-1 flex-col">
                <div className="sticky top-0 z-10 sm:flex-row flex-col flex py-2 flex-shrink-0 bg-gray-100 divide-x-2 shadow-lg">
                    <div className="flex flex-shrink-0 justify-center items-center py-2 px-4">
                        <img className="h-12 w-auto" src={Logo} alt="Cookify "/>
                    </div>

                    <div className="w-full py-2 px-4 text-gray-400 focus-within:text-gray-600 flex flex-row justify-between gap-4">
                        <div className="pointer-events-none hidden sm:flex items-center">
                            <MagnifyingGlassIcon className="h-8 w-8 text-gray-600"/>
                        </div>
                        <input autoFocus 
                            id="search-field" 
                            className="h-full w-full text-lg font-medium border rounded-md border-gray-400 text-gray-900 placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1"
                            placeholder="Type one o more keywords"
                            onKeyDown={(e) => { 
                                if(e.key === 'Enter') setKeyworkds()
                            }}
                            onInput={(e) => {setKeyworkds(e.target.value)}}/>
                        <button className='text-white font-medium hover:bg-green-800 bg-green-cookify p-2 rounded-md'
                                onClick={() => setKeyworkds()}>
                            Search
                        </button>
                    </div>
                </div>

                <main className="flex-1 pt-4 px-4">
                    <div className="max-w-7xl">
                    <div className="flex flex-col gap-2">
                        {keyworkds}
                    </div>
                    </div>
                </main>
            </div>   
        </>
    )
}