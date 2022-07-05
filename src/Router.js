import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "App";
import Loader from "components/loader/loader";

// const HomePage = React.lazy(() => import("pages/home/homePage"));
const ProductDetailPage = React.lazy(() => import("pages/product/productDetailPage"));
const ProductListPage = React.lazy(() => import("pages/product/productListPage"));
const CartPage = React.lazy(() => import("pages/cart/cartPage"));


const Router = () => (
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="" element={<Navigate to="/venia" />} />
        <Route path="venia" element={
          <React.Suspense fallback={<Loader />}>
            <ProductListPage />
          </React.Suspense>
        } />
        <Route path="product">
          {/* <Route path="list" element={
            <React.Suspense fallback={<Loader />}>
              <ProductListPage />
            </React.Suspense>
          } /> */}
          <Route path=":id" element={
            <React.Suspense fallback={<Loader />}>
              <ProductDetailPage />
            </React.Suspense>
          } />
        </Route>
        <Route path="cart" element={
          <React.Suspense fallback={<Loader />}>
            <CartPage />
          </React.Suspense>
        } />
      </Routes>
    </App>
  </BrowserRouter>
);

export default Router;
