import React from 'react'
import NavBar from '../components/NavBar/page'

function Team() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Our Team</h2>
      <p className='text-black flex justify-center text-center'>People from various origins, cultures, and personalities make up our team.<br/> This blend makes it a powerful team</p>
      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-3'>
          <div className='w-60 h-80 border rounded-lg shadow'></div>
          <div className='w-60 h-80 border rounded-lg shadow'></div>
          <div className='w-60 h-80 border rounded-lg shadow'></div>
          <div className='w-60 h-80 border rounded-lg shadow'></div>
        </div>
        <div className='flex justify-center py-3 gap-3'>
          <div className='w-60 h-28'>
            <h2 className='text-center font-bold text-xl text-black'>John Adams</h2>
            <h3 className='text-center text-slate-400'>CEO</h3>
          </div>
          <div className='w-60 h-28'>
            <h2 className='text-center font-bold text-xl text-black'>Carrey Johnson</h2>
            <h3 className='text-center text-slate-400'>Senio Developer</h3>
          </div>
          <div className='w-60 h-28'>
            <h2 className='text-center font-bold text-xl text-black'>Ray Marie</h2>
            <h3 className='text-center text-slate-400'>Developer</h3>
          </div>
          <div className='w-60 h-28'>
            <h2 className='text-center font-bold text-xl text-black'>Austin Min</h2>
            <h3 className='text-center text-slate-400'>Designer</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
