import React from "react";
import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CategoryPage from "./Paginas/CategoryPage/CategoryPage";
import UsersPage from "./Paginas/UsersPage/UsersPage";
import ProductDetailPage from "./Paginas/ProductDetailPage/ProductDetailPage";
import Carwidget from "./components/Cardwidget/Carwidget";
import { ProductsProvider } from "./context/ProductsContext";
import ShoppingCarPage from "./Paginas/ShoppingCarPage/ShoppingCarPage";

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <Header title="The Street Store" />
          <NavBar />
          <Carwidget />
        </div>

        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/item/:id" element={<ProductDetailPage />} />
          <Route path="/shopping-car" element={<ShoppingCarPage />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
