import React from 'react'
import NavBar from '../components/NavBar/page'

function Details() {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col py-14'>
        <div className='flex justify-center py-10 gap-11'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='flex flex-col w-96 h-80 py-5 px-3 gap-3'>
            <h2 className='text-left font-bold text-xl text-black'>A creative team which builds stunning UI/UX</h2>
            <p className='text-left text-slate-400'>Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience.
              The most stunning, cutting-edge UI/UX.</p>
            <p className='text-left text-slate-400'>Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon</p>
          </div>

        </div>
        <div className='flex justify-center py-10 gap-11'>
          <div className='flex flex-col w-96 h-80 py-5 px-3 gap-3'>
            <h2 className='text-left font-bold text-xl text-black'>Devoted to defining the cutting edge</h2>
            <p className='text-left text-slate-400'>"This new creation is cutting-edge technology," says the researcher, "whose study originates from a business
              at the forefront of space science."</p>
            <p className='text-left text-slate-400'>Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon</p>
          </div>
          <div className='w-96 h-80 border rounded-lg shadow '>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Details
