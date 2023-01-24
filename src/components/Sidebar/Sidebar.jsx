import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    
    // Mobile Sidebar flag.
    const [sidebar, setSidebar] = useState(false)

    return (
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">

            {/* Sidebar */}
            <div className={ sidebar ? "block" : "hidden lg:block" }>
                <nav className="flex-1 bg-white" aria-label="Sidebar">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current
                        ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center text-sm font-medium rounded-md'
                    )}
                    >
                    <item.icon
                        className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                    />
                    <span className="flex-1">{item.name}</span>
                    {item.count ? (
                        <span
                        className={classNames(
                            item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                            'inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                        )}
                        >
                        {item.count}
                        </span>
                    ) : null}
                    </a>
                ))}
                </nav>
            </div>

            {/* Mobile toggle button */}
            <div className='h-10 w-10 rounded-r-xl flex justify-center bg-gray-500'
                onClick={ () => setSidebar(!sidebar) }>
                <FunnelIcon className='w-6 text-white' />
            </div>
        </div>
    )
}
