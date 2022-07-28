import React from 'react'
import ReactStars from 'react-rating-stars-component';
import profilePng from '../../assets/images/profile.jpg';
import './reviewcard.scss'
const ProductCard = ({ review }) => {
  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: "#ffd700",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true
  };
  return (
    <div className='reviewCard'>

      <div className="reviewCard__reviews">

        <div className='reviewCard__reviews__imgwrapper'>
          <img src={profilePng} alt='User' />
        </div>

        <div className='reviewCard__reviews__namewapper'>
          <h2>{review.name}</h2>
          <div className='reviewCard__reviews__namewapper__onediv'>
            <ReactStars {...options} />
            <span>({review.rating})</span>
            {/* <span>{review.CreatedAt}</span> */}
          </div>
        </div>

      </div>

      <p>{review.comment}</p>
    </div>
  )
}

export default ProductCard