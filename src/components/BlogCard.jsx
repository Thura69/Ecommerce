import React from 'react'
import BlogPic from '../assets/images/blog-1.jpg'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
      <div className='blog_card mb-5 bg-white rounded-md'>
        <div className=''>
          <img src={BlogPic} className=' rounded-tl-lg  rounded-tr-lg' alt="blog"/> 
        </div>
        <div className='blog_contant'>
          <p className='date_title'>11 JUNE, 2022</p>
          <h5 className='blog_title'>A Beautiful Sunday Morning Renaissance</h5>
          <p className='contant'>You're Onlv As Good As Your ast Collection. Which Is An Enormous Pressure. I Think There Is Something About</p>
        <button  className='main_banner_button '>
          <Link to="/blog/:id">Read More</Link>
          </button>
        </div>
      </div>  
  )
}

export default BlogCard