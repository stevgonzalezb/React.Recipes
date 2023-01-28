import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import Logo from '../../assets/logo-no-background.png'

export default function Sidebar() {
    
    // Mobile Sidebar flag.
    const [sidebar, setSidebar] = useState(false)

    return (
        <>        
            <div className="h-screen md:flex md:w-64 md:flex-col">
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="h-8 w-auto" src={Logo} alt="Cookify"/>
                    </div>
                    <div className="flex flex-grow flex-col bg-red-100">

                    </div>
                </div>
            </div>
        </>
    )
}
