import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import React from "react"

const Recipe = ({healthLabels, title, calories, image, servings, sourceUrl, cautions}) => {
    return(
        <div className="flex flex-col min-w-[300px] max-w-[600px] bg-gray-100 shadow-md rounded-md border cursor-pointer"
            onClick={() => window.open(sourceUrl)}>
            <div className="flex flex-col sm:flex-row p-2 gap-2">
                <div className='flex sm:flex-col gap-2'>
                    
                    <img className="h-36 w-36 rounded-md" src={image} alt=""/>

                    <div className={(cautions.length > 0 ? "flex" : "hidden") + " pointer-events-none gap-1 w-36"}>
                        <ExclamationTriangleIcon className="h-4 w-4 text-red-600"/>
                        <div className='text-xs font-medium text-gray-600 leading-4 '>
                        {cautions.map(label => (
                            `• ${label} `
                        ))}
                        </div>
                        
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <div className="overflow-hidden sm:whitespace-nowrap max-w-[400px] font-extrabold text-gray-900 text-ellipsis">{title}</div>

                    <div className="divide-y-2 divide-green-cookify">
                        <div className="flex flex-wrap gap-1 py-1">
                            {healthLabels.map(label => (
                                <p className="text-xs font-medium text-gray-600 leading-4"> • {label}</p>
                            ))}
                        </div>
                        <div className="flex gap-4 py-1">
                            <div className="flex justify-center items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-lime-600"></div>
                                <div className="text-gray-900 text-sm font-medium ">
                                    {parseInt(servings)} servings
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="text-gray-900 text-sm font-medium ">
                                    {(parseInt(calories) / parseInt(servings)).toFixed()} calories per serving
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Recipe