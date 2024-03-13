import React from 'react'
import bannerImg from '../assets/website/banner.jpg'
import playStore from '../assets/website/play_store.png'
import appStore from '../assets/website/app_store.png'

const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
}

const AppBanner = () => {
    return (
        <>
            <div className='container my-14'>
                <div style={bannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
                    <div>
                        <div className='space-y-6 max-w-xl mx-auto'>
                            <h1 data-aos='fade-up' className='text-2xl text-center sm:text-4xl font-semibold'>
                                Download the app
                            </h1>
                            <p data-aos='fade-up' data-aos-delay='300' className='text-center sm:px-20'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo dolor voluptatibus quisquam at mollitia totam dolore obcaecati, doloribus corporis?
                            </p>
                            {/* images link */}
                            <div data-aos='fade-up' data-aos-delay='500' className='flex items-center justify-center gap-4'>
                                <a href='#'>
                                    <img src={playStore} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                                </a>
                                <a href='#'>
                                <img src={appStore} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppBanner