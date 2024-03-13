import React, { useEffect } from 'react'
import { Hero } from './component/Hero'
import Services from './component/Services'
import WhereToBuy from './component/WhereToBuy'
import AppBanner from './component/AppBanner'
import Footer from './component/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: 'ease-in-cubic',
    })
  })
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </main>
  )
}

export default App
