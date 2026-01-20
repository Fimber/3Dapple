import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../constants'

const NavBar = () => {
  const location = useLocation()

  const getPath = (label) => {
    const paths = {
      'Store': '/',
      'Mac': '/mac',
      'iPhone': '/iphone',
      'Watch': '/',
      'Vision': '/',
      'AirPods': '/'
    }
    return paths[label] || '/'
  }

  return (
    <header className='w-screen fixed top-0 left-0 z-50 flex-center bg-black min-h-[7vh]'>
        <nav className='container mx-auto flex-between px-5 2xl:px-0'>
            <Link to="/">
              <img src={"/logo.svg"} alt="Apple logo" className='cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out' />
            </Link>

            <ul className='flex-center gap-8'>
                {navLinks.map(({label}) => {
                    const path = getPath(label)
                    const isActive = location.pathname === path || 
                      (label === 'Mac' && location.pathname === '/') ||
                      (label === 'iPhone' && location.pathname === '/iphone')
                    
                    return (
                        <li key={label}>
                            <Link 
                              to={path}
                              className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                              {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src={"/search.svg"} alt="Search" />
                </button>
                <button>
                    <img src={"/cart.svg"} alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
