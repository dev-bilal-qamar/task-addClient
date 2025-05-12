import { useNavigate } from 'react-router-dom'
import { Bell, Menu, ChevronDown, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { useEffect, useRef, useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { FaArrowsAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

interface HeaderProps {
    toggleSidebar?: () => void
}

const Header = ({ toggleSidebar }: HeaderProps) => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 md:px-6">
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                    className="mr-2 md:hidden"
                >
                    <Menu className="w-5 h-5" />
                </Button>
                <h1 className="text-sm sm:text-base lg:text-lg font-medium md">
                    Welcome to Administrator
                </h1>
            </div>

            <div className="flex items-center space-x-1 md:space-x-2">
                <IoMdStar className="text-gray-500" />
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-gray-500"
                >
                    <Bell className="w-5 h-5 text-gray-500" />
                    <span className="absolute top-0 right-0 block w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
                </Button>
                <FaArrowsAlt className="text-gray-500" />

                <div className="relative" ref={dropdownRef}>
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 px-2"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <Avatar className="w-8 h-8">
                            <AvatarImage
                                src="/placeholder-user.png"
                                alt="User"
                            />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div className="flex-col items-start hidden text-sm md:flex">
                            <span className="font-medium">Admin User</span>
                            <span className="text-xs text-gray-500">
                                Administrator
                            </span>
                        </div>
                        <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </Button>

                    {dropdownOpen && (
                        <div className="absolute right-0 z-50 w-56 mt-2 overflow-hidden bg-white border border-gray-200 rounded-md shadow-md animate-in fade-in-50 zoom-in-95">
                            <button
                                className="flex items-center w-full gap-2 px-4 py-2 text-sm text-left text-red-600 transition-colors hover:bg-red-50"
                                onClick={handleLogout}
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
