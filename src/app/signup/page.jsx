import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SignupPage from '@/components/Signup'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <SignupPage/>
        <Footer/>
    </div>
  )
}

export default page