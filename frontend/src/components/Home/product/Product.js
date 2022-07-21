/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React from 'react'
import './product.scss';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component'

const Product = ({ product }) => {
    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };

    return (


        <Link className='productsection__card' to={`/product/${product._id}`}>

            <div className='productsection__card__imgcontainer'> <img src={product.images[0].url} alt={product.name} style={{ width: '290px', height: '290px' }} /></div>
            <div className='productsection__card__details'>
                <p className='productsection__card__name'>{product.name}</p>
                <div className='productsection__card__rating'>
                    <ReactStars {...options} /> <span>({product.numOfReviews})</span>
                </div>
                <p className='productsection__card__price'> &#8377;{product.price}</p>

            </div>

        </Link>





    )
}

export default Product