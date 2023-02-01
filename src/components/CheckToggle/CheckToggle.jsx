import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'

import React, { useState } from 'react';


export default function CheckToggle({ tittle, handleSelectFilter }) {    

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