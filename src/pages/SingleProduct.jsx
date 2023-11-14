import React, { useState } from 'react'
import Meta from './Meta'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import Product from '../assets/images/tab2.jpg';
import ReactImageZoom from 'react-image-zoom';
import { Rating } from 'react-simple-star-rating';
import { BiGitCompare } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

function SingleProduct() {
    const [rating, setRating] = useState(0);


    
  const changeRating = (newRating) => {
  setRating(newRating);
  };
    
 const props = {width: 700, height: 600, zoomWidth: 600, img:Product};

  return (
      <>
        <div className=' bg-slate-200'>
          <Meta title={"Product Name"}/>
          <div className='main-product-wrapper py-5 '>
              <div className="container mx-auto">
                  <div className='flex bg-white flex-[12]   p-5'>
                      <div className='flex-[6] relative '>
                      <div className='main-product-img'>
                         <div className=''>
                            <ReactImageZoom {...props} />
                          </div>
                         </div>
                        
                      </div>
                      <div className='flex-[6] relative h-[600px] '>
                              <div className='flex-[12] h-[300px]'>
                                  <h3 className=' text-lg mb-2  font-extrabold'>Kids Headphone Bulk 10 Pack Multi Colored For Stuends</h3>
                                  <hr />
                                  <p className='my-2 font-medium'>$100.00</p>
                                  <div className='flex items-center gap-3'>
                                       <StarRatings
          rating={rating}
          starRatedColor="gold"
          changeRating={changeRating}
          starHoverColor="gold"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="1px"
                                      />
                                      <p className=' text-gray-500'>(2 reviews)</p>
                                  </div>
                                  <p className=' text-gray-500 text-sm mt-[10px] mb-[10px]'>Write a review</p>
                                  <hr />
                                  <div>
                                      <p className=' py-1 pt-2 font-medium'>Type : <span className=' text-sm font-light  text-gray-500'>Tablet</span></p>
                                      <p className=' py-1 font-medium'>Brand : <span className=' text-sm font-light  text-gray-500'>Samsung</span></p>
                                      <p className=' py-1 font-medium'>Categories : <br /><span className=' text-sm font-light  text-gray-500'>airpods, camera's, Computers & Laptop, headphone, mini speaker, smart phone</span></p>
                                     <p className=' py-1 font-medium'>Tags : <span className=' font-light  text-gray-500 text-sm'>headphones laptop oppo speaker</span></p>
                                     <p className=' py-1 font-medium'>SKU : <span className=' font-light  text-gray-500 text-sm'>12334</span></p>
                                     <p className=' py-1 font-medium'>Availability : <span className=' font-light  text-gray-500 text-sm'>12 in Stock</span></p>
                                      <div>
                                          <p className='py-1 font-medium'>Size</p>
                                          <div className='flex items-center mt-1 gap-2'>
                                          <div className='border-[1px] border-black text-gray-400 text-sm w-[45px] flex items-center justify-center h-[30px]'>S</div>
                                          <div className=' w-[40px]  flex items-center text-gray-400 text-sm justify-center h-[30px]'>M</div>
                                          </div>
                                     </div>
                                      <div className='py-1 font-medium'>
                                          <p className='py-1 font-medium'>
                                          Color
                                          </p>
                                     <div className='flex items-center gap-3'>
                                             <div className=' w-[25px] h-[25px] rounded-[30px] bg-red-800'>
                                          </div>
                                          <div className=' w-[25px] h-[25px] rounded-[30px] bg-blue-800'>
                                          </div>
                                     </div>
                                     <div className='flex gap-5 items-center py-2'>
                                    <p className=' text-md'>Quantity : </p>
                                              <input type='number' className=' p-1 w-[80px] border-[1px]' />
                            <Link to="/cart"  className='contact-button text-xs px-5 text-white  rounded-3xl p-2 py-3'>ADD TO CART</Link>
                             <Link to="/checkout" className='contact-button text-xs text-center text-white  rounded-3xl p-2 py-3 px-5'>BUY IT NOW</Link>
                                          </div>
                                    <div className='flex gap-2 mt-[20px]'>
                                        <p className=' cursor-pointer text-slate-500 text-sm flex items-center justify-center gap-2'> <BiGitCompare/> Add to Compare</p>
                                        <p className=' cursor-pointer text-slate-500 text-sm flex items-center justify-center gap-2'> <AiOutlineHeart/> Add to Wishlist</p>
                                    </div>
                                      </div>
                                  </div>
                            </div>
                      </div>
                  </div>
              </div>
              <div className='description-wrapper '>
                  <section className='reviews-wrapper py-5'>
                      <div className='container mx-auto'>
                          <p className=' text-[3vh] font-medium mb-3'>Description</p>
                        <div className='bg-white p-4 rounded-md'>
                              <p className=' rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus, eos ipsum repellat fugiat sit ab impedit dolorum assumenda iusto quibusdam possimus quo eaque consequatur modi, error incidunt eius rem.</p>
                          </div>
                      </div>
                  </section>
              </div>
              <div className='reviews-wrapper'>
                  <section className='reviews-wrapper py-5'>
                      <div className='container mx-auto'>
                          <p className='text-[3vh] font-medium mb-3'>Reviews</p>
                          <div className='bg-white rounded-md p-4'>
                              <h3 className=' font-medium text-lg'>Coustomer Reviews</h3>
                              <div className='flex justify-between mt-4'>
                                  <div className='flex items-center gap-4 '>
                                      <h3>
                                           <StarRatings
          rating={rating}
          starRatedColor="gold"
          changeRating={changeRating}
          starHoverColor="gold"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="1px"
          />
                                      </h3>
                                      <p className=' text-xs text-gray-500 underline'>Based on 2 Reviews</p>
                                  </div>
                                  <Link className=' text-xs text-gray-500 underline'>Write a reviews</Link>
                              </div>
                              <hr className=' mt-5 mb-5' />
                              <div>
                                  <h3 className=' font-medium text-lg text-gray-500'>Write a  review</h3>
                                  <div className='mt-3'>
                                        <StarRatings
          rating={rating}
          starRatedColor="gold"
          changeRating={changeRating}
          starHoverColor="gold"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="1px"
                                  />
                                </div>
                                  <textarea className='mt-5  outline-none border-[1px] w-[100%] h-[120px] p-3' placeholder='comment'>
                                      
                                  </textarea>
                                  <div className='mt-2'>
                                     <button  className='contact-button text-sm text-white w-[100px] rounded-3xl p-2 py-3'>Review</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
          </div>
      </>
  )
}

export default SingleProduct