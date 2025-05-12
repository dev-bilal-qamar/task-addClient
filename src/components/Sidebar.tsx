import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, AlertCircle } from 'lucide-react'
import { menuItems, MenuItem } from './data/sidebar-menu'
import { cn } from '../lib/utils'

const Sidebar = () => {
    const navigate = useNavigate()
    const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
        {
            file: true,
        },
    )
    const [activeItem, setActiveItem] = useState('dashboard')
    const [activeSubItem] = useState('')
    const [showTooltip, setShowTooltip] = useState<string | null>(null)

    // Define which menu items are enabled
    const enabledItems = ['dashboard', 'client-add']

    const toggleMenu = (menuId: string) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }))
    }

    const handleItemClick = (item: MenuItem) => {
        if (enabledItems.includes(item.id) && item.href) {
            setActiveItem(item.id)
            navigate(item.href)
        } else if (item.subItems) {
            toggleMenu(item.id)
        } else {
            setShowTooltip(item.id)
            setTimeout(() => setShowTooltip(null), 2000)
        }
    }

    const isItemEnabled = (itemId: string) => {
        return enabledItems.includes(itemId)
    }

    return (
        <div className="w-full mx-auto h-full bg-[#1A1A1A] text-white flex flex-col p-2.5">
            <div className="h-[40px] flex items-center justify-center border-b border-gray-800 bg-[#252525]">
                <div className="font-bold">LOGO</div>
            </div>

            <div className="p-2">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-[#252525] text-white text-sm rounded-md py-1.5 pl-8 pr-2 focus:outline-none"
                    />
                    <svg
                        className="absolute text-gray-400 transform -translate-y-1/2 left-2 top-1/2"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex-1">
                <ul className="py-2 space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.id} className="relative">
                            {showTooltip === item.id && (
                                <div className="absolute z-50 left-full ml-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
                                    <div className="absolute left-0 transform rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2">
                                        ◀
                                    </div>
                                    Only Dashboard and Add Client are available
                                </div>
                            )}

                            <a
                                href={isItemEnabled(item.id) ? item.href : '#'}
                                className={cn(
                                    'flex items-center py-2 px-4 text-sm relative',
                                    activeItem === item.id
                                        ? 'bg-[#252525] text-[#3B9EFF]'
                                        : 'text-gray-300 hover:bg-[#252525]',
                                    !isItemEnabled(item.id) &&
                                        !item.subItems &&
                                        'cursor-not-allowed opacity-70',
                                )}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleItemClick(item)
                                }}
                                onMouseEnter={() => {
                                    if (
                                        !isItemEnabled(item.id) &&
                                        !item.subItems
                                    ) {
                                        setShowTooltip(item.id)
                                    }
                                }}
                                onMouseLeave={() => setShowTooltip(null)}
                            >
                                {item.icon && (
                                    <span className="mr-2">{item.icon}</span>
                                )}
                                <span
                                    className={
                                        activeItem === item.id
                                            ? 'text-[#3B9EFF]'
                                            : ''
                                    }
                                >
                                    {item.label}
                                </span>

                                {!isItemEnabled(item.id) && !item.subItems && (
                                    <AlertCircle className="w-4 h-4 ml-auto text-gray-500" />
                                )}

                                {item.subItems && (
                                    <ChevronDown
                                        className={cn(
                                            'ml-auto h-4 w-4 transition-transform',
                                            expandedMenus[item.id]
                                                ? 'rotate-180'
                                                : '',
                                        )}
                                    />
                                )}
                            </a>

                            {item.subItems && expandedMenus[item.id] && (
                                <div className="relative">
                                    <div className="absolute left-[34px] top-0 bottom-4 w-[1px] bg-gray-600"></div>

                                    <ul className="space-y-0">
                                        {item.subItems.map((subItem) => (
                                            <li
                                                key={subItem.id}
                                                className="relative"
                                            >
                                                {showTooltip === subItem.id && (
                                                    <div className="absolute z-50 left-full ml-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
                                                        <div className="absolute left-0 transform rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2">
                                                            ◀
                                                        </div>
                                                        Only Dashboard and Add
                                                        Client are available
                                                    </div>
                                                )}

                                                <a
                                                    href="#"
                                                    className={cn(
                                                        'flex items-center py-1.5 px-4 pl-12 text-sm relative cursor-not-allowed opacity-70',
                                                        activeSubItem ===
                                                            subItem.id
                                                            ? 'bg-[#252525] text-[#3B9EFF]'
                                                            : 'text-gray-300 hover:bg-[#252525]',
                                                    )}
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    onMouseEnter={() =>
                                                        setShowTooltip(
                                                            subItem.id,
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setShowTooltip(null)
                                                    }
                                                >
                                                    <div
                                                        className={cn(
                                                            'absolute left-[34px] top-1/2 transform -translate-y-1/2 h-[1px]',
                                                            activeSubItem ===
                                                                subItem.id
                                                                ? 'bg-[#3B9EFF] w-[16px]'
                                                                : 'bg-gray-600 w-[16px]',
                                                        )}
                                                    ></div>

                                                    <div
                                                        className={cn(
                                                            'absolute left-[50px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full',
                                                            activeSubItem ===
                                                                subItem.id
                                                                ? 'bg-[#3B9EFF]'
                                                                : 'bg-gray-600',
                                                        )}
                                                    ></div>

                                                    <span className="ml-4">
                                                        {subItem.label}
                                                    </span>

                                                    <AlertCircle className="w-3 h-3 ml-auto text-gray-500" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
