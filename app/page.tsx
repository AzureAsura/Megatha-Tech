import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import Toast from '@/components/Toast'
import React from 'react'

const page = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Toast/>
    </section>
  )
}

export default page