import { XMarkIcon } from '@heroicons/react/24/outline'

import Logo from '../../assets/logo-no-background.png'

export default function Sidebar({ closeSidebar, isOpen }) {
    
    return (
        <> 
            <div className='flex flex-row'>
                <div className="h-screen py-2 px-4 border-r border-gray-200 md:flex w-64 hidden">
                    <div className="flex flex-grow flex-col gap-2 overflow-y-auto bg-white">
                        <div className="flex flex-shrink-0 justify-center items-center">
                            <img className="h-12 w-auto" src={Logo} alt="Cookify"/>
                        </div>

                        <div className="flex flex-grow flex-col bg-red-100">

                        </div>
                    </div>
                </div>

                <div className={ isOpen ? "sm:hidden flex absolute top-0 h-full w-full z-40 right-0 gap-8 justify-start flex-1 bg-gray-600 bg-opacity-75" : "hidden absolute top-0 h-full w-full z-40 right-0 gap-8 justify-start flex-1 bg-gray-600 bg-opacity-75" }>
                    <div className="h-screen  border-r border-gray-200 flex w-64">
                        <div className="flex py-2 px-4 flex-grow flex-col gap-2 overflow-y-auto bg-white">
                            <div className="flex flex-shrink-0 justify-center items-center">
                                <img className="h-12 w-auto" src={Logo} alt="Cookify"/>
                            </div>

                            <div className="flex flex-grow flex-col bg-red-100">

                            </div>
                        </div>
                    </div>
                    <div className='py-2 px-4'>
                        <button type="button" className="flex h-10 w-10 items-center justify-center border rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={event => closeSidebar()}>
                            <XMarkIcon className="block h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>    
        </>
    )
}
