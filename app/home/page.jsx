import React from 'react'
import NavBar from '../components/NavBar/page'
import Footer from '../components/footer/page'

function Main() {
  return (
    <div className='flex flex-col justify-center h-screen'>
      <NavBar />

      <div className='flex flex-col py-14 flex-grow'>
        <div className='flex justify-center px-3 gap-8'>
          <div className='flex flex-col w-96 h-80 py-3 gap-4'>
            <h2 className='text-left font-bold text-3xl text-sky-500'>Bootrap 5 theme</h2>
            <h3 className='text-left text-2xl text-slate-400'>crafted by <span className='font-bold'>ThemeWagon</span></h3>
            <p className='text-left text-slate-400'>ThemeWagon offers an wide array of category-oriented Free and Premium  Bootstrap HTML Templates and Themes. </p>
          </div>
          <div className='w-96 h-80 border rounded-lg shadow'></div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Main
