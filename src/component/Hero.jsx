import React, { useState } from 'react'
import Navbar from './Navbar'
import OrangeImg from "../assets/orangebg.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Hero = () => {

    const [sidebar, setSidebar] = useState(false);

    return (
        <main className='bg-primaryDark md:px-12 md:py-6'>
            <section className='relative min-h-[650] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
                <div className="container">
                    {/* Navbar */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />

                    {/* Hero section */}
                    <div className='grid grid-cols-1 md:grid-cols-2
                    lg:grid-col-3 place-items-center min-h-[650px]'>
                        {/* text content section */}
                        <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
                            <h1 data-aos='fade-right' className='text-3xl pl-6 md:pl-14'>01_________</h1>
                            <h1 data-aos='fade-right' data-aos-delay='300' className='text-5xl font-bold uppercase text-shadow'>A Healthy Fruits</h1>
                            <p data-aos='fade-right' data-aos-delay='500' className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos qui ducimus nemo culpa?</p>
                            <button data-aos='fade-right' data-aos-delay='700' data-aos-offset='0' className='primary-btn'>Shop Now</button>
                        </div>
                        {/* image section */}
                        <div data-aos='zoom-in'>
                            <img src={OrangeImg} alt='Not found' className='relative z-10 w-[400px] img-shadow' />
                        </div>
                        {/* blank div section */}
                        <div className="md:hidden"></div>
                    </div>
                </div>

                {/* background large text */}
                <h1 data-aos='fade' data-aos-delay='600' data-aos-duration='1800' className='large-text z-20'>Orange</h1>

                {/* sidebar section */}
                {sidebar && (
                    <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='text-white flex flex-col justify-center items-center gap-6'>
                                {/* line */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                                <div className='inline-block p-2 border border-white rounded-full cursor-pointer'>
                                    <FaFacebookF className='text-2xl' />
                                </div>
                                <div className='inline-block p-2 border border-white rounded-full cursor-pointer'>
                                    <FaLinkedinIn className='text-2xl' />
                                </div>
                                <div className='inline-block p-2 border border-white rounded-full cursor-pointer'>
                                    <FaInstagram className='text-2xl' />
                                </div>
                                {/* line */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}
