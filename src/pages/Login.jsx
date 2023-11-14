import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

function Login() {
  return (
      <div className=' bg-slate-200 '>
          <Meta title={"Login"} />
          <BreadCrumb title={"Login"} />
          <div className=' container mx-auto py-5'>
              <div className='flex'>
                  <div className='login p-[20px] w-[500px] mx-auto rounded-md  bg-white'>
                      <h3 className=' text-[3.5vh] font-semibold mb-5'>Login</h3>
                      <form className='flex flex-col gap-3'>
                          <div>
                          <input className='border-2 h-[50px] px-2 w-[100%]' type='email' name='email' placeholder='email'/>
                          </div>  
                          <div>
                          <input type='password' className='h-[50px] px-2  w-[100%] border-2' name='password' placeholder='password'/>
                          </div>  
                          <div>
                              <Link to="/forgot" className=' text-blue-500 text-sm'>Forgot Password?</Link>
                          </div> 
                          <div className='mt-5 flex justify-center gap-3'>
                             <button  className='contact-button text-sm text-white w-[100px] rounded-3xl p-2 py-3'>Login</button>
                             <Link to="/signup" className='contact-button text-sm text-center text-white w-[100px] rounded-3xl p-2 py-3'>Sign Up</Link>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Login