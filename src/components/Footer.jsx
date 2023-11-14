import React from 'react'
import Kite from '../assets/images/paperplane.png';
import { AiTwotonePhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <>
      <footer className='py-[60px] border-b-[0.5px] border-slate-500'>
        <div className='container mx-auto'>
          <div className='flex'>
            <div className='flex-[5]'>
              <div className='footer-top-data flex items-center gap-5'>
                <img src={Kite} alt="kite" className='w-[50px]' />
                <h2 className='text-white text-2xl mb-0'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className='flex-[5]'>
             <div className='input-group flex bg-white rounded-md p-1  items-center justify-center'>
                              <input
                                  type='text'
                                  className='from-control outline-none text-black text-xs h-[40px] w-full py-2 px-2 rounded-tl-md rounded-bl-md'
                                  placeholder='Your Email'
                                  aria-label='Your Email'
                                  aria-describedby='basic-addon2'
                              />
                              <span className='subscribe  flex items-center text-xs cursor-pointer justify-center text-white rounded-md  h-[35px] py-2 px-4' id="basic_addon2">SUBSCRIBE</span>
            </div>  
            </div>
          </div>
        </div>
    </footer>
      <footer className='py-10 text-white'>
        <div className='flex container mx-auto justify-between'>
          <div className='flex text-sm flex-col'>
            <h3 className='my-3 text-2xl font-medium'>QUICK LINK</h3>
            <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>How to Buy Guide?</li>
              
            </ul>
          </div>
            <div className='flex text-sm flex-col'>
            <h3 className='my-3 text-2xl font-medium'>HELP</h3>
            <ul>
            <li>Payment</li>
            <li>Returns & Exchange</li>
            <li>Delivery</li>
            <li>FAQ</li>
              
            </ul>
          </div>
          <div className='flex text-sm flex-col'>
            <h3 className='my-3 text-2xl font-medium'>MY Account</h3>
            <ul>
               <li>My Personal information</li>
           </ul>
          </div>
          <div className='flex text-sm flex-col'>
            <h3 className='my-3 text-2xl font-medium'>Contact US</h3>
            <ul>
              <li className='flex items-center gap-4'>
            <AiTwotonePhone/>
             <a href="tel:+95 265577722">+95 265577722</a>
            </li>
              <li className='flex items-center gap-4'>
              <MdEmail/>
              <p>thuranyi@gmail.com</p>
            </li>
            </ul>
          </div>
        </div>
    </footer>
    <footer className='py-5 border-t-[0.1px] border-slate-500'>
        <div className='container mx-auto'>
          <div className='flex text-sm'>
            <div className=''>
              <p className='mx-auto text-center text-white'>&copy; {new Date().getFullYear()}; Powered by Thuran</p>
            </div>
            <div className=''>

            </div>
        </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer