import React from 'react'
import NavBar from '../components/NavBar/page'

function Blog() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>Blog post</h2>
      <p className='text-black flex justify-center text-center'>Blogs are a great method to increase traffic and generate leads. Make a profit.<br /> Get compensated for your efforts. </p>
      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-3'>
          <div className='flex flex-col w-80 h-48 border rounded-2xl shadow p-3 gap-3'>
            <h2 className='text-left font-bold text-xl text-black'>Article</h2>
            <h3 className='text-left font-bold text-slate-400'>How do you use social media for growing traffic and sales?</h3>

          </div>
          <div className='flex flex-col w-80 h-48 border rounded-2xl shadow p-3 gap-3'>
            <h2 className='text-left font-bold text-xl text-black'>Lifestyle</h2>
            <h3 className='text-left font-bold text-slate-400'>Health & fitness for busy people during times of stress</h3>
          </div>
          <div className='flex flex-col w-80 h-48 border rounded-2xl shadow p-3 gap-3'>
            <h2 className='text-left font-bold text-xl text-black'>CEO/ Office</h2>
            <h3 className='text-left font-bold text-slate-400'>QR codes- innovative ways to use them in small business</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog
