import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

function Reset() {
  return (
    <div className='bg-slate-200'>
          <meta title='Reset Password' />
          <BreadCrumb title={"Reset Password"} />
          <div className='mx-auto container py-[100px]'>
              <div className='w-[500px] bg-white p-5 rounded-md mx-auto'>
                  <h3 className=' text-center mb-4 text-gray-400 text-xl font-semibold'>Rest Password</h3>
                  <input className=' w-[100%] p-3 bg-slate-200 mb-3 rounded-md' placeholder='Password'/>
                  <input className=' w-[100%] p-3 bg-slate-200 mb-3 rounded-md' placeholder='Confirm Password'/>
                  <div className='mt-5 flex justify-center gap-3'>
                  <button className='contact-button text-sm text-white w-[100px] rounded-3xl p-2 py-3'>Ok</button>
              </div>
              </div>
          </div>
    </div>
  )
}

export default Reset