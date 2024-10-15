import React from 'react'
import NavBar from '../components/NavBar/page'

function Testimonial() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>What our clients have yo say</h2>
      <p className='text-black flex justify-center text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse corrupti<br /> minima nobis beatae sed. Nihil assumenda beatae rem, quaerat <br />tenetur sequi facere soluta, officiis necessitatibus quae, qui odit<br /> impedit omnis.</p>
      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-8'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
