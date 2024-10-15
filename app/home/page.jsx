import React from 'react'
import NavBar from '../components/NavBar/page'
import Footer from '../components/footer/page'

function Main() {
  return (
    <div className='flex flex-col justify-center h-screen'>
      <NavBar />

      <div className='flex flex-col py-14 flex-grow'>
        <div className='flex justify-center px-3 gap-8'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='w-96 h-80 border rounded-lg shadow'></div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Main
