import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Market from './Market'

function Home() {
    return (
      <>
       <div className='  ' >
        <Navbar />  
          <div className=' fill-black'>
        <Body />
          </div>
       </div> 
      </>
    )
}

export default Home
