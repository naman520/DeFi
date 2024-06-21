import React from 'react'
import Navbar from './Navbar'

export default function Swap() {
  return (
    <>
        <Navbar />
        <div className=" lg:min-h-screen bg-gradient-to-r from-teal-800 via-blue-600 to-teal-800 animate-customPulse">
            <div className=' text-center text-white pt-14 text-6xl '>
                Crypto Exchange
            </div>
        </div>
    </>
  )
}