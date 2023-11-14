import React from 'react'
import MainBanner from '../assets/images/main-banner-1.jpg'
import CatBannerOne from '../assets/images/catbanner-01.jpg'
import CatBannerTwo from '../assets/images/catbanner-02.jpg'
import CatBannerThree from '../assets/images/catbanner-03.jpg'
import CatBannerFour from '../assets/images/catbanner-04.jpg'
import ServiceOne from '../assets/images/service.png'
import ServiceTwo from '../assets/images/service-02.png'
import ServiceThree from '../assets/images/service-03.png'
import ServiceFour from '../assets/images/service-04.png'
import ServiceFive from '../assets/images/service-05.png'
import Camera from '../assets/images/camera.jpg'
import SmartTv from '../assets/images/tv.jpg'
import Labtop from '../assets/images/laptop.jpg'
import Brand1 from '../assets/images/brand-01.png'
import Brand2 from '../assets/images/brand-02.png'
import Brand3 from '../assets/images/brand-03.png'
import Brand4 from '../assets/images/brand-04.png'
import Brand5 from '../assets/images/brand-05.png'
import Brand6 from '../assets/images/brand-06.png'
import Brand7 from '../assets/images/brand-07.png'
import Brand8 from '../assets/images/brand-08.png'
import Famous_one from '../assets/images/famous-1.webp'
import Famous_two from '../assets/images/famous-2.webp'
import Famous_three from '../assets/images/famous-3.webp'
import Famous_four from '../assets/images/famous-4.webp'
import {useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

function Home() {
  const nav = useNavigate();
  return (
    <>
      <section className='home_wrapper py-5'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-center'>
            <div className='flex-[2] w-[60%] '>
              <div className='flex justify-center items-center'>
                <div className='relative p-3'>
                  <img alt="main_banner" src={MainBanner} className='max-w-full w-full rounded-2xl' />
                  <div className='main_banner_content top-[15%] left-[5%] absolute'>
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                    <p>For 24mo. Footnote*</p>

                    <button className='main_banner_button'>  <Link className='LINk '>BUY NOW</Link></button>
                  </div>

                </div>
              </div>
            </div>
            <div className='flex-[1] w-[20%]'>
               <div className='flex  justify-center items-center'>
                <div className='relative p-3'>
                  <img alt="cat_banner" src={CatBannerOne} className='max-w-full w-full rounded-2xl' />
                  <div className='cat_banner_content top-[30%] left-[10%] absolute'>
                    <h4>BEST SALE.</h4>
                    <h5>Laptops Max.</h5>
                    <p>From $1699.00 or</p>
                    <p>$64.62/mo</p>
                  </div>

                </div>
              </div>
               <div className='flex  justify-center items-center'>
                <div className='relative p-3'>
                  <img alt="main_banner" src={CatBannerTwo} className='max-w-full  w-full rounded-2xl' />
                  <div className='cat_banner_content top-[30%] left-[10%] absolute'>
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band</p>
                    <p>styles and colors.</p>
                  </div>

                </div>
              </div>
            </div>
             <div className='flex-[1] w-[20%] '>
               <div className='flex justify-center items-center'>
                <div className='relative p-3'>
                  <img alt="cat_banner" src={CatBannerThree} className='max-w-full w-full rounded-2xl' />
                  <div className='cat_banner_content top-[30%] left-[10%] absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599 or</p>
                    <p>$49.91/mo. for 12 mo. *</p>
                  </div>

                </div>
              </div>
               <div className='flex justify-center items-center'>
                <div className='relative p-3 '>
                  <img alt="main_banner" src={CatBannerFour} className='max-w-full  w-full rounded-2xl' />
                  <div className='cat_banner_content top-[30%] left-[10%] absolute'>
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback &</p>
                    <p>ultra-low distortion</p>
                  </div>

                </div>
              </div>
            </div>
        </div>
        </div> 
      </section>
      <section className='home_wrapper_2 py-5'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-[20px]'>
              <img src={ServiceOne}  className="w-[27px]" alt="serviceOne" />
              <div>
                <h6 className=" text-sm font-bold">Free Shipping</h6>
                <p className="text-xs font-light text-slate-500">From all orders over S100</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-[20px]'>
              <img src={ServiceTwo}  className="w-[27px]" alt='serviceTwo' />
               <div>
                <h6 className=" text-sm font-bold">Daily Surpise Offers</h6>
                <p className="text-xs font-light text-slate-500">Save up to 25% off</p>
               </div>
            </div>
            <div className='flex items-center justify-center gap-[20px]'>
              <img src={ServiceThree} className="w-[27px]"  alt="serviceThree" />
               <div>
                <h6 className=" text-sm font-bold">Support 24/7</h6>
                <p className="text-xs font-light text-slate-500">Shop with an expert</p>
               </div>
            </div>
            <div className='flex items-center justify-center gap-[20px]'>
              <img src={ServiceFour}  className="w-[27px]" alt="serviceFour" />
               <div>
                <h6 className=" text-sm font-bold">Affordable Prices</h6>
                <p className="text-xs font-light text-slate-500">Get Factory direct price</p>
               </div>
            </div>
            <div className='flex items-center justify-center gap-[20px]'>
              <img src={ServiceFive}  className="w-[27px]" alt="serviceFive" />
               <div>
                <h6 className=" text-sm font-bold">Secure Payments</h6>
                <p className="text-xs font-light text-slate-500">100% Protected Payments</p>
               </div>
            </div>

          </div>
        </div>
      </section>
      <section className='home_wrapper_2 py-5'>
      <div className='container mx-auto'>
          <div className='flex'>
            <div className='categories flex flex-wrap justify-center  items-center'>
              <div className='flex w-[24%] justify-around  px-4 border-r-[1px] border-b-[1px]  items-center'>
                <div>
                  <h6 className=' text-sm font-bold'>Computers & Laptop</h6>
                  <p className=' text-slate-500 text-xs'>8 Items</p>
                </div>
                <img src={Labtop} className='max-w-full w-[80px]' alt="camera" />
              </div>
                <div className='flex justify-around w-[24%] gap-[20px]  px-4 border-r-[1px]  border-b-[1px]  items-center'>
                <div>
                  <h6 className='text-sm font-bold'>Smart TV</h6>
                  <p className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={SmartTv} className='max-w-full  w-[80px]'  alt="camera" />
              </div>
               <div className='flex justify-around  w-[24%]  px-4  border-r-[1px]  border-b-[1px] gap-[20px] items-center'>
                <div>
                  <h6 className='text-sm font-bold'>Smart Watched</h6>
                  <p  className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={Camera} className='max-w-full  w-[80px]' alt="camera" />
              </div>
               <div className='flex justify-around w-[24%]  px-4  border-b-[1px] gap-[20px] items-center'>
                <div>
                  <h6 className='text-sm font-bold'>Cameras</h6>
                  <p className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={Camera} className='max-w-full  w-[80px]' alt="camera" />
              </div>
               <div className='flex justify-around w-[24%] border-r-[1px]  px-4 gap-[20px] items-center'>
                <div>
                  <h6  className='text-sm font-bold'>Cameras</h6>
                  <p  className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={Camera} className='max-w-full w-[80px]' alt="camera" />
              </div>
                <div className='flex justify-around w-[24%] border-r-[1px] px-4 gap-[20px] items-center'>
                <div>
                  <h6  className='text-sm font-bold'>Smart TV</h6>
                  <p  className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={SmartTv} className='max-w-full w-[80px]'  alt="camera" />
              </div>
               <div className='flex justify-around  w-[24%] border-r-[1px]  px-4 gap-[20px] items-center'>
                <div>
                  <h6  className='text-sm font-bold'>Smart Watched</h6>
                  <p  className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={Camera} className='max-w-full w-[80px]'  alt="camera" />
              </div>
               <div className='flex  w-[24%] justify-around  px-4 gap-[20px] items-center'>
                <div>
                  <h6  className='text-sm font-bold'>Cameras</h6>
                  <p className='text-slate-500 text-xs'>10 Items</p>
                </div>
                <img src={Camera} className='max-w-full w-[80px]' alt="camera" />
              </div>
          </div>
          </div>    
      </div>
      </section>
      <section className='special_wrapper home_wrapper_2 py-5'>
        <div className='container mx-auto'>
          <div className='flex'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
          <div className='flex gap-[10px]'>
            <SpecialProduct />
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
      </section>
      <section className='home_wrapper_2 marque_wrapper py-5'>
        <div className='container bg-white drop-shadow-lg p-3 mx-auto'>
          <Marquee autoFill={true} loop={0} className='flex'>
           <div className='mx-4 w-[100px]'>
           <img src={Brand1} alt="brand"/>   
            </div>
              <div className='mx-4 w-[100px]'>
           <img src={Brand2} alt="brand"/>   
            </div>
              <div className='mx-4 w-[100px]'>
           <img src={Brand3} alt="brand"/>   
            </div>
              <div className='mx-4 w-[100px]'>
           <img src={Brand4} alt="brand"/>   
            </div>
              <div className='mx-4 w-[100px]'>
           <img src={Brand5} alt="brand"/>   
            </div>
              <div className='mx-4 w-[100px]'>
           <img src={Brand6} alt="brand"/>   
            </div>
              <div className='mx-4 w-[100px]'>
           <img src={Brand7} alt="brand"/>   
            </div>
                  <div className='mx-4 w-[100px]'>
           <img src={Brand8} alt="brand"/>   
          </div>
             </Marquee>
      </div>
      </section>
      <section className='famous_wrapper home_wrapper_2'>
        <div className="container mx-auto">
          <div className='flex flex-[12] gap-[10px]'>
            <div className='flex-[3] bg-black rounded-lg  relative text-white'>
              <img src={Famous_one} alt="famous_one" />
              <div className='famous_contant px-2 absolute text-md top-[5%] left-[10px]'>
              <h5>Big Screen</h5>
              <h6>Smart Watch Series</h6>
              <p className=' font-extralight'>From $399or $16.62/mo. for 24 mo.*</p>
            </div>
            </div>
            <div className='flex-[3] rounded-lg  relative'>
              <img src={Famous_two} alt='famous_two' />
              <div className='famous_contant px-2 absolute top-[5%] left-[10px]'>
              <h5 className='text-gray-500 text-[12px] uppercase'>Suidio Display</h5>
              <h6 className=' font-bold text-[20px]'>600 nits of brightness.</h6>
              <p className='text-gray-500 font-extralight'>27-inch 5K Retina Display</p>
                </div>
            </div>
            <div className='flex-[3] relative rounded-lg'>
              <img src={Famous_three} alt='famous_three' />
              <div className='famous_contant px-2 absolute top-[5%] left-[10px]'>
                <h5 className=' text-gray-500 uppercase'>Smart Phones</h5>
                <h6 className='font-bold text-[20px]'>Smartphone 13 Pro.</h6>
                <p className=' text-gray-500 font-extralight'>Now in Green.From $999.000 or $41.62/mo. for 24mp.Footnote*</p>
              </div>
            </div>
            <div className='flex-[3] relative'>
                 <img src={Famous_four} alt='famous_four' />
             <div className='famous_contant absolute px-2 top-[5%] left-[10px]'>
                <h5 className=' text-gray-500 uppercase'>Smart Phones</h5>
                <h6 className='font-bold text-[20px]'>Smartphone 13 Pro.</h6>
                <p className=' text-gray-500 font-extralight'>Now in Green.From $999.000 or $41.62/mo. for 24mp.Footnote*</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className='popular_products home_wrapper_2 py-5'>
        <div className='container mx-auto'>
          <div className='flex'>
             <h3 className='section-heading'>Our Popular Products</h3>
         </div>
          <div>
            <div className='flex'>
            <ProductCard />
          
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
          </div>    
        </div>
      </div>
      </section> 
       <section className='feature_wrapper home_wrapper_2 py-5'>
        <div className='container mx-auto'>
          <div className='flex'>
             <h3 className='section-heading'>Featured Collection</h3>
         </div>
          <div className='flex'>
            <ProductCard />
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
            
            
          </div>    
      </div>
      </section> 
      <section className='blog_wrapper home_wrapper_2 py-5'>
        <div className='container mx-auto'>
          <div className='flex'>
             <h3 className='section-heading'>Our Latest Blogs</h3>
         </div>
          <div className='flex'>
            <BlogCard />
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
            
          </div>    
      </div>
      </section>
    </>
  )
}

export default Home