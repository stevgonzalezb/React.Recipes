import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import Logo from '../../assets/logo-no-background.png'

export default function Sidebar() {
    
    // Mobile Sidebar flag.
    const [sidebar, setSidebar] = useState(false)

    return (
        <>        
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                <div className="flex flex-shrink-0 items-center px-4">
                    <img className="h-8 w-auto" src={Logo} alt="Your Company"/>
                </div>
                <div className="mt-5 flex flex-grow flex-col bg-red-100">

                </div>
                </div>
            </div>
        </>
    )
}
