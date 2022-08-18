import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import searchicon from '../../assets/images/search-icon.png';
import './search.scss'
const Search = () => {

  const history = useNavigate();

  const [keyword, setKeyword] = useState('');

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      history(`/products/${keyword}`);
    }
    else {
      history('/products');
    }

  };
  return (
    <React.Fragment>
      <form className='nav__searchbar' onSubmit={searchSubmitHandler}>
        <input className="searchfield"
          type="text"
          placeholder="Searching for ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className='searchicon'>
          <img alt='iconimg' className='iconimg' src={searchicon}></img>
        </button>

      </form>
    </React.Fragment>
  );
}

export default Search