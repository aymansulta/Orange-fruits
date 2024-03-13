import React from 'react'
import { FaInstagram, FaFacebook, FaGoogle, FaTelegram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* Company details section */}
                    <div data-aos='fade-up' className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Orange Mint</h1>
                        <p className='text-sm text-dark max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque inventore, repellat vel ducimus quam placeat praesentium, porro doloribus reiciendis perspiciatis? Labore quis expedita ratione!</p>
                    </div>

                    {/* Nav link section */}
                    <div data-aos='fade-up' data-aos-delay='300' className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Quick Links</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            {/* First col */}
                            <div>
                                <ul className='space-y-2'>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>About</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact</a>
                                    </li>
                                    <li>
                                        <a href='#'>Search Fruits</a>
                                    </li>
                                    <li>
                                        <a href='#'>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Second col */}
                            <div>
                                <ul className='space-y-2'>
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>About</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact</a>
                                    </li>
                                    <li>
                                        <a href='#'>Search Fruits</a>
                                    </li>
                                    <li>
                                        <a href='#'>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social link section */}
                    <div data-aos='fade-up' data-aos-delay='500' className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Follow us</h1>
                        <div>
                            <p>+1 (123) 456-7890</p>
                            <p>Noida, Ultra Pradesh</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaInstagram className='text-3xl hover:scale-110 duration-300' />
                            <FaFacebook className='text-3xl hover:scale-110 duration-300' />
                            <FaGoogle className='text-3xl hover:scale-110 duration-300' />
                            <FaTelegram className='text-3xl hover:scale-110 duration-300' />
                        </div>
                    </div>
                </div>
                {/* copyright section */}
                <p className='text-white text-center mt-8 pt-2 border-t-2 text-sm'>
                    Copyright &copy; 2024 Company Name. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer


{/* <FaInstagram />
        <FaFacebook />
        <FaGoogle />
        <FaTelegram /> */}