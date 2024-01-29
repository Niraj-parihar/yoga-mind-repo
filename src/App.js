import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";
import BatchSlotPage from "./components/BatchSlotPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/batch-slot" element={<BatchSlotPage />} />
      </Routes>
    </Router>
  );
};

export default App;
