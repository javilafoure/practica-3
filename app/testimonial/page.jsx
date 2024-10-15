import NavBar from '../components/NavBar/page'

function Testimonial() {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <h2 className='flex justify-center font-bold text-3xl py-8 text-black'>What our clients have yo say</h2>
      <p className='text-black flex justify-center text-center'>Our success is determined on how satisfied our customers are with the<br /> service. These reviews say we have stuff to do.</p>
      <div className='flex flex-col py-14'>
        <div className='flex justify-center px-3 gap-8'>
          <div className='w-96 h-80 border rounded-lg shadow'></div>
          <div className='flex flex-col w-96 h-80 p-3 gap-3'>
            <h2 className='text-left font-bold text-xl text-black'>Outstanding</h2>
            <p className='text-left text-slate-400'>I just wanted to drop you a little email to say thank you for all your hard work. Im delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.</p>
            <div className='flex'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09375 1.62402L6.0625 5.78027L1.46875 6.43652C0.65625 6.56152 0.34375 7.56152 0.9375 8.15527L4.21875 11.374L3.4375 15.9053C3.3125 16.7178 4.1875 17.3428 4.90625 16.9678L9 14.8115L13.0625 16.9678C13.7812 17.3428 14.6562 16.7178 14.5312 15.9053L13.75 11.374L17.0312 8.15527C17.625 7.56152 17.3125 6.56152 16.5 6.43652L11.9375 5.78027L9.875 1.62402C9.53125 0.905273 8.46875 0.874023 8.09375 1.62402Z" fill="#EFAB18" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09375 1.62402L6.0625 5.78027L1.46875 6.43652C0.65625 6.56152 0.34375 7.56152 0.9375 8.15527L4.21875 11.374L3.4375 15.9053C3.3125 16.7178 4.1875 17.3428 4.90625 16.9678L9 14.8115L13.0625 16.9678C13.7812 17.3428 14.6562 16.7178 14.5312 15.9053L13.75 11.374L17.0312 8.15527C17.625 7.56152 17.3125 6.56152 16.5 6.43652L11.9375 5.78027L9.875 1.62402C9.53125 0.905273 8.46875 0.874023 8.09375 1.62402Z" fill="#EFAB18" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09375 1.62402L6.0625 5.78027L1.46875 6.43652C0.65625 6.56152 0.34375 7.56152 0.9375 8.15527L4.21875 11.374L3.4375 15.9053C3.3125 16.7178 4.1875 17.3428 4.90625 16.9678L9 14.8115L13.0625 16.9678C13.7812 17.3428 14.6562 16.7178 14.5312 15.9053L13.75 11.374L17.0312 8.15527C17.625 7.56152 17.3125 6.56152 16.5 6.43652L11.9375 5.78027L9.875 1.62402C9.53125 0.905273 8.46875 0.874023 8.09375 1.62402Z" fill="#EFAB18" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09375 1.62402L6.0625 5.78027L1.46875 6.43652C0.65625 6.56152 0.34375 7.56152 0.9375 8.15527L4.21875 11.374L3.4375 15.9053C3.3125 16.7178 4.1875 17.3428 4.90625 16.9678L9 14.8115L13.0625 16.9678C13.7812 17.3428 14.6562 16.7178 14.5312 15.9053L13.75 11.374L17.0312 8.15527C17.625 7.56152 17.3125 6.56152 16.5 6.43652L11.9375 5.78027L9.875 1.62402C9.53125 0.905273 8.46875 0.874023 8.09375 1.62402Z" fill="#EFAB18" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09375 1.62402L6.0625 5.78027L1.46875 6.43652C0.65625 6.56152 0.34375 7.56152 0.9375 8.15527L4.21875 11.374L3.4375 15.9053C3.3125 16.7178 4.1875 17.3428 4.90625 16.9678L9 14.8115L13.0625 16.9678C13.7812 17.3428 14.6562 16.7178 14.5312 15.9053L13.75 11.374L17.0312 8.15527C17.625 7.56152 17.3125 6.56152 16.5 6.43652L11.9375 5.78027L9.875 1.62402C9.53125 0.905273 8.46875 0.874023 8.09375 1.62402Z" fill="#EFAB18" />
              </svg>

            </div>
            <h3 className='text-left text-slate-400'><span className='text-black font-bold'>Daniel Lane</span>, Developer</h3>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Testimonial
