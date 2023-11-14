import React from 'react'
import Meta from './Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaInfo } from 'react-icons/fa';

function Contact() {

  const info = "flex items-center gap-2 mb-[20px] text-gray-500";

  return (
    <div className=' bg-slate-200'>
      <Meta title={"Contact"} />
      <BreadCrumb title={"Contact"} />
      <div className='py-5 '>
        <div className='container mx-auto'>
          <div className='flex'>
            <div className='flex-[12]'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.76550318480093!2d96.21503400000003!3d19.76384542089431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c8b9fc0a3b73fd%3A0xff3d2edfd768ae08!2sDigital%20Engineering%20Tech%20Ltd.!5e0!3m2!1sen!2smm!4v1693247544681!5m2!1sen!2smm" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
            </div>
          </div>
          <div className='flex-[12] mt-5'>
            <div className='flex bg-white  p-5 rounded-md justify-between items-start'>
              <div className='w-[48%]'>
                <h3 className='contact-title text-[4vh] font-semibold mb-[30px]'>Contact</h3>
                <div className='flex flex-col justify-start'>
                  <input placeholder='Name' className='border-2 p-2 bg-slate-200 rounded-md mb-[20px]'/>
                  <input placeholder='Email *' className='border-2 p-2 bg-slate-200 rounded-md mb-[20px]' />
                  <input placeholder='Phone Number' className='border-2 p-2 bg-slate-200 rounded-md mb-[20px]'/>
                  <textarea placeholder='Comment' className='border-2 p-2 bg-slate-200 rounded-md mb-[20px] h-[200px]'/>
                  <button className='contact-button text-white w-[100px] rounded-3xl p-3'>Send</button>
                </div>
              </div>
              <div className='w-[48%]'>
                <h3 className='contact-title text-[4vh] font-semibold mb-[30px]'>Get in touch with us</h3>
                  <ul>
                  <li className={info}>
                  <AiFillHome />
                  <p>33 New Montgomery St.Ste 750 San Franciso,Ca, USA 94105</p>
                </li>
                <li className={info}>
                  <AiFillPhone />
                  <p>6 (+91)7-723-4608</p>
                </li>
                <li className={info}>
                  <MdEmail />
                  <p>demo@company.com</p>
                </li>
                <li className={info}>
                  <FaInfo />
                  <p>Monday - Friday 10 AM - 8 PM</p>
                </li>
               </ul>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact