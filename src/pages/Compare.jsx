import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import Watch from '../assets/images/watch.jpg'
import Cross from '../assets/images/cross.svg'

function Compare() {
  return (
      <div className=' bg-slate-200'>
          <Meta title={'Compare Products'} />
          <BreadCrumb title={"Compare Products"} />
          <div>
              <div className=' container mx-auto mt-2'>
                  <div className='flex gap-3  flex-wrap'>
                      <div className='  w-[25%]  '>
                          <div className='compare-product-card   relative'>
                          <img src={Cross} alt='hello' className='absolute cursor-pointer top-[10px] right-[10px] w-[20px]' />
                           <div>
                        <img alt="watch" src={Watch} />
                            </div>
                              <div className='compare-product-details'>
                                  <h3 className='title'>Milanese Loop Watch Band For 42mm/44mm Apple Watch</h3>
                                  <h6 className='price'>$100.00</h6>
                                  <div className='product-details'>
                                      <h5>Brand:</h5>
                                      <p>Havels</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Type:</h5>
                                      <p>Tablet Computers</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>SKU:</h5>
                                      <p>SKU033</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Availability::</h5>
                                      <p>In Stock</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Color:</h5>
                                      <div>
                                           <ul className='flex gap-2'>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                      </ul>
                                      </div>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Size:</h5>
                                      <p>S M L</p>
                                  </div>
                              </div>   
                          </div>
                      </div>
                      <div className=' w-[25%]'>
                          <div className='compare-product-card   relative'>
                          <img src={Cross} alt='hello' className='absolute cursor-pointer top-[10px] right-[10px] w-[20px]' />
                           <div>
                        <img alt="watch" src={Watch} />
                            </div>
                              <div className='compare-product-details '>
                                  <h3 className='title'>Milanese Loop Watch Band For 42mm/44mm Apple Watch</h3>
                                  <h6 className='price'>$100.00</h6>
                                  <div className='product-details'>
                                      <h5>Brand:</h5>
                                      <p>Havels</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Type:</h5>
                                      <p>Tablet Computers</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>SKU:</h5>
                                      <p>SKU033</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Availability::</h5>
                                      <p>In Stock</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Color:</h5>
                                      <div>
                                           <ul className='flex gap-2'>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                      </ul>
                                      </div>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Size:</h5>
                                      <p>S M L</p>
                                  </div>
                              </div>   
                          </div>
                      </div>
                      <div className=' w-[25%]'>
                          <div className='compare-product-card   relative'>
                          <img src={Cross} alt='hello' className='absolute cursor-pointer top-[10px] right-[10px] w-[20px]' />
                           <div>
                        <img alt="watch" src={Watch} />
                            </div>
                              <div className='compare-product-details'>
                                  <h3 className='title'>Milanese Loop Watch Band For 42mm/44mm Apple Watch</h3>
                                  <h6 className='price'>$100.00</h6>
                                  <div className='product-details'>
                                      <h5>Brand:</h5>
                                      <p>Havels</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Type:</h5>
                                      <p>Tablet Computers</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>SKU:</h5>
                                      <p>SKU033</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Availability::</h5>
                                      <p>In Stock</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Color:</h5>
                                      <div>
                                           <ul className='flex gap-2'>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                      </ul>
                                      </div>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Size:</h5>
                                      <p>S M L</p>
                                  </div>
                              </div>   
                          </div>
                      </div>
                      <div className=' w-[25%]'>
                          <div className='compare-product-card   relative'>
                          <img src={Cross} alt='hello' className='absolute cursor-pointer top-[10px] right-[10px] w-[20px]' />
                           <div>
                        <img alt="watch" src={Watch} />
                            </div>
                              <div className='compare-product-details'>
                                  <h3 className='title'>Milanese Loop Watch Band For 42mm/44mm Apple Watch</h3>
                                  <h6 className='price'>$100.00</h6>
                                  <div className='product-details'>
                                      <h5>Brand:</h5>
                                      <p>Havels</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Type:</h5>
                                      <p>Tablet Computers</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>SKU:</h5>
                                      <p>SKU033</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Availability::</h5>
                                      <p>In Stock</p>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Color:</h5>
                                      <div>
                                           <ul className='flex gap-2'>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                          <li className='w-[20px] h-[20px] bg-red-300 rounded-2xl'></li>
                                      </ul>
                                      </div>
                                  </div>
                                  <div className='product-details'>
                                      <h5>Size:</h5>
                                      <p>S M L</p>
                                  </div>
                              </div>   
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Compare