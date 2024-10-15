import React from 'react'
import NavBar from '../components/NavBar/page'

function Contact() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Contact Us</h2>

      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-8'>
          <div className='flex flex-col w-96 h-80 border rounded-2xl shadow p-4 gap-4'>
            <input className='text-xs h-8 border rounded-2xl shadow px-3 py-1' type="text" placeholder='Write your name' />
            <input className='text-xs h-8 border rounded-2xl shadow px-3 py-1' type="text" placeholder='Write your email' />
            <input className='text-xs h-36 border rounded-2xl shadow px-3 py-1' type="text" placeholder='Write your menssaje' />
            <button className='border h-8 rounded-2xl shadow bg-blue-600'>Submit</button>
          </div>
          <div className='flex flex-col w-96 h-80 px-10 py-4 gap-3'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-left font-bold text-sm text-black'>Phone</h2>
              <h3 className='text-left text-xs text-slate-400'>+880124332334</h3>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-left font-bold text-sm text-black'>Email</h2>
              <h3 className='text-left text-xs text-slate-400'>something@email.com</h3>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-left font-bold text-sm text-black'>Location</h2>
              <h3 className='text-left text-xs text-slate-400'>43/A Spooner Street<br/>St laurence, Virginia,<br/>Texas</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
