import { useState } from 'react'
import React from 'react'
import Special_One from '../assets/images/watch.jpg'
import StarRatings from 'react-star-ratings'
import { Line } from 'rc-progress';

function SpecialProduct() {
     const [rating, setRating] = useState(0)
    
   const changeRating = ( newRating) =>{
      setRating(newRating);
    }
  return (
      <div className='flex-[4]  rounded-2x'>
          <div className="special_product_card py-5">
              <div className='flex justify-between'>
                  <div className="w-[55%]">
                      <img src={Special_One}  alt="special"/>
                  </div>
                  <div className="w-[45%] p-[10px]">
                      <div className='special_product_content'>
                          <h6 className='brand'>Havels</h6>
                          <h5 className='title text-xs'>Samsung Galaxy Note10+ Mobile Phone; Sim...</h5>
                           <StarRatings
          rating={rating}
          starRatedColor="gold"
          changeRating={changeRating}
          starHoverColor="gold"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="1px"
                          />
                        <p className='price mt-[10px] flex'><span className='discount_price'>$600.00</span><span className='real_price'>$750.00</span></p>
              <div className='discount_till flex  mt-3 items-center gap-2'>
                <p className='text-xs'>
                  <b>5</b>Days
                </p>
                <div className='flex text-center gap-1 text-xs'>
                  <span className='bg-red-500 w-[27px] p-1 text-white   rounded-full'>05</span>:
                  <span className='bg-red-500 w-[27px] p-1 text-white rounded-full'>31</span>:
                  <span className='bg-red-500 w-[27px] p-1 text-white rounded-full'>15</span>
                </div>
              </div>
                  <div className='product_count mt-[20px]'>
                  <p className=' text-gray-500'>Product: 5</p>
                  <div className='progress mt-1'>
                    <Line percent={10} strokeWidth={4} trailWidth={20} strokeColor="#4b7bec" />
                  </div>
              </div>
              <div className='mt-5'>
                <button className=' option_button rounded-full text-xs p-3 px-3'>Add to Cart</button>
              </div>
              
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default SpecialProduct