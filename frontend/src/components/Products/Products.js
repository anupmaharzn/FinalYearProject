import React, { useEffect, useState } from 'react';
import './products.scss';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line
import { getProduct, clearErrors } from '../../redux/actions/productAction';
import Loader from '../../components/layout/Loader/loader';
import ProductCard from '../Home/productcard/ProductCard';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
const Products = () => {


  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const { products, loading, error, productsCount, resultPerPage } = useSelector(state => state.products);

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }


  useEffect(() => {
    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);



  return (
    <React.Fragment>
      {loading ? <Loader /> : <React.Fragment>

        <div className='allproductsection container'>
          <h1 className='allproductsection__title'>Products</h1>
          <div className="allproductsection__container">
            {products && products.map((product, index) =>
              <ProductCard key={index} product={product} />
            )}
          </div>
        </div>


        {resultPerPage < productsCount && (
          <div className='paginationbox'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass='page-item'
              linkClass='page-link'
              activeClass='pageItemActive'
              activeLinkClass='pageLinkActive'
            />
          </div>)
        }




      </React.Fragment>}
    </React.Fragment >
  )
}

export default Products