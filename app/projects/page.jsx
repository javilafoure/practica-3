import React from 'react'
import NavBar from '../components/NavBar/page'

function Projects() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Our Projects</h2>
      <p className='text-black flex justify-center text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse corrupti<br /> minima nobis beatae sed. Nihil assumenda beatae rem, quaerat <br />tenetur sequi facere soluta, officiis necessitatibus quae, qui odit<br /> impedit omnis.</p>
      <div className='flex justify-center py-14'>
        <div className='flex justify-center border rounded-lg shadow p-3'>

          <div className='flex flex-col gap-3'>
            <div className='w-80 h-64 border rounded-lg shadow'></div>
            <div className='w-80 h-96 border rounded-lg shadow'></div>

          </div>
          <div className='flex flex-col justify-center px-3 gap-3'>

            <div className='w-80 h-96 border rounded-lg shadow'></div>
            <div className='w-80 h-64 border rounded-lg shadow'></div>

          </div>
          <div className='flex flex-col justify-center gap-3'>
            <div className='w-80 h-64 border rounded-lg shadow'></div>
            <div className='w-80 h-96 border rounded-lg shadow'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
