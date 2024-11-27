import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Show from '@/components/Show'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        {/* <Show/> */}
        <section className=''>

        <Footer/>
        </section>

    </div>
  )
}

export default page