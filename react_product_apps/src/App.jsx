//Routing Utama untuk Client Side Routing (Front End)
//File yg menangani dan mengatur navigasi/routing antar halaman menggunakan React Router

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 
import PrivateRoute from "./components/PrivateRoute";
import GoogleCallback from "./pages/GoogleCallback";

//Mendefinisikan beberapa route utama yg mengarah ke main pages
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/google/callback" element={<GoogleCallback />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
