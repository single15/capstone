import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "App";
import Loader from "components/loader/loader";

const HomePage = React.lazy(() => import("pages/home/homePage"));
const ProductDetailPage = React.lazy(() => import("pages/product/productDetailPage"));
const ProductListPage = React.lazy(() => import("pages/product/productListPage"));
const CartPage = React.lazy(() => import("pages/cart/cartPage"));
const CheckoutPage = React.lazy(() => import("pages/checkout/checkoutPage"));
const OrderSummary = React.lazy(() => import("pages/order/order"));
const Whishlist = React.lazy(() => import("pages/whishlist/whishlistPage"));
const LoginPage = React.lazy(() => import("pages/login/loginPage"));


const Router = () => (
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="" element={<Navigate to="/capstone" />} />
        <Route path="capstone" element={
          <React.Suspense fallback={<Loader />}>
            <HomePage />
          </React.Suspense>
        } />
        <Route path="login" element={
          <React.Suspense fallback={<Loader />}>
            <div className="container">
              <LoginPage />
            </div>
          </React.Suspense>
        } />
        <Route path="product">
          <Route path="list/:category" element={
            <React.Suspense fallback={<Loader />}>
              <ProductListPage />
            </React.Suspense>
          } />
          <Route path=":id" element={
            <React.Suspense fallback={<Loader />}>
              <div className="container">
                <ProductDetailPage />
              </div>
            </React.Suspense>
          } />
        </Route>
        <Route path="cart" element={
          <React.Suspense fallback={<Loader />}>
            <div className="container">
              <CartPage />
            </div>
          </React.Suspense>
        } />

        <Route path="checkout" element={
          <React.Suspense fallback={<Loader />}>
            <div className="container">
              <CheckoutPage />
            </div>
          </React.Suspense>
        } />

        <Route path="ordersummary" element={
          <React.Suspense fallback={<Loader />}>
            <div className="container">
              <OrderSummary />
            </div>
          </React.Suspense>
        } />

        <Route path="whishlist" element={
          <React.Suspense fallback={<Loader />}>
            <div className="container">
              <Whishlist />
            </div>
          </React.Suspense>
        } />

        
      </Routes>


    </App>
  </BrowserRouter>
);

export default Router;
