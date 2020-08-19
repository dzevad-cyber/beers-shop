import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss';

import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';
import Footer from './components/footer/Footer';
import BtnScrollToTopMobile from './components/btn-scroll-to-top-mobile/BtnScrollToTopMobile';
import SignInPage from './pages/signin/SignInPage';
import RegisterPage from './pages/register-page/RegisterPage';
import ProductsPage from './components/products-page/ProductsPage';
import ProductPage from './pages/product-page/ProductPage';
import CartPage from './pages/cart-page/CartPage';
import BtnScrollTop from './components/btn-scroll-top/BtnScrollTop';
import VerifyAccountPage from './pages/verify-account/VerifyAccountPage';
import ProfilePage from './pages/profile/ProfilePage';

import { getMe, selectUser } from './store/userSlice';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          {/* <Route path="/profile" component={ProfilePage} /> */}
          <Route
            exact
            path="/account/verify/:token"
            component={VerifyAccountPage}
          />
          <ProtectedRoute user={user} path="/profile" component={ProfilePage} />
        </Switch>
        <Footer />
        <BtnScrollToTopMobile>back to top</BtnScrollToTopMobile>
        <BtnScrollTop />
      </div>
    </Router>
  );
}

export default App;
