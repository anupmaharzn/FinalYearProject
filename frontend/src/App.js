import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import UpdateProfile from './components/user/UpdateProfile/UpdateProfile.js';
import UpdatePassword from './components/user/UpdatePassword/UpdatePassword.js';
import ForgotPassword from './components/user/ForgotPassword/ForgotPassword.js';
import ResetPassword from './components/user/ResetPassword/ResetPassword.js';
import Cart from './components/Cart/Cart.js'
import Shipping from './components/Cart/Shipping/Shipping.js'
import ConfirmOrder from "./components/Cart/ConfirmOrder/ConfirmOrder";
import Payment from './components/Cart/Payment/Payment.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import ProtectedRoute from "./components/Route/ProtectedRoute";
import OrderSuccess from "./components/Cart/Payment/OrderSuccess.js"

function App() {

  //given when we reload we dont lose logined user data
  //render once after initial render

  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {

    const { data } = await axios.get(`/api/v1/stripeapikey`);

    setStripeApiKey(data.stripeApiKey);
  };

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (



    <Router>
      <ScrollToTop />
      <TopHeader />
      <Header />


      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />

      <ProtectedRoute exact path="/account" component={Profile} />
      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
      <ProtectedRoute exact path="/password/update" component={UpdatePassword} />

      <Route exact path="/password/forgot" component={ForgotPassword} />
      <Route exact path="/password/reset/:token" component={ResetPassword} />
      <Route exact path="/login" component={LoginSignUp} />
      <Route exact path="/cart" component={Cart} />

      <ProtectedRoute exact path="/shipping" component={Shipping} />
      <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}

      <ProtectedRoute exact path='/success' component={OrderSuccess} />


      <Footer />
    </Router>


  );
}

export default App;
