import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import CheckToggle from "../CheckToggle/CheckToggle"

import Logo from '../../assets/logo-no-background.png'

import React, { useState } from 'react';

const FILTERS = {
    Allergies: [ "Celery-free", "Crustacean-free", "Gluten-free", "Dairy-free", "Egg-free", "Fish-free", "Lupine-free", "Mustard-free", "Peanut-free", "Sesame-free", "Shellfish-free", "Soy-free", "Tree-Nut-free", "Wheat-free" ],
    Diets: [ "Alcohol-free", "High-Fiber", "Balanced", "Keto", "High-Protein", "Kidney friendly", "Low-Carb", "Low-Fat", "Low-Sodium", "No oil added", "No-sugar", "Pork-free",  "Red meat-free", "Vegan", "Vegetarian" ]
}

export default function Sidebar({ closeSidebar, isOpen, handleSelectFilter}) {    

    const [open, setOpen] = useState(false)

    return (
        <> 
            <div className='flex flex-row bg-gray-50'>
                <div className="h-screen p-2 border-r border-gray-200 md:flex w-72 hidden">
                    <div className="flex flex-grow flex-col gap-4 overflow-y-auto bg-gray-50">
                        <div className="flex flex-shrink-0 justify-center items-center ">
                            <img className="h-12 w-auto" src={Logo} alt="Cookify "/>
                        </div>
                        <hr/>
                        <div className="flex flex-grow flex-col gap-2">

                            <div className='flex flex-col gap-1 bg-gray-100 cursor-pointer' onClick={() => setOpen(!open)}>
                                <div className='flex flex-row items-center justify-between p-2 bg-gray-200 rounded-lg'>
                                    <div className='font-bold text-lg text-gray-600'>Allergies</div>
                                    <div className='flex flex-row items-center justify-center gap-1'>
                                        <div className='bg-gray-700 rounded-full h-5 w-5 flex items-center justify-center'>
                                            <div className=' text-white text-sm'>2</div>
                                        </div>
                                        <ChevronDownIcon className='h-4 w-4' />
                                    </div>
                                </div>
                                <div className={(open ? 'flex': 'hidden') + ' flex-row gap-2 flex-wrap '}>
                                    {
                                        FILTERS.Allergies.map((value) => (
                                            <CheckToggle tittle={value} handleSelectFilter={handleSelectFilter} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-row items-center justify-between p-2 bg-gray-200 rounded-lg'>
                                    <div className='font-bold text-lg text-gray-600'>Diets</div>
                                    <ChevronDownIcon className='h-4 w-4' />
                                </div>
                                <div className='hidden flex flex-row gap-2 flex-wrap'>
                                    {
                                        FILTERS.Diets.map((value) => (
                                            <CheckToggle tittle={value} handleSelectFilter={handleSelectFilter} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ isOpen ? "md:hidden flex absolute top-0 h-screen w-full z-40 right-0 gap-8 justify-start flex-1 bg-gray-600 bg-opacity-75" : "hidden absolute top-0 h-full w-full z-40 right-0 gap-8 justify-start flex-1 bg-gray-600 bg-opacity-75" }>
                    <div className="h-screen  border-r border-gray-200 flex w-72">
                        <div className="flex p-2 flex-grow flex-col gap-2 overflow-y-auto bg-white">
                            <div className="flex flex-shrink-0 justify-center items-center">
                                <img className="h-12 w-auto" src={Logo} alt="Cookify"/>
                            </div>

                            <div className="flex flex-grow flex-col ">
                                <div className='flex flex-col gap-1 bg-gray-100 cursor-pointer' onClick={() => setOpen(!open)}>
                                    <div className='flex flex-row items-center justify-between p-2 bg-gray-200 rounded-lg'>
                                        <div className='font-bold text-lg text-gray-600'>Allergies</div>
                                        <div className='flex flex-row items-center justify-center gap-1'>
                                            <div className='bg-gray-700 rounded-full h-5 w-5 flex items-center justify-center'>
                                                <div className=' text-white text-sm'>2</div>
                                            </div>
                                            <ChevronDownIcon className='h-4 w-4' />
                                        </div>
                                    </div>
                                    <div className={(open ? 'flex': 'hidden') + ' flex-row gap-2 flex-wrap '}>
                                        {
                                            FILTERS.Allergies.map((value) => (
                                                <CheckToggle tittle={value} handleSelectFilter={handleSelectFilter} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 px-4'>
                        <button type="button" className="flex h-10 w-10 items-center justify-center text-white border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => closeSidebar()}>
                            <XMarkIcon className="block h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}



