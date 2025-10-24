import React from 'react'
import navlinks from '../constants'

const NavBar = () => {
  return (
    <header className='w-screen fixed top-0 left-0 z-50 flex-center bg-black min-h-[7vh]'>
        <nav className='container mx-auto flex-between px-5 2xl:px-0'>
            <img src={"/logo.svg"} alt="Applelogo" className='cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out' />


            <ul className='flex-center gap-8'>
                {navlinks.map(({label}) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                ))}
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