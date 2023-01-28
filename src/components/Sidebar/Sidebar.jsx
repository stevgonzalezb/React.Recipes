import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import Logo from '../../assets/logo-no-background.png'

export default function Sidebar() {
    
    // Mobile Sidebar flag.
    const [sidebar, setSidebar] = useState(false)

    return (
        <>        
            <div className="h-screen py-2 px-4 border-r border-gray-200 md:flex md:w-64">
                <div className="flex flex-grow flex-col gap-2 overflow-y-auto bg-white">
                    <div className="flex flex-shrink-0 justify-center items-center">
                        <img className="h-12 w-auto" src={Logo} alt="Cookify"/>
                    </div>

                    <div className="flex flex-grow flex-col bg-red-100">

                    </div>
                </div>
            </div>
        </>
    )
}
