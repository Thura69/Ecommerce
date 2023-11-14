import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from './Meta'
import Watch from '../assets/images/watch.jpg';
import Music from '../assets/images/headphone.jpg';
import StarRatings from 'react-star-ratings'; 
import GR from '../assets/images/gr.svg';
import GR2 from '../assets/images/gr2.svg';
import GR3 from '../assets/images/gr3.svg';
import GR4 from '../assets/images/gr4.svg';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';


function OurStore() {
    const [rating, setRating] = useState(0);
    const [grid, setGrid] = useState(32);
    
    const changeRating = (newRating) => {
        setRating(newRating);
    };
  return (
      <>
         <Meta title={'Our Store'}/>
          <BreadCrumb title={"Shop"} />
          <div className='store-wrapper home-wrapper-2 bg-slate-200 py-5'>
              <div className='container mx-auto'>
                  <div className='flex justify-between  gap-3 '>
                      <div className='flex-[3] border-2'>
                          <div className='filter-card mb-3'>
                              <h3 className='filter-title font-semibold  mb-[20px]'>
                                  Shop By Categories
                              </h3>
                              <ul>
                              <li>Watch</li>
                              <li>Tv</li>
                              <li>Camera</li>
                              <li>Laptop</li>
                          </ul>
                          </div>
                          
                          <div className='filter-card mb-3'>
                           <h3 className='filter-title font-semibold  mb-[20px]'>
                                  Filter By
                                  <div>
                                      <h5 className='sub-title'>Availability</h5>
                                      <div>
                                           <div className='form-check'>
                                          <input className='form-check-input' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">In Stock (1)</label>
                                      </div>
                                      <div className='form-check'>
                                          <input className='form-check-input bg-yellow-200' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">Out of Stock(0)</label>
                                      </div>
                                     </div>
                                      <h5 className=' mt-[20px] mb-[10px]'>Price</h5>
                                      <div>
                                          <div className='form-floating  flex gap-2'>
                                              <input type='' className='form-control border-[1px] w-[90px] border-black px-3 h-[40px]' placeholder='From' id="floatingInput" />
                                            
                                              <input type='' className='form-control border-[1px] w-[90px] border-black px-3 h-[40px]' placeholder='To' id="floatingInput" />
                                            
                                          </div>
                                      </div>
                                      <h5 className=' mt-[20px] mb-[10px]'>Colors</h5>
                                      <div>
                                          <div className='d-flex flex-wrap'>
                                              <ul className='colors'>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <h5 className=' mt-[20px] mb-[10px]'>Size</h5>
                                      <div>
                                          <div className='form-check'>
                                          <input className='form-check-input bg-yellow-200' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">S (2)</label>
                                      </div>
                                          <div className='form-check'>
                                          <input className='form-check-input bg-yellow-200' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">M (2)</label>
                                      </div>
                                          <div className='form-check'>
                                          <input className='form-check-input bg-yellow-200' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">L (2)</label>
                                      </div>
                                          <div className='form-check'>
                                          <input className='form-check-input bg-yellow-200' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">XL (2)</label>
                                      </div>
                                          <div className='form-check'>
                                          <input className='form-check-input bg-yellow-200' type='checkbox' value='' id=''  />
                                          <label className='form-check-label' for="">XXL (2)</label>
                                      </div>
                                      </div>
                                  </div>
                            </h3>
                          </div>
                          <div className='filter-card mb-3'>
                            <h3 className='filter-title font-semibold  mb-[20px]'>
                                  Product Tags
                              </h3>
                              <div>
                                  <div className='product-tags flex flex-wrap items-center gap-2'>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          HeadPhone
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Laptop
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Mobile
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Oppo
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Speaker
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Tablet
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Vivo
                                      </span>
                                      <span className='badge bg-gray-200 rounded-md py-1 px-2 text-sm bg-secondary rounded-3'>
                                          Wire
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div className='filter-card mb-3'>
                             <h3 className='filter-title font-semibold  mb-[20px]'>
                                  Random Product
                              </h3>
                              <div>
                                  <div className='random-products flex flex-col'>
                                      <Link to="/single-pro" className='flex items-center  justify-between'>
                                          <img className='w-[40%]' src={Music} alt='watch' />
                                          <div>
                                              <h5 className='text-xs font-semibold mb-2'>Kids Headphones Bulk 10 Pack Multi Colored for ...</h5>
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
                                              <p className='text-xs font-semibold mt-1 '>$100.00</p>
                                          </div>
                                      </Link>
                                     <hr/>
                                      <div >
                                          <Link className='flex items-center  justify-between' to="/single-pro">
                                            <img className='w-[40%]' src={Watch} alt='watch' />
                                          <div>
                                              <h5 className='text-xs font-semibold mb-2'>Kids Headphones Bulk 10 Pack Multi Colored for ...</h5>
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
                                              <p className='text-xs font-semibold mt-1 '>$100.00</p>
                                          </div>
                                          </Link>
                                      </div>
                                      <div className='w-[25%]'></div>
                                      <div className='w-[25%]'></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='flex-[9]'>
                          <div className='filter-sort-grid rounded-md flex items-center justify-between  py-2 px-2 bg-white'>
                              <div className='flex items-center gap-2'>
                                  <p className='mb-0'>Sort By:</p>
                                  <select
                                      name=""
                                      className='form-control bg-white  form-select'
                                      id=""
                                  >
                                <option value={'manual'}>Featured</option>
                                <option value="best-selling" selected>Best Selling</option>
                                <option value={"title-ascending"}>Alphabetically, A-Z</option>
                                <option value={"title-descending"}>Alphabetically, Z-A</option>
                                <option value={"price-ascending"}>Price, low to high</option>
                                <option value={"price-descending"}>Price, high to low</option>
                                <option value={"created-ascending"}>Date, old to new</option>
                                <option value={"created-descending"}>Date, new to old</option>
                                  </select>
                              </div>
                              <div className='flex items-center gap-3'>
                                  <p className=' text-gray-400 text-sm'>21 products</p>
                                  <div className='flex gap-1 items-center'>
                                      <div onClick={() => {
                                          setGrid(24)
                                      }} className=' bg-slate-200 w-[33px] h-[30px] flex items-center justify-center p-2 rounded-lg cursor-pointer'>
                                          <img className='h-[20px]' src={GR4} alt="He" />
                                      </div>
                                      <div onClick={() => {
                                          setGrid(32)
                                      }} className=' bg-slate-200 w-[33px] flex items-center justify-center h-[30px] p-2 rounded-lg cursor-pointer'>
                                          <img className='h-[18px]' src={GR3} alt="He" />
                                      </div>
                                      <div onClick={() => {
                                          setGrid(49)
                                      }} className=' bg-slate-200 flex items-center justify-center w-[33px] h-[30px]  p-2 rounded-lg cursor-pointer'>
                                          <img className='h-[18px]' src={GR2} alt="He" />
                                      </div>
                                      <div onClick={() => {
                                          setGrid(99)
                                      }} className=' bg-slate-200 w-[33px] flex items-center justify-center  h-[30px] p-2 rounded-lg cursor-pointer'>
                                          <img className=' scale-[1.1]' src={GR} alt="He" />
                                      </div>
                                  </div>
                              </div>
                          </div>   
                          <div className='prodcut-lists gap-3 py-5 flex flex-wrap'>
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                              <ProductCard grid={grid} />   
                            
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default OurStore