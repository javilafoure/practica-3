import React from 'react'
import NavBar from '../components/NavBar/page'

function Features() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Features</h2>
      <p className='text-black flex justify-center text-center'>We provide a number of excellent features that will undoubtedly improve the<br/> user experience. We also provide a better support system</p>
      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-3'>
          <div className='flex flex-col w-80 h-48 py-4 gap-2'>
            <h2 className='text-center font-bold text-xl text-slate-400'>Encrypted Mail</h2>
            <h3 className='text-center text-slate-400'>A process of encrypting email communications</h3>
          </div>
          <div className='flex flex-col w-80 h-48 py-4 gap-2'>
            <h2 className='text-center font-bold text-xl text-slate-400'>Display sharing</h2>
            <h3 className='text-center text-slate-400'>With other participants, you may there your screen</h3>
          </div>
          <div className='flex flex-col w-80 h-48 py-4 gap-2'>
            <h2 className='text-center font-bold text-xl text-slate-400'>Private Notebook</h2>
            <h3 className='text-center text-slate-400'>Private Notebook is an application that is protected</h3>
          </div>
        </div>
        <div className='flex justify-center py-3 gap-3'>
          <div className='flex flex-col w-80 h-48 py-4 gap-2'>
            <h2 className='text-center font-bold text-xl text-slate-400'>App App Assistance</h2>
            <h3 className='text-center text-slate-400'>App assistant is quickly and effectively ran the system</h3>
          </div>
          <div className='flex flex-col w-80 h-48 py-4 gap-2'>
            <h2 className='text-center font-bold text-xl text-slate-400'>Multiple Printing</h2>
            <h3 className='text-center text-slate-400'>Our canvas prints ar craffed on top-notch canvas</h3>
          </div>
          <div className='flex flex-col w-80 h-48 py-4 gap-2'>
            <h2 className='text-center font-bold text-xl text-slate-400'>Free Sketch</h2>
            <h3 className='text-center text-slate-400'>Our canvas prints ar craffed on top-notch canvas</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
