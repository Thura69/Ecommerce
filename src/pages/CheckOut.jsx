import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md';
import watch from '../assets/images/headphone.jpg'
import { Link } from 'react-router-dom';

function CheckOut() {
  return (
    <div className='bg-slate-200'>
      <div className='py-5'>
        <div className='container mx-auto'>
          <div className='flex gap-3'>
            <div className='w-[50%]'>
              <h3 className='text-3xl  font-medium mb-3'>Dev Corner</h3>
              <p className=' text-gray-500'>Cart / Information / Shipping / Payment</p>
            <h3 className=' my-3 text-3xl font-medium mb-3'>Contact Information</h3>
            <p className='text-md  text-gray-500'>Navdeep Dahiya (monud02332@gmail.com)</p>
            <div className='py-5'>
            <input className='border-2 mb-3 border-slate-300 w-full bg-white outline-none p-2' placeholder='Select Country'/>    
            <div className='flex w-full mb-3 gap-3'>
            <input className='border-2 w-[50%] border-slate-300 bg-white outline-none p-2' placeholder='First Name'/>    
            <input className='border-2 w-[50%] border-slate-300  bg-white outline-none p-2' placeholder='Last Name'/>    
            </div>  
            <input className='border-2 mb-3 border-slate-300 w-full bg-white outline-none p-2' placeholder='Address'/> 
            <input className='border-2 mb-3 border-slate-300 w-full bg-white outline-none p-2' placeholder='Apartment, Suite, etc'/>
            <div className='flex w-full gap-3'>
            <input className='border-2 w-[33.33%] border-slate-300 bg-white outline-none p-2' placeholder='City'/>
            <input className='border-2 w-[33.33%] border-slate-300 bg-white outline-none p-2' placeholder='Select State'/>
            <input className='border-2 w-[33.33%] border-slate-300 bg-white outline-none p-2' placeholder='Zipcode'/>
            </div> 
            </div>
            <div className=' flex mt-6 justify-between items-center'>
                <Link to="/cart" className=' flex items-center gap-3'> <MdOutlineArrowBack/> Return to Cart</Link>
                    <button  className='contact-button !bg-[#232f3e] w-[260px] text-md px-5 text-white  rounded-3xl p-2 py-3'>Continue to Shipping</button>
            </div>
            </div>
            <div className='w-[50%]  border-black'>
            <div className=' h-[176px] border-b-[1px] border-gray-300 flex items-center justify-between'>
                 <div className=' w-[50%] gap-5 flex items-center justify-center'>
            <div className=' relative w-[100px]'>
                <img className=' min-w-[100px]' src={watch} alt='w' />
                <div className=' absolute top-[-10px] right-[-10px] bg-gray-400 flex items-center justify-center w-[30px] h-[30px] rounded-full text-gray-200'>1</div>
            </div>
            <div>
              <p className=' font-bold'>Head Phone</p>
              <p className=' text-gray-400'>Kids headphones bulk 10 pack multi colored for students</p>
            </div>
          </div>
           <p className=' w-[50%]  text-center text-lg font-bold'>$100.00</p>
            </div>
            <div className='border-b-[1px] py-4 pb-5 border-gray-300'>
              <div className='mb-4 text-gray-500 mt-4 flex items-center justify-between border-black'>
             <p>Subtotal</p>     
             <p>$1000</p>     
             </div>
              <div className='flex text-gray-500 items-center justify-between border-black'>
             <p>Shipping</p>     
             <p>$1000</p>     
             </div>
            </div>
              <div className='flex text-gray-500 pt-5 items-center justify-between border-black'>
             <p>Total</p>     
             <p>$1000</p>     
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut