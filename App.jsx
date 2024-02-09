import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route exact path="/products" component={<Products />} />
        <Route exact path="/products/:id" component={<Product/>} />
        
      </Routes>
    </>
  );
}

export default App;
