import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'
import React from 'react'

const page = () => {
  return (
    <div>
           <Header/>
        <Payment/>
        <Footer/>
    </div>
  )
}

export default page