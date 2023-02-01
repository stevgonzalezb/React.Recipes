import { PlusIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

import Logo from '../../assets/logo-no-background.png'

import React, { useState } from 'react';


const Filters = {

    Allergies: [
        {
            Name: "Celery-free",
            Selected: true
        },
        {
            Name: "Crustacean-free",
            Selected: false
        },
        {
            Name: "Gluten-free",
            Selected: false
        },
        {
            Name: "Dairy-free",
            Selected: false
        },
        {
            Name: "Egg-free",
            Selected: false
        },
        {
            Name: "Fish-free",
            Selected: false
        },
    ],
  
    Diets: [
        {
            Name: "Alcohol-free",
            Selected: false
        },
        {
            Name: "High-Fiber",
            Selected: false
        },
    ]
}


function CheckComponent({tittle, handleSelectFilter}) {

    const [checked, setChecked] = useState(false)

    function handleOnClick(tittle) {
        // Change state.
        setChecked(!checked)

        // Return selected to parent.
        return handleSelectFilter(tittle)
    }

    return (
        <>
            <div className='p-2 gap-1 flex flex-row justify-start items-center w-fit bg-gray-200 rounded-full cursor-pointer' onClick={() => handleOnClick(tittle)}>
                <div className={(checked ? "bg-yellow-200" : "bg-yellow-50") + ' h-6 w-6 rounded-full p-1'}>
                    {checked ? <CheckIcon className=""/> : <PlusIcon className=""/>}
                </div>
                <div className='flex font-medium text-sm'>{tittle}</div>
            </div>
        </>
    )
}

export default function Sidebar({ closeSidebar, isOpen, handleSelectFilter}) {    

    return (
        <> 
            <div className='flex flex-row bg-gray-50'>
                <div className="h-screen p-2 border-r border-gray-200 md:flex w-64 hidden">
                    <div className="flex flex-grow flex-col gap-2 overflow-y-auto bg-gray-50">
                        <div className="flex flex-shrink-0 justify-center items-center ">
                            <img className="h-12 w-auto" src={Logo} alt="Cookify "/>
                        </div>

                        <div className="flex flex-grow flex-col ">
                            <div className='font-bold text-lg p-2'>Allergies</div>
                            <div className='flex flex-row gap-2 flex-wrap'>
                                {
                                    Filters.Allergies.map((type) => (
                                        <CheckComponent tittle={type.Name} selected={type.Selected} handleSelectFilter={handleSelectFilter} />
                                    ))
                                }
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
                            <div className='font-bold text-lg p-2'>Allergies</div>
                            <div className='flex flex-row gap-2 flex-wrap'>
                                {
                                    Filters.Allergies.map((type) => (
                                        <CheckComponent tittle={type.Name} selected={type.Selected} handleClick={handleSelectFilter} />
                                    ))
                                }
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



