import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./containers/Shop";
import Basket from "./components/Basket";
import ErrorPage from "./components/ErrorPage";

const App = () => {

  return (
    <Router>
        <h1>Random Product Shop!</h1>
        <NavBar />

      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/products" element={< Shop />} />
        <Route exact path="/basket" element={< Basket />} />
        <Route path="*" element={< ErrorPage />}/>
      </ Routes>
    </Router>
  );
}

export default App;
