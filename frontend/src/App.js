import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import TopHeader from "./components/layout/TopHeader/TopHeader";
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ScrollToTop from './components/utils/ScrollToTop';
import './scss/main.scss';
import ProductDetails from "./components/Product/ProductDetails";
import Products from './components/Products/Products.js';
import LoginSignUp from "./components/user/LoginSignUp";
import store from '../src/redux/store';
import { loadUser } from "./redux/actions/userAction";
import Profile from './components/user/Profile/Profile.js';
// import ProtectedRoute from "./components/Route/ProtectedRoute";
// import { useSelector } from 'react-redux';
function App() {
  // const { isAuthenticated } = useSelector((state) => state.user);
  //given when we reload we dont lose logined user data
  //render once after initial render
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (

    <Router>
      <ScrollToTop />
      <TopHeader />
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/account" element={<Profile />} />
        <Route exact path="/login" element={<LoginSignUp />} />
      </Routes>

      <Footer />
    </Router>


  );
}

export default App;
