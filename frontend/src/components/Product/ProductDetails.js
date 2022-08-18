import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import './productDetails.scss';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProductDetails } from '../../redux/actions/productAction';
import ReactStars from 'react-rating-stars-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from '../layout/Loader/loader';
import { useAlert } from 'react-alert';
import ReviewCard from './ReviewCard';
const ProductDetails = () => {
    //for accessing params //older way causing error
    const { id } = useParams();

    const alert = useAlert();
    const dispatch = useDispatch();

    const { product, error, loading } = useSelector((state) => state.productDetail);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert]);

    const options = { 
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        activeColor: "#ffd700",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };
    return (
        <React.Fragment>
            {loading ? (<Loader />) : (
                <React.Fragment>
                    <div className='productdetails'>
                        <div className="productdetails__container">
                            <div className="productdetails__imgCarousel">
                                <Carousel className="productdetails__Carousel">
                                    {product.images && product.images.map((item, index) => {
                                        return (
                                            <img className='CarouselImage'
                                                key={item.url}
                                                src={item.url}
                                                alt={`${index} Slide`}
                                            />
                                        );
                                    })}
                                </Carousel>
                            </div>
                            <div className='productdetails__desc'>
                                <div className='productdetails__desc__detailsblock-1'>
                                    <h2>{product.name}</h2>
                                    <p>Product #{product._id}</p>
                                </div>
                                <div className='productdetails__desc__detailsblock-2'>
                                    <ReactStars activeColor="#ffd700" {...options} />
                                    <span>({product.numOfReviews} Reviews )</span>
                                </div>

                                <div className='productdetails__desc__detailsblock-3'>
                                    <h1> &#8377;{product.price}</h1>
                                    <div className='productdetails__desc__detailsblock-3__1'>
                                        <div className='productdetails__desc__detailsblock-3__1-1'>
                                            <button className='signbutton'>-</button>
                                            <input value='1' type='number'></input>
                                            <button className='signbutton'>+</button>
                                        </div>{" "}
                                        <button className="btn btn__cart ">Add to Cart</button>
                                    </div>
                                    <p> Status:{" "}
                                        <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                                            {product.stock < 1 ? "OutOfStock" : "InStock"}
                                        </b>
                                    </p>
                                </div>
                                <div className='productdetails__desc__detailsblock-4'>
                                    Description:<p>{product.description}</p>
                                </div>
                                <button className='submitReview btn btn__cart'>Submit Review</button>
                            </div>
                        </div>
                    </div>


                    <div className='descriptioreview__tab '>
                        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                            <TabList>
                                <Tab default="0">Description</Tab>
                                <Tab>Review</Tab>
                            </TabList>

                            <TabPanel>
                                <p className='tab_description_content'>{product.description}</p>
                            </TabPanel>
                            <TabPanel>
                                {product.reviews && product.reviews[0] ? (
                                    <div className='reviews'>
                                        {product.reviews && product.reviews.map(
                                            (review) => <ReviewCard review={review} />)}
                                    </div>
                                ) : (
                                    <p className='noreview'>No Reviews Yet</p>
                                )
                                }
                            </TabPanel>
                        </Tabs>
                    </div>
                </React.Fragment>
            )
            }
        </React.Fragment>

    )
}

export default ProductDetails