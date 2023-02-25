import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import LogoBlack from '../../assets/logo-black.png'
import Logo from '../../assets/logo-no-background.png'

import React, { useState, useEffect } from 'react';

export default function Recipes() {

    const [keyworkds, setKeyworkds] = useState('')
    
    return (
        <> 
            <div className="flex flex-col w-full h-screen">
                <div className="sticky w-full top-0 z-10 sm:flex-row flex-col flex py-2 bg-gray-100 divide-x-2 shadow-lg">
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

                <main className="w-full h-[calc(100vh_-_136px)] sm:h-[calc(100vh_-_80px)] p-2 overflow-auto">
                    <div className="max-w-7xl h-full">
                        {/* Empty state */}
                        <div className='h-full w-full flex flex-col gap-2 justify-center items-center'>
                            <img className="grayscale  h-40 w-auto opacity-60" src={LogoBlack} alt="Cookify "/>

                            <div className="text-2xl font-bangers text-gray-700 text-center">
                                No value entered yet, <br />
                                how about starting with a teriyaki chicken? 🍗
                            </div>
                        </div>

                        {/* Query results */}
                        <div className={keyworkds ? 'flex': 'hidden'}>
                            Resultados para: {keyworkds}
                        </div>
                    </div>
                </main>
            </div>   
        </>
    )
}