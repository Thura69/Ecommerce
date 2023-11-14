import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogPic from '../assets/images/blog-1.jpg'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai';

function SingleBlog() {

  const li = "mb-2 text-gray-400 text-sm"
  return (
      <div className=' bg-slate-200'>
          <meta title='Single Blog'/>
          <BreadCrumb title='Single Blog' />
          <div className='flex py-[20px] justify-center container mx-auto items-start'>
              <div className='flex-[3] bg-white rounded-md  p-3 '>
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
                  <div className='single-blog-card px-3'>
                      <h3 className='title text-[24px] mb-3 font-semibold'>
                          A Beautiful Sunday Morning Renaissance
                      </h3>
                      <img src={BlogPic} alt='"d' />
                      <p className='py-3 text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <Link to="/blog" className='flex items-center gap-3 justify-start'>
                 <AiOutlineArrowLeft/>   Go Back to Blogs 
                      </Link>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default SingleBlog