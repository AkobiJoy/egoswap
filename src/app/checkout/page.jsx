import CheckOut from '@/components/CheckOut'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
        <CheckOut/>
        <Footer/>
    </div>
  )
}

export default page