import Footer from '@/components/Footer'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
       <Navbar/>
       <section>
        <Login/>
       </section>
        <Footer/>
    </div>
  )
}

export default page