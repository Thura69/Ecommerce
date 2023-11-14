import React from 'react'
import { Link } from 'react-router-dom'


function BreadCrumb({title}) {
  return (
      <div className='breadcrumb bg-white border-2  py-4'>
          <div className='container mx-auto'>
              <div className='flex flex-row'>
                  <div className='flex-[12]'>
                      <p className='text-center font-extralight'>
                          <Link to='/'>Home / {title}</Link>
                      </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default BreadCrumb