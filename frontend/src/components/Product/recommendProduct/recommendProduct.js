import React from 'react'
import './recommendproduct.scss'
import ProductCard from '../../Home/productcard/ProductCard';
const recommendProduct = ({ productName }) => {

    //this data from recommended system
    const RecommendedProduct = [
        {
            _id: "6326fbe3d014708d2c0407bc",
            name: "lenovo",
            description: "best gaming laptop",
            price: 100000,
            ratings: 5,
            category: "laptop",
            stock: 9,
            numOfReviews: 1,
            images: [
                {
                    url: "sample image"
                }
            ],
            reviews: []

        },
        {
            _id: "6326fbe3d014708d2c0407bc",
            name: "lenovo",
            description: "best gaming laptop",
            price: 100000,
            ratings: 5,
            category: "laptop",
            stock: 9,
            numOfReviews: 1,
            images: [
                {
                    url: "sample image"
                }
            ],
            reviews: []

        },
        {
            _id: "6326fbe3d014708d2c0407bc",
            name: "lenovo",
            description: "best gaming laptop",
            price: 100000,
            ratings: 5,
            category: "laptop",
            stock: 9,
            numOfReviews: 1,
            images: [
                {
                    url: "sample image"
                }
            ],
            reviews: []

        },

    ];


    return (
        <div className='recommendedsection container'>
            <div className='recommendedsection__title'>
                <h1 className='recommendedsection__title__text'>Recommended Products</h1>
            </div>
            <div className="recommendedsection__container">
                {RecommendedProduct && RecommendedProduct.map((product, index) =>
                    <ProductCard key={index} product={product} />
                )}
            </div>

        </div>
    )
}

export default recommendProduct