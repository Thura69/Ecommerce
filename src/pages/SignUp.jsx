import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
      <div className=' bg-slate-200'>
          <Meta title={"Sign Up"} />
          <BreadCrumb title={"Sign Up"} />
          <div className='container mx-auto p-[100px]'>
              <div className='w-[500px] mx-auto rounded-md drop-shadow-md bg-white p-5'>
                  <h3 className=' text-center mb-4 text-gray-400 text-xl font-semibold'>Sign Up</h3>
                  <input className=' w-[100%] p-3 bg-slate-200 mb-3 rounded-md' placeholder='Name'/>
                  <input className=' w-[100%] p-3 bg-slate-200 mb-3 rounded-md' placeholder='Email'/>
                  <input className=' w-[100%] p-3 bg-slate-200 mb-3 rounded-md' placeholder='Mobile Number'/>
                  <input className=' w-[100%] p-3 bg-slate-200 mb-3 rounded-md' placeholder='Password' />
                  <div className='mt-5 flex justify-center gap-3'>
                  <Link to="/login" className='contact-button text-center text-sm text-white w-[100px] rounded-3xl p-2 py-3'>Login</Link>
                  <button className='contact-button text-sm text-white w-[100px] rounded-3xl p-2 py-3'>SignUp</button>
              </div>
              </div>
              
          </div>
    </div>
  )
}

export default SignUp