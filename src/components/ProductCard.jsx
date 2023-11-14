import React,{useState} from 'react'
import Product from '../assets/images/tab1.jpg'
import ProductTwo from '../assets/images/tab.jpg'
import StarRatings from 'react-star-ratings'
import AddCard from '../assets/images/add-cart.svg'
import SeeCard from '../assets/images/view.svg'
import Compare from '../assets/images/prodcompare.svg'
import WishList from '../assets/images/wish.svg'
import { Link, useLocation } from 'react-router-dom'
import { Location } from 'react-router-dom'


function ProductCard({grid}) {
  const [rating, setRating] = useState(0);


    
  const changeRating = (newRating) => {
    setRating(newRating);
  };


  const location = useLocation();
 

  return (
    <div  className={`${location.pathname === "/shop"?`gr_${grid} pdr`:`flex-[3]`}`}>
      <Link to="/single-pro">
        <div className={`product_card relative `}>
        <div className='whishlist-icon absolute w-[20px]'>
          <Link>
            <img src={WishList}  alt='wishlist' />
          </Link>
        </div>
              <div className='product_image'>
          <img src={Product} alt='product' className='product1_img' /> 
          <img src={ProductTwo} alt="product2" className='product2_img' />
              </div>      
                <div className='product_card_details'>
                  <h6 className='brand'>Havels</h6>
                  <h5 className='product_title   mb-1'>Kids headphones bulk 10 pack multi colored for students</h5>
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
          <p className={`description des_${grid}`}>
            At vero es et accusamus et justo odio dignissimos ducimus qui
blanditiis praesentium voluptatum deleniti atque corrupti quos
dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
          </p>
                  <p className='product_price mt-1'>$100.00</p>
        <div className='active_action_bar absolute'>
                      <div className='flex flex-col gap-[10px]'>
                        <Link><img src={Compare} className='w-[25px]' alt='add_cart' /></Link>
                        <Link><img src={SeeCard} className='w-[25px]' alt='add_cart'/></Link>
                      <Link><img src={AddCard} className='w-[25px]' alt='add_cart'/></Link>
                    </div>            
        </div>
        </div>
          </div>
      </Link>
        
    </div>
  )
}

export default ProductCard