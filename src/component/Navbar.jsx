import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
    return (
        <div className='absolute top-0 left-0 w-full py-2 text-white z-20'>
            <div data-aos='fade' className="container">
                <div className="flex justify-between items-center">
                    {/* logo section */}
                    <h1 className="text-4xl uppercase font-bold">orange<span className='text-2xl font-normal '>mint</span></h1>

                    {/* navlinks section */}
                    <ul className='lg:flex hidden space-x-4 text-xl'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Where to find</a>
                        </li>
                        <li>
                            <a href='#'>contact</a>
                        </li>
                    </ul>

                    {/* Hamburger menu */}
                    <div onClick={() => setSidebar(!sidebar)}>
                        <GiHamburgerMenu className='text-3xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar