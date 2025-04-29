"use client"
import React from 'react'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Resume from '../components/sections/Resume'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats '
import Portfolio from '../components/sections/Portfolio'
import Pricing from '../components/sections/Pricing '
import Faq from '../components/sections/Faq '
import Testimonials from '../components/sections/Testimonials'


export default function Home() {
  return (
 <>
        <Layout>
        <About/>
        <Resume/>
        <Services/>
        <Stats/>
        <Portfolio/>
        {/* <Pricing/>
        <Faq/> */}
      <Testimonials/>
        <Contact/>
        </Layout>


        </>

  )
}
