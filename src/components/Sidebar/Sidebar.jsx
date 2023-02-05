import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import CheckToggle from "../CheckToggle/CheckToggle"

import Logo from '../../assets/logo-no-background.png'

import React, { useState } from 'react';

const FILTERS = {
    Allergies: [ "Celery-free", "Crustacean-free", "Gluten-free", "Dairy-free", "Egg-free", "Fish-free", "Lupine-free", "Mustard-free", "Peanut-free", "Sesame-free", "Shellfish-free", "Soy-free", "Tree-Nut-free", "Wheat-free" ],
    Diets: [ "Alcohol-free", "High-Fiber", "Balanced", "Keto", "High-Protein", "Kidney friendly", "Low-Carb", "Low-Fat", "Low-Sodium", "No oil added", "No-sugar", "Pork-free",  "Red meat-free", "Vegan", "Vegetarian" ]
}

export default function Sidebar({ closeSidebar, isOpen, handleSelectFilter}) {    

    const [open, setOpen] = useState('')
    let [counter, setCounter] = useState(0)

    function handleCounter() {

        setCounter(counter++)
        return handleSelectFilter
    }

    return (
        <> 
            <div className='flex flex-row bg-gray-200'>
                <div className="h-screen p-2 border-r border-gray-400 sm:flex w-72 hidden">
                    <div className="flex flex-grow flex-col gap-4 overflow-y-auto bg-gray-200">
                        <div className="flex flex-shrink-0 justify-center items-center ">
                            <img className="h-12 w-auto" src={Logo} alt="Cookify "/>
                        </div>
                        <div className="h-[1px] bg-gray-400"></div>
                        <div className="flex flex-grow flex-col gap-2">
                            {
                                Object.keys(FILTERS).map((filter) => {
                                    return (
                                        <>
                                            <div className='flex flex-col'>
                                                <div className={ (open === filter ? 'rounded-t-lg': 'rounded-lg') + ' flex flex-row items-center justify-between p-2 bg-gray-700 cursor-pointer'} 
                                                        onClick={() =>  open === filter ? setOpen('') : setOpen(filter)}>
                                                    <div className='font-bold text-normal text-gray-50 '>{filter}</div>
                                                    <div className='flex flex-row items-center justify-center gap-1'>
                                                        <div className='bg-yellow-600 rounded-full h-5 w-5 flex items-center justify-center'>
                                                            <div className=' text-white text-sm font-semibold'>{counter}</div>
                                                        </div>
                                                        <ChevronDownIcon className='h-4 w-4 text-white' />
                                                    </div>
                                                </div>
                                                <div className={(open === filter ? 'flex': 'hidden') + ' rounded-b-lg flex-row gap-2 p-2 flex-wrap bg-gray-100'}>
                                                    {
                                                        FILTERS[filter].map((value) => (
                                                            <CheckToggle tittle={value} handleSelectFilter={handleCounter} />
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={ (isOpen ? "sm:hidden flex" : "hidden") + " absolute top-0 h-screen w-full z-40 right-0 gap-8 justify-start flex-1 bg-gray-600 bg-opacity-75" }>
                    <div className="h-screen  border-r border-gray-200 flex w-4/5 ">
                        <div className="flex p-2 flex-grow flex-col gap-2 overflow-y-auto bg-white">
                            <div className="flex flex-shrink-0 justify-center items-center">
                                <img className="h-12 w-auto" src={Logo} alt="Cookify"/>
                            </div>

                            <hr/>
                            <div className="flex flex-grow flex-col gap-2">
                                {
                                    Object.keys(FILTERS).map((filter) => {
                                        return (
                                            <>
                                                <div className='flex flex-col'>
                                                    <div className={ (open === filter ? 'rounded-t-lg': 'rounded-lg') + ' flex flex-row items-center justify-between p-2 bg-gray-700 cursor-pointer'} 
                                                            onClick={() =>  open === filter ? setOpen('') : setOpen(filter)}>
                                                        <div className='font-bold text-normal text-gray-50 '>{filter}</div>
                                                        <div className='flex flex-row items-center justify-center gap-1'>
                                                            <div className='bg-yellow-600 rounded-full h-5 w-5 flex items-center justify-center'>
                                                                <div className=' text-white text-sm font-semibold'>2</div>
                                                            </div>
                                                            <ChevronDownIcon className='h-4 w-4 text-white' />
                                                        </div>
                                                    </div>
                                                    <div className={(open === filter ? 'flex': 'hidden') + ' rounded-b-lg flex-row gap-2 p-2 flex-wrap bg-gray-100'}>
                                                        {
                                                            FILTERS[filter].map((value) => (
                                                                <CheckToggle tittle={value} handleSelectFilter={handleSelectFilter} />
                                                            ))
                                                        }
                                                    </div>

                                                </div>
                                            </>
                                        )
                                    })
                                }
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



