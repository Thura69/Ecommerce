import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import Photo from '../assets/images/watch.jpg'
import Cross from '../assets/images/cross.svg';

function Favourite() {
  return (
      <div className=' bg-slate-200'>
          <Meta title={"Favourite Wishlist"} />
          <BreadCrumb title={"Favourite Wishlist"} />
          <div>
              <div className='container mt-2 mx-auto'>
                  <div className='flex gap-3'>
                      <div className='w-[25%] '>
                          <div className='relative'>
                              <img src={Photo} alt='kd' />
                              <div className='absolute top-[10px] right-[10px]'>
                                  <img className=' w-[20px] cursor-pointer' src={Cross} alt='dk' />
                              </div>
                              <div className='py-3'>
                                  <h5 className=' text-lg font-semibold'>Samsung Smart-watch</h5>
                              <p className=' font-medium mt-[10px]'>$300</p>
                              </div>
                          </div>
                      </div>
                      <div className='w-[25%] '>
                          <div className='relative'>
                              <img src={Photo} alt='kd' />
                              <div className='absolute top-[10px] right-[10px]'>
                                  <img className='w-[20px] cursor-pointer' src={Cross} alt='dk' />
                              </div>
                              <div className='py-3'>
                                  <h5 className=' text-lg font-semibold'>Samsung Smart-watch</h5>
                              <p className=' font-medium mt-[10px]'>$300</p>
                              </div>
                          </div>
                      </div>
                      <div className='w-[25%] '>
                          <div className='relative'>
                              <img src={Photo} alt='kd' />
                              <div className='absolute top-[10px] right-[10px]'>
                                  <img className='w-[20px] cursor-pointer' src={Cross} alt='dk' />
                              </div>
                              <div className='py-3'>
                                  <h5 className=' text-lg font-semibold'>Samsung Smart-watch</h5>
                              <p className=' font-medium mt-[10px]'>$300</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Favourite