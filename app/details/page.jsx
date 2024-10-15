import React from 'react'
import NavBar from '../components/NavBar/page'

function Details() {
  return (
    <div>
      <NavBar/>
      <div className='flex flex-col py-14'>
        <div className='flex justify-center py-10 gap-11'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          
        </div>
        <div className='flex justify-center py-10 gap-11'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          
        </div>
      </div>
    </div>
  )
}

export default Details
