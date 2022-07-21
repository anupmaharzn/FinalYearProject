import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import TopHeader from "./components/layout/TopHeader/TopHeader";
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';

import './scss/main.scss';
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (

    <Router>
      <TopHeader />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
