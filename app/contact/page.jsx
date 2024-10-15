import React from 'react'
import NavBar from '../components/NavBar/page'

function Contact() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Contact Us</h2>

      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-8'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='w-96 h-80 border rounded-lg shadow'></div>

        </div>

      </div>
    </div>
  )
}

export default Contact
