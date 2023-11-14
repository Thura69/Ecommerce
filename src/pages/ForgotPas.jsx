import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'

function ForgotPas() {
  return (
      <div className=' bg-slate-200 drop-shadow-md'>
          <Meta title={"Forgot Password"} />
          <BreadCrumb title={"Forgot Password"} />
          <div className=' p-[100px] mx-auto  container'>
            <div className=' bg-white w-[500px] rounded-md mx-auto p-5 text-center'>
                     <h3 className=' text-gray-400 font-semibold text-lg'>Reset Your Password</h3>
              <p className='mt-2 text-sm text-gray-400'>Well will send you an email to reset your password</p>
              <input className='mt-5 bg-slate-200 rounded-md w-[100%] p-2' placeholder='Email' />
                <div className='mt-5 flex justify-center items-center flex-col gap-3'>
                             <button className='contact-button text-sm text-white w-[100px] rounded-3xl p-2 py-3'>Submit</button>
                             <h3 className='text-sm'>Cancel</h3>
                </div>
           </div>
         </div>
    </div>
  )
}

export default ForgotPas