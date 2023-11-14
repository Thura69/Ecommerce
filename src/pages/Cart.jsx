import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import HeadPhone from '../assets/images/headphone.jpg'
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Cart() {
  return (
   <>
  <div className='bg-slate-200'>
     <Meta title={'Cart'}/>
   <BreadCrumb title={"Cart"}/>
   <section className='py-5'>
    <div className='container mx-auto'>
      <div className='flex flex-col mt-[60px]'>
        <div className='flex text-slate-500 text-md font-[400] w-[100%] border-slate-300 border-b-[1px] pb-[20px] justify-between items-center'>
            <h4 className=' w-[40%]'>Product</h4>
            <h4 className='w-[10%]'>Price</h4>
            <h4 className='w-[15%]'>Quantity</h4>
            <h4 className='w-[15%]'>Total</h4>
        </div>
        <div className='flex text-slate-500 text-md font-[400] w-[100%] border-slate-300 border-b-[1px] pb-[20px] justify-between items-center my-[40px] mb-[30px]'>
            <h4 className=' w-[40%] flex justify-between gap-[5] items-center'>
            <img className='w-[20%]' src={HeadPhone} alt='dd'/>
           <div className='w-[75%] '>
              <p>Kids headphones bulk 10 pack multi colored for students</p>
              <p>Size: S</p>
              <p>Color: #A8B9E0D7 </p>
           </div>
            </h4>
            <h4 className='w-[10%] text-lg font-semibold text-black'>$100.00</h4>
            <h4 className='w-[15%]'> <input type='number' value={'1'} className=' p-1 w-[80px] border-[1px]' /></h4>
            <h4 className='w-[15%] flex items-center justify-center gap-3 text-lg font-semibold text-black'>$100.00 <button className='bg-[#212b39] rounded-full w-[35px] h-[35px] flex items-center justify-center'><BsFillTrash3Fill className='text-white'/></button></h4>
        </div>
         <button  className='contact-button !bg-[#232f3e] w-[210px] text-md px-5 text-white  rounded-3xl p-2 py-3'>Continue Shopping</button>
         <div className='flex mt-[20px]'>
            <div className='w-[50%] text-gray-500'>Order special instructions</div>
            <div className='w-[50%] text-gray-500  flex  justify-start  border-black flex-col items-end'>
            <p className=' text-lg'>Subtotal : <span className=' font-bold'>$100.00 </span></p>
            <p className='my-[20px] text-lg'>Taxes and shipping calculated at checkout</p>
             <Link to='/checkout'  className='contact-button !bg-[#232f3e] w-[150px] text-center text-md px-5 text-white  rounded-3xl p-2 py-3'>Check Out</Link>
            </div>
         </div>
      </div>
    </div>
   </section>
  </div>
   </>
  )
}

export default Cart