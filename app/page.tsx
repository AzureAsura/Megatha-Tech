import AboutUs from '@/components/AboutUs'
import Benefit from '@/components/Benefit'
import Featured from '@/components/Featured'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Service from '@/components/Service'
import Toast from '@/components/Toast'
import React from 'react'

const page = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <AboutUs />
      <Benefit />
      <Service/>
      <Featured/>
      <Footer/>
      <Toast />
    </section>
  )
}

export default page