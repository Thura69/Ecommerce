import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'

function Blog() {


    const li = "mb-2 text-gray-400 text-sm"

  return (
      <div className=' bg-slate-200'>
          <Meta title={"Blog"} />
          <BreadCrumb title={"Blog"} />
          <div className='flex py-[20px] justify-center container mx-auto items-start'>
              <div className='flex-[3] bg-white rounded-lg drop-shadow-md p-3 '>
                  <h3 className=' text-md font-semibold mb-[30px]'>Shop By Categories</h3>
                  <div>
                      <ul>
                          <li className={li}>Home</li>
                          <li className={li}>Our Store</li>
                          <li className={li}>Blogs</li>
                          <li className={li}>Contact</li>
                      </ul>
                  </div>
              </div>
              <div className='flex-[9] '>
                  <div className='flex flex-wrap items-center justify-center'>
                  <div className=' w-[50%]'>
                    <BlogCard/>
                  </div>
                  <div className=' w-[50%]'>
                    <BlogCard/>
                  </div>
                  <div className=' w-[50%]'>
                    <BlogCard/>
                  </div>
                  <div className=' w-[50%]'>
                    <BlogCard/>
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Blog