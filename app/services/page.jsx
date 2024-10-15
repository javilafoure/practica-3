import React from 'react'
import NavBar from '../components/NavBar/page'

function Services() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Service</h2>
      <p className='text-black flex justify-center text-center'>We offer youth with chances for career development in their practice. We also<br/> support a wide range of services to ensure client satisfaction</p>
      <div className='flex justify-center py-20 gap-5'>
        <div className='flex flex-col w-80 h-96 border rounded-lg shadow px-8 py-4 gap-5'>
          <h2 className='text-left font-bold text-xl text-black'>Send Texts Instantly</h2>
          <h3 className='text-left text-sm text-slate-400'>Financial planning, forecasting and adjusting rapidly with customer demands and budgets.</h3>
        </div>
        <div className='flex flex-col w-80 h-96 border rounded-lg shadow px-8 py-4 gap-5'>
          <h2 className='text-left font-bold text-xl text-black'>Better Organized</h2>
          <h3 className='text-left text-sm text-slate-400'>Latest technology and experienced guidance, trained HR specialists
            to keep updated.</h3>
        </div>
        <div className='flex flex-col w-80 h-96 border rounded-lg shadow px-8 py-4 gap-5'>
          <h2 className='text-left font-bold text-xl text-black'>Analytical Statistics</h2>
          <h3 className='text-left text-sm text-slate-400'>Messages, real-time reminders, memos, and many more will
            keep your team in sync.

          </h3>
        </div>
      </div>
    </div>
  )
}

export default Services
