import React,{useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import Compare from '../assets/images/compare.png';
import Heart from '../assets/images/heart.png';
import Person from '../assets/images/person.png';
import Cart from '../assets/images/cart.png';
import Category from '../assets/images/category.png';
import { FaCaretDown,FaCaretUp } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';


function Header() {

    const [menuTrue, setMenuTrue] = useState(false);


  return (
      <>
      <header className="header text-sm header-top-strip py-3">
              <div className="container text-white mx-auto">
              <div className='flex'>
                      <div className='flex-1'>
                      <p>Free Shipping Over $100 &  Free Returns </p>
                      </div>
                      <div className='flex-6'>
                          <p>Hotline: <a href="tel:+95 265577722">+95 265577722</a></p>
                      </div>
              </div>
              </div>      
      </header>
          <header className='header-upper py-3'>
          <div className='container mx-auto'>
                  <div className='flex text-white items-center'>
                  <div className='flex-[2]'>
                         <Link><h3 className=' text-3xl font-semibold'>KhitZay</h3></Link>    
                  </div>
                      <div className='flex-[6]'>
                          <div className='input-group flex  items-center justify-center'>
                              <input
                                  type='text'
                                  className='from-control outline-none text-black text-sm h-[35px] w-full py-2 px-2 rounded-tl-md rounded-bl-md'
                                  placeholder='Search Product Here...'
                                  aria-label='Search Product Here...'
                                  aria-describedby='basic-addon2'
                              />
                              <span className='search flex items-center cursor-pointer justify-center text-black rounded-r-md w-[40px] h-[35px] py-2 px-2' id="basic_addon2"><FiSearch/></span>
                          </div>
                      </div>  
                      <div className=' ml-8 flex-[5]'>
                          <div className='header-upper-links text-xs flex items-center justify-between'>
                              <div>
                                  <Link to="/compare-product" className='flex gap-2 font-extralight items-center justify-center'>
                                      <img className='w-[25px] ' src={Compare} alt="Compare" />
                                      <p>
                                          Compare <br/> Products
                                      </p>
                                  </Link>
                              </div>
                              <div>
                                  <Link to="/favourite-wishlist"  className='flex gap-2 font-extralight items-center justify-center' >
                                      <img className='w-[25px]' src={Heart} alt='heart'/>
                                      <p>Favourite <br/> Wishlist</p></Link>
                                  
                              </div>
                              <div>
                                  <Link to="/login" className='flex gap-2 font-extralight items-center justify-center'>
                                      <img src={Person}  alt="person" className='w-[25px]'/>
                                      <p>Log in <br/> My Account</p>
                                  </Link>
                                  
                              </div>
                              <div>
                                  <Link className='flex items-center gap-2'>
                                      <img src={Cart} alt="cart" className='w-[25px]'/>
                                      <div className=' flex flex-col'>
                                          <span className='w-[30px] text-center rounded-sm bg-white text-black'>0</span>
                                          <p className='w-[20px] text-center rounded-sm text-white'>$0.00</p>

                                      </div>
                                  
                                  </Link>
                                  
                              </div>

                      </div>
                      </div>  
                      
                  </div>        
          </div>
          </header>  
          <header className="header-bottom text-xs text-white py-5">
              <div className='container mx-auto'>
                  <div className='flex'>
                      <div className='menu-bottom  flex items-center'>
                          <div className='pr-5 border-r-[0.1px] mr-5'>
                              <div className='drop-down select-none relative'>
                                  <button onClick={()=>setMenuTrue(!menuTrue)} className='flex w-[300px] items-center justify-start gap-2' type='button' aria-expanded="false">
                                      <img src={Category} alt="category" className='w-[30px]' />
                                       <span className='flex items-center w-full justify-between gap-1 uppercase'>Shop Categories {menuTrue?<FaCaretUp/>:<FaCaretDown/>} </span>
                                  </button>
                                  {
                                      menuTrue?<> <ul className='dropdown-menu text-sm z-50  top-[47px] rounded-sm bg-slate-400 absolute right-0 left-0 p-3 pb-5 rounded-b-md'>
                                  <li className='p-[10px] mb-[3px] border-b-[0.5px]  border-b-gray-500'>
                                  <Link className='uppercase'>Actions</Link>            
                                  </li>
                                  <li className='p-[10px] mb-[3px] border-b-[0.5px]  border-b-gray-500'>
                                  <Link  className='uppercase'>More Actions</Link>  
                                  </li>   
                                  <li className='p-[10px] mb-[3px] border-b-[0.5px]  border-b-gray-500'>
                                  <Link  className='uppercase'>Something Else Here</Link>  
                                  </li>   
                                      
                                  </ul></>:<></>
                                 }
                                 
                              </div>
                          </div>
                          <div className='menu-links'>
                              <div className='flex items-center gap-3 '>
                                  <NavLink to="">HOME</NavLink>
                                  <NavLink to="/shop ">OUR STORE</NavLink>
                                  <NavLink to="/blog">BLOGS</NavLink>
                                  <NavLink to="/contact">CONTACT</NavLink>


                              </div>
                          </div>
                      </div>
                  </div>
          </div>
          </header>
      </>
  )
}

export default Header