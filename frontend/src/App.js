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
function App() {
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
        <Route exact path='/login' element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
